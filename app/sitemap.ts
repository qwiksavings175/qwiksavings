import { MetadataRoute } from "next";
import db from "../lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stores = await db.store.findMany({});
  const categories = await db.category.findMany({});
  const evnets = await db.event.findMany({});
  const blogs = await db.blog.findMany({});

  const storeUrls = stores.map((store) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/${encodeURIComponent(store.slug)}`,
      lastModified: new Date(store.updatedAt),
    };
  });

  const categoryUrls = categories.map((category) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${encodeURIComponent(category.slug)}`,
      lastModified: new Date(category.updatedAt),
    };
  });

  const eventUrls = evnets.map((event) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/${encodeURIComponent(event.slug)}`,
      lastModified: new Date(event.updatedAt),
    };
  });

  const blogUrls = blogs.map((blog) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${encodeURIComponent(blog.blogId)}`,
      lastModified: new Date(blog.updatedAt),
    };
  });

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/how-it-works`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/termsofservice`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacypolicy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-codes`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactus`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/advertisewithus`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
    },
    ...storeUrls,
    ...categoryUrls,
    ...eventUrls,
    ...blogUrls,
  ];
}
