"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  useImageCarouselData,
  CarouselImageItem,
} from "@/hooks/useImageCarouselData";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "@/app/api/axios/axios";
import { useRouter } from "next/navigation";
import { constructS3Url } from "@/lib/utilities/AwsConfig";

const ImageCarousel = () => {
  const { data, isLoading, error } = useImageCarouselData();
  const plugin = useRef(Autoplay({ delay: 5000 }));
  const router = useRouter();

  if (!data || data.length === 0 || error) return null;
  if (isLoading)
    return <Skeleton className="w-full lg:w-2/3 xl:w-3/4 2xl:-translate-x-6" />;

  const handleImageClick = async (coupon: CarouselImageItem) => {
    try {
      // Update coupon user count
      await axios.post("/updatecouponusercount", { couponId: coupon.couponId });
      // Encode coupon data
      const encodedCoupon = encodeURIComponent(
        JSON.stringify({
          isCouponFromHome: true,
          couponId: coupon.couponId,
          coupon_code: coupon.coupon_code,
          logo: coupon.store.logo_url,
          type: coupon.type,
          title: coupon.title,
          ref_link: coupon.ref_link,
        }),
      );

      // Construct store URL with encoded coupon data
      const storeUrl = `/store/${coupon.store.slug}?coupon=${encodedCoupon}`;

      // Redirect to the store page
      router.push(storeUrl);
    } catch (error) {
      console.error("Error handling image click:", error);
    }
  };

  return (
    <Carousel
      className="w-full rounded-2xl lg:ml-4 lg:w-2/3 xl:ml-0 xl:w-[75.5%] xl:-translate-x-2 2xl:w-[80%] 2xl:-translate-x-8"
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin?.current?.stop()}
      onMouseLeave={() => plugin?.current?.play()}
    >
      <CarouselContent className="max-h-44 rounded-2xl sm:max-h-72 xl:max-h-80">
        {data.map((image, index) => (
          <CarouselItem key={image.carouselPosterUrl} className="rounded-2xl">
            <div
              className="size-full cursor-pointer rounded-2xl"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={
                  constructS3Url(image.carouselPosterUrl) ??
                  "https://via.placeholder.com/600x400"
                }
                alt={`carousel image ${index + 1}`}
                width={1920}
                height={1080}
                className="size-full rounded-2xl object-fill"
                loading="eager"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default ImageCarousel;
