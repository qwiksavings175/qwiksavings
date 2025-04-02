import { Metadata } from "next";
import EventDetailsPage from "../../_EventComponents/EventDetailsPage";
import db from "@/lib/prisma";

interface Params {
  params: {
    eventslug: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { eventslug } = params;
  const eventData = await db.event.findUnique({
    where: { slug: eventslug },
    select: {
      name: true,
      description: true,
      metaTitle: true,
      metaDescription: true,
    },
  });

  // Prefer custom metaTitle/metaDescription for SEO; fall back to default name/description if not provided.
  const title = eventData?.metaTitle || eventData?.name || "Default Title";
  const description =
    eventData?.metaDescription || eventData?.description || "Default Description";

  return {
    title,
    description,
    alternates: {
      canonical: `https://qwiksavings.com/events/${eventslug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://qwiksavings.com/events/${eventslug}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const EventPage = ({ params }: Params) => {
  return (
    <main className="overflow-x-hidden">
      <EventDetailsPage />
    </main>
  );
};

export default EventPage;
