import { Metadata } from "next";
import CategoryDetailPage from "@/app/(Pages)/_PageComponents/CategoryDetailPage";
import db from "@/lib/prisma";

interface Params {
  params: {
    categoryslug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { categoryslug } = params;
  const categoryData = await db.category.findUnique({
    where: { slug: categoryslug },
    select: {
      name: true,
      description: true,
      metaTitle: true,
      metaDescription: true,
    },
  });

  // Prefer custom metaTitle/metaDescription for SEO; fall back to default name/description if not provided.
  const title = categoryData?.metaTitle || categoryData?.name || "Default Title";
  const description =
    categoryData?.metaDescription || categoryData?.description || "Default Description";

  return {
    title,
    description,
    alternates: {
      canonical: `https://qwiksavings.com/categories/${categoryslug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://qwiksavings.com/categories/${categoryslug}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const CategoryPage = ({ params }: Params) => {
  return (
    <main className="overflow-x-hidden">
      <CategoryDetailPage categoryname={params.categoryslug} />
    </main>
  );
};

export default CategoryPage;
