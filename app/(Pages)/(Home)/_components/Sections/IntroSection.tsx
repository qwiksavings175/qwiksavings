"use client";
import ImageCarousel from "../ImageCarousel";
import CardStackFlipper from "../CardStackFlipper";
import { useActiveFestival } from "@/hooks/useFestivalActive";
import { cn } from "@/lib/utils";

const IntroSection = () => {
  const isActive = useActiveFestival((state) => state.isActive);
  return (
    <section className="container m-auto">
      {/* Image slider and flipper div */}
      <div
        className={cn(
          "relative mb-8 mt-4 flex min-h-[10vh] items-center justify-between px-8 lg:mt-0 lg:min-h-[35vh] lg:px-12 xl:px-8 2xl:gap-x-0",
          isActive
            ? "mb-[4.5rem] translate-y-10 transition-transform duration-200 ease-linear"
            : "translate-y-0 transition-transform duration-200 ease-linear",
        )}
      >
        <ImageCarousel />
        <div className="absolute -right-10 top-0 p-4">
          <CardStackFlipper autoplay />
        </div>
      </div>
      {/* Intro heading div */}
      <div className="flex w-full flex-col items-center justify-center bg-popover p-4 py-8">
        <h1 className="mx-auto mb-6 px-4 text-center text-2xl font-bold sm:px-6 lg:px-12 lg:text-3xl xl:px-2 2xl:px-0">
          Qwik Savings - Your one stop shop for quick savings
        </h1>
        <div className="flex max-w-screen-xl flex-col justify-between gap-6 font-medium sm:px-6 lg:flex-row lg:px-12 xl:px-6 2xl:px-0">
          <p className="basis-1/2 text-justify">
            Escape the chaos of crowded malls and endless parking quests! Qwik
            Savings is your digital haven, offering steep discounts on
            everything you desire, all from the comfort of your couch. By
            offering verified, double-checked coupon codes l and offers for over
            5,000+ brands on our portal, we are the front line leaders of online
            coupons in the USA and beyond.
          </p>

          <p className="basis-1/2 text-justify">
            Whatever your heart desires, we aim to have it all. Our dedicated
            code expert team is always on the hunt for the perfect coupons so
            that you can enjoy great savings without even wasting a time. Simply
            visit our portal, explore our diverse range of brands, and place
            your trust in us-rest assured, disappointment isn&apos;t in our
            dictionary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
