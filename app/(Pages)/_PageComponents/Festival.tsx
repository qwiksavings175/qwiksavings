import { useEffect } from "react";
import { ArrowRight, Gift, XIcon } from "lucide-react";
import Link from "next/link";
import { useActiveFestival } from "@/hooks/useFestivalActive";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FestivalStrip: React.FC = () => {
  const { data, isActive, error, fetchActiveFestival, onSetInactive } =
    useActiveFestival((state) => state);

  useEffect(() => {
    fetchActiveFestival();
  }, [fetchActiveFestival]);

  if (error || !data) return null;

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 flex min-h-10 w-full items-center justify-center bg-black px-4 text-slate-200 transition-all duration-300 ease-in-out sm:px-4 md:px-6 xl:px-12",
        isActive ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="ml-auto flex w-full items-center justify-center gap-x-4">
        <Image
          src={"/Festival/Gift.webp"}
          alt="Gift Vector"
          width={400}
          height={400}
          className="hidden h-10 w-16 text-app-main transition-transform duration-200 ease-linear sm:block"
        />
        <p className="text-xs font-semibold first-letter:uppercase sm:text-base">
          {data.title}
        </p>

        <Link
          href={`/store/${data.store.slug}`}
          className="flex items-center gap-x-1 break-words text-xs underline sm:text-sm"
        >
          Visit {data.store.slug} <ArrowRight className="size-4" />
        </Link>
      </div>
      <XIcon onClick={onSetInactive} className="ml-auto cursor-pointer" />
    </div>
  );
};

export default FestivalStrip;
