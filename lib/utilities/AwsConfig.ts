'use server'

import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToS3(
  buffer: Buffer,
  folder: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = { folder };
    const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) {
        console.error("Cloudinary Upload Error:", error);
        return reject(new Error("Failed to upload file to Cloudinary"));
      }
      if (result) {
        // Return the secure URL of the uploaded image
        return resolve(result.secure_url);
      }
      return reject(new Error("Unknown error during Cloudinary upload"));
    });
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}

export async function deleteFromS3(key: string): Promise<void> {
  try {
    const result = await cloudinary.uploader.destroy(key);
    if (result.result !== "ok" && result.result !== "not found") {
      // "not found" is acceptable if the resource was already deleted
      throw new Error(`Deletion unsuccessful: ${result.result}`);
    }
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    throw new Error("Failed to delete file from Cloudinary");
  }
}

export async function deleteMultipleFilesFromS3(
  keyToDeleteArray: { Key: string }[],
): Promise<void> {
  try {
    const publicIds = keyToDeleteArray.map((item) => item.Key);
    // Delete multiple resources in one API call
    await cloudinary.api.delete_resources(publicIds);
  } catch (error) {
    console.error("Cloudinary Multiple Delete Error:", error);
    throw new Error("Failed to delete multiple files from Cloudinary");
  }
}
