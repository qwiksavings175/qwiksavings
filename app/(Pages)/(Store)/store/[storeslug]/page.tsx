import { Metadata } from "next";
import DetailsPage from "@/app/(Pages)/_PageComponents/DetailsPage";
import db from "@/lib/prisma";

interface Params {
  params: {
    storeslug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { storeslug } = params;
  const storeData = await db.store.findUnique({
    where: { slug: storeslug },
    select: {
      name: true,
      description: true,
      metaTitle: true,
      metaDescription: true,
    },
  });

  // Prefer custom metaTitle/metaDescription for SEO; fall back to default name/description if not provided.
  const title = storeData?.metaTitle || storeData?.name || "Default Title";
  const description =
    storeData?.metaDescription || storeData?.description || "Default Description";

  return {
    title,
    description,
    alternates: {
      canonical: `https://qwiksavings.com/stores/${storeslug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://qwiksavings.com/stores/${storeslug}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const StorePage = () => {
  return (
    <main className="overflow-x-hidden">
      <DetailsPage fetchFrom="store" />
    </main>
  );
};

export default StorePage;
