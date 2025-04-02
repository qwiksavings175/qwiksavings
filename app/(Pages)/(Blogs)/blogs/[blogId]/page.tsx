import { Metadata } from "next";
import BlogDetailsPage from "@/app/(Pages)/(Blogs)/_BlogComponents/BlogDetailsPage";
import db from "@/lib/prisma";

interface Params {
  params: {
    blogId: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { blogId } = params;
  const blogData = await db.blog.findUnique({
    where: { blogId: Number(blogId) },
    select: {
      title: true,
      content: true,
      metaTitle: true,
      metaDescription: true,
    },
  });

  // Prefer custom metaTitle/metaDescription for SEO; fall back to default title/description if not provided.
  const title = blogData?.metaTitle || blogData?.title || "Default Title";
  const description = blogData?.metaDescription || blogData?.content || "Default Description";

  return {
    title,
    description,
    alternates: {
      canonical: `https://qwiksavings.com/blog/${blogId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://qwiksavings.com/blog/${blogId}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const BlogPage = ({ params }: Params) => {
  return <BlogDetailsPage blogId={params.blogId} />;
};

export default BlogPage;
