"use client";
import { ChangeEvent, use, useEffect, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import axios from "@/app/api/axios/axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AxiosError } from "axios";
import { CreateCouponFormSchema } from "@/lib/FormSchemas/CreateCouponFormSchema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckIcon, MinusCircle } from "lucide-react";
import { Calendar } from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/MultipleSelector";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { constructS3Url } from "@/lib/utilities/AwsConfig";

type InputType = z.infer<typeof CreateCouponFormSchema>;

interface CouponFormProps {
  categories: { name: string; categoryId: number }[];
  stores: { name: string; storeId: number }[];
  events: { name: string; eventId: number }[];
}

const EditCouponForm = ({ categories, stores, events }: CouponFormProps) => {
  const { couponId } = useParams();
  const router = useRouter();
  // for image preview
  const [selectedThumbnailImage, setSelectedThumbnailImage] = useState<
    string | null
  >(null);
  const [selectedFlipperImage, setSelectedFlipperImage] = useState<
    string | null
  >(null);
  const [selectedCarouselImage, setSelectedCarouselImage] = useState<
    string | null
  >(null);

  // NOTE: states to show remove image dialogs.
  const [showRemoveThumbnailDialog, setShowRemoveThumbnailDialog] =
    useState<boolean>(false);

  const [showRemoveFlipperDialog, setShowRemoveFlipperDialog] =
    useState<boolean>(false);

  const [showRemoveCarouselDialog, setShowRemoveCarouselDialog] =
    useState<boolean>(false);

  // NOTE: states to confirm removal of images

  const [confirmRemoveThumbnail, setConfirmRemoveThumbnail] = useState<
    boolean | null
  >(false);
  const [confirmRemoveFlipper, setConfirmRemoveFlipper] = useState<
    boolean | null
  >(false);
  const [confirmRemoveCarousel, setConfirmRemoveCarousel] = useState<
    boolean | null
  >(false);

  // NOTE: states to set previous image keys to delete
  const [keyToDeleteThumbnail, setKeyToDeleteThumbnail] = useState<
    string | undefined
  >();
  const [keyToDeleteFlipper, setKeyToDeleteFlipper] = useState<
    string | undefined
  >();
  const [keyToDeleteCarousel, setKeyToDeleteCarousel] = useState<
    string | undefined
  >();

  const eventOptions = events?.map((event) => {
    return {
      label: event.name,
      id: `${event?.eventId}`,
    };
  });

  // reference to the image input field
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const flipperRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLInputElement>(null);

  // date picker state
  const [date, setDate] = useState<Date | undefined>(new Date());
  // coupon details
  const [couponDetails, setCouponDetails] = useState<any>(null);

  const form = useForm<InputType>({
    resolver: zodResolver(CreateCouponFormSchema),
    defaultValues: {
      title: "",
      coupon_code: "",
      description: "",
      ref_link: "",
      thumbnail_url: undefined,
      flipperImage_url: undefined,
      carouselPosterUrl: undefined,
      category_id: "",
      type: "Deal",
      addToCarousel: "no",
      addToHomePage: "no",
      addToFlipper: "no",
      store_id: "",
      events: [],
      due_date: undefined,
    },
    mode: "all",
    shouldFocusError: true,
  });

  const { control, setValue, handleSubmit, formState, reset } = form;

  useEffect(() => {
    // Fetch initial data
    const fetchCouponData = async () => {
      try {
        const response = await axios.get(`/getcouponbyid/${couponId}`);
        const data = response.data;
        setCouponDetails(data.coupon);
      } catch (error) {
        console.error("Failed to fetch coupon data", error);
      }
    };

    fetchCouponData();
  }, [couponId, form]);

  useEffect(() => {
    if (couponDetails) {
      console.log(couponDetails);
      const eventIds =
        couponDetails?.events?.map((event: any) =>
          event?.eventId?.toString(),
        ) || [];
      // Set form values
      reset({
        coupon_code: couponDetails.coupon_code ?? "",
        description: couponDetails.description ?? undefined,
        ref_link: couponDetails.ref_link ?? "",
        title: couponDetails.title ?? "",
        category_id: couponDetails.category_id.toString() ?? "",
        store_id: couponDetails.store_id.toString() ?? "",
        events: eventIds,
        type: couponDetails.type === "Deal" ? "Deal" : "Coupon",
        addToCarousel: couponDetails.addToCarousel ? "yes" : "no",
        addToHomePage: couponDetails.addToHomePage ? "yes" : "no",
        addToFlipper: couponDetails.addToFlipper ? "yes" : "no",
      });
      // Set date
      if (couponDetails.due_date) {
        const date = new Date(couponDetails.due_date);
        setDate(date);
        setValue("due_date", date);
      }
      // Set image previews
      if (couponDetails.thumbnail_url)
        setSelectedThumbnailImage(
          constructS3Url(couponDetails.thumbnail_url) ?? null,
        );
      if (couponDetails.flipperImage_url)
        setSelectedFlipperImage(
          constructS3Url(couponDetails.flipperImage_url) ?? null,
        );
      if (couponDetails.carouselPosterUrl)
        setSelectedCarouselImage(
          constructS3Url(couponDetails.carouselPosterUrl) ?? null,
        );
    }
  }, [couponDetails, reset, setValue]);

  // handle thumbnail image onChange event
  const handleThumbnailChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      // const resizedFile = await resizeThumbnailImage(file);
      setValue("thumbnail_url", file);
      setSelectedThumbnailImage(URL.createObjectURL(file));
      setKeyToDeleteThumbnail(couponDetails.thumbnail_url);
    }
  };
  // handle Flipper image onChange event
  const handleFlipperChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // const resizedFile = await resizeFlipperImage(file);
      setValue("flipperImage_url", file);
      setSelectedFlipperImage(URL.createObjectURL(file));
      setKeyToDeleteFlipper(couponDetails.flipperImage_url);
    }
  };
  // handle Carousel image onChange event
  const handleCarouselChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // const resizedFile = await resizeCarouselPoster(file);
      setValue("carouselPosterUrl", file);
      setSelectedCarouselImage(URL.createObjectURL(file));
      setKeyToDeleteCarousel(couponDetails.carouselPosterUrl);
    }
  };

  const removeThumbnail = () => {
    setSelectedThumbnailImage(null);
    setValue("thumbnail_url", undefined);
    if (thumbnailRef.current) {
      thumbnailRef.current.src = "";
      thumbnailRef.current.value = "";
    }
    setKeyToDeleteThumbnail(couponDetails.thumbnail_url);
    setValue("addToHomePage", "no");
  };
  const removeFlipper = () => {
    setSelectedFlipperImage(null);
    setValue("flipperImage_url", undefined);
    if (flipperRef.current) {
      flipperRef.current.src = "";
      flipperRef.current.value = "";
    }
    setKeyToDeleteFlipper(couponDetails.flipperImage_url);
    setValue("addToFlipper", "no");
  };
  const removeCarousel = () => {
    setSelectedCarouselImage(null);
    setValue("carouselPosterUrl", undefined);
    if (carouselRef.current) {
      carouselRef.current.src = "";
      carouselRef.current.value = "";
    }
    setValue("addToCarousel", "no");
    setKeyToDeleteCarousel(couponDetails.carouselPosterUrl);
  };

  // form submission handler
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const formData = new FormData();
    if (data.thumbnail_url)
      formData.append("thumbnail_url", data.thumbnail_url);
    if (data.flipperImage_url)
      formData.append("flipperImage_url", data.flipperImage_url);
    if (data.carouselPosterUrl)
      formData.append("carouselPosterUrl", data.carouselPosterUrl);
    const { thumbnail_url, carouselPosterUrl, flipperImage_url, ...restData } =
      data;

    restData.thumbnailUrl = confirmRemoveThumbnail
      ? undefined
      : couponDetails.thumbnail_url;

    restData.carouselPoster_url = confirmRemoveCarousel
      ? undefined
      : couponDetails.carouselPosterUrl;

    restData.flipperImageUrl = confirmRemoveFlipper
      ? undefined
      : couponDetails.flipperImage_url;

    restData.keyToDeleteCarousel = keyToDeleteCarousel;
    restData.keyToDeleteThumbnail = keyToDeleteThumbnail;
    restData.keyToDeleteFlipper = keyToDeleteFlipper;

    formData.append("data", JSON.stringify(restData));
    try {
      const result = await axios.put(`/editcouponbyid/${couponId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.data.success) {
        toast({
          title: "Success",
          description: "Coupon updated successfully",
        });
        router.push("/admin/coupons");
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast({
          title: "Uh Oh!",
          description: err.response?.data.error,
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-4"
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <sup className="text-app-main">*</sup>
              <FormControl>
                <Input placeholder="Coupon title" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Coupon Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="ref_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference Link</FormLabel>
              <sup className="text-app-main">*</sup>
              <FormControl>
                <Input
                  placeholder="https://example.com"
                  {...field}
                  type="url"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Coupon Type <sup className="text-app-main">*</sup>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Deal">Deal</SelectItem>
                  <SelectItem value="Coupon">Coupon</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.getValues("type") === "Coupon" && (
          <FormField
            control={control}
            name="coupon_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter coupon code"
                    {...field}
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={control}
          name="addToHomePage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add to Home Page?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* IF add to homepage is yes conditionally render this field */}
        {form.getValues("addToHomePage") === "yes" && (
          <FormItem>
            <div className="my-4 flex flex-col items-center gap-x-3 gap-y-4 sm:flex-row">
              <FormLabel>
                <span className="cursor-pointer rounded-lg border border-muted bg-transparent p-2 px-4 transition-colors duration-300 ease-out hover:bg-accent">
                  {selectedThumbnailImage ? "Change" : "Add"} Thumbnail
                </span>
              </FormLabel>
              <FormControl>
                <input
                  ref={thumbnailRef}
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
              </FormControl>
              {selectedThumbnailImage && (
                <>
                  <Image
                    src={selectedThumbnailImage}
                    alt="Upload Image"
                    width={80}
                    height={80}
                    className="aspect-square"
                  />
                  <MinusCircle
                    className="size-6 translate-y-1/2 cursor-pointer text-destructive"
                    onClick={() => setShowRemoveThumbnailDialog(true)}
                  />
                </>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
        <RemoveImageDialog
          handleConfirmDelete={() => {
            setShowRemoveThumbnailDialog(false);
            removeThumbnail();
          }}
          isDialogOpen={showRemoveThumbnailDialog}
          setIsDialogOpen={setShowRemoveThumbnailDialog}
        />
        {/* Carousel Field */}
        <FormField
          control={control}
          name="addToCarousel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add to Carousel?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* IF add to Carousel is yes conditionally render this field */}
        {form.getValues("addToCarousel") === "yes" && (
          <FormItem>
            <div className="my-4 flex flex-col items-center gap-x-3 gap-y-4 sm:flex-row">
              <FormLabel>
                <span className="cursor-pointer rounded-lg border border-muted bg-transparent p-2 px-4 transition-colors duration-300 ease-out hover:bg-accent">
                  {selectedCarouselImage ? "Change" : "Add"} Carousel Poster
                </span>
              </FormLabel>
              <FormControl>
                <input
                  ref={carouselRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCarouselChange}
                  className="hidden"
                />
              </FormControl>
              {selectedCarouselImage && (
                <>
                  <Image
                    src={selectedCarouselImage}
                    alt="Upload Image"
                    width={80}
                    height={80}
                    className="aspect-square"
                  />
                  <MinusCircle
                    className="size-6 translate-y-1/2 cursor-pointer text-destructive"
                    onClick={() => setShowRemoveCarouselDialog(true)}
                  />
                </>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
        <RemoveImageDialog
          handleConfirmDelete={() => {
            setShowRemoveCarouselDialog(false);
            removeCarousel();
          }}
          isDialogOpen={showRemoveCarouselDialog}
          setIsDialogOpen={setShowRemoveCarouselDialog}
        />
        {/* Flipper Field */}
        <FormField
          control={control}
          name="addToFlipper"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add to Flipper?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* IF add to Flipper is yes conditionally render this field */}
        {form.getValues("addToFlipper") === "yes" && (
          <FormItem>
            <div className="my-4 flex flex-col items-center gap-x-3 gap-y-4 sm:flex-row">
              <FormLabel>
                <span className="cursor-pointer rounded-lg border border-muted bg-transparent p-2 px-4 transition-colors duration-300 ease-out hover:bg-accent">
                  {selectedFlipperImage ? "Change" : "Add"} Flipper Image
                </span>
              </FormLabel>
              <FormControl>
                <input
                  ref={flipperRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFlipperChange}
                  className="hidden"
                />
              </FormControl>
              {selectedFlipperImage && (
                <>
                  <Image
                    src={selectedFlipperImage}
                    alt="Upload Image"
                    width={80}
                    height={80}
                    className="aspect-square"
                  />
                  <MinusCircle
                    className="size-6 translate-y-1/2 cursor-pointer text-destructive"
                    onClick={() => setShowRemoveFlipperDialog(true)}
                  />
                </>
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
        <RemoveImageDialog
          handleConfirmDelete={() => {
            setShowRemoveFlipperDialog(false);
            removeFlipper();
          }}
          isDialogOpen={showRemoveFlipperDialog}
          setIsDialogOpen={setShowRemoveFlipperDialog}
        />
        <FormField
          control={control}
          name="category_id"
          render={({ field }) => (
            <FormItem className="flex w-fit flex-col gap-2">
              <FormLabel>
                Related Category<sup className="text-app-main">*</sup>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? categories.find(
                            (category) =>
                              `${category.categoryId}` === field.value,
                          )?.name
                        : "Select a Category"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command
                    filter={(value, search) => {
                      if (value.toLowerCase().includes(search.toLowerCase())) {
                        return 1;
                      }
                      return 0;
                    }}
                  >
                    <CommandInput
                      placeholder="Search Category..."
                      className="h-9"
                    />
                    <CommandEmpty>No Category found.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {categories.map((category) => (
                          <CommandItem
                            key={category.categoryId}
                            onSelect={() => {
                              form.setValue(
                                "category_id",
                                `${category.categoryId}`,
                              );
                            }}
                            value={`${category.name}`.toLowerCase()}
                          >
                            {category.name}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                `${category.categoryId}` === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="store_id"
          render={({ field }) => (
            <FormItem className="flex w-fit flex-col gap-2">
              <FormLabel>
                Related Store <sup className="text-app-main">*</sup>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? stores.find(
                            (store) => `${store.storeId}` === field.value,
                          )?.name
                        : "Select a store"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command
                    filter={(value, search) => {
                      if (value.toLowerCase().includes(search.toLowerCase())) {
                        return 1;
                      }
                      return 0;
                    }}
                  >
                    <CommandInput
                      placeholder="Search Store..."
                      className="h-9"
                    />
                    <CommandEmpty>No Store found.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {stores.map((store) => (
                          <CommandItem
                            key={store.storeId}
                            onSelect={() => {
                              form.setValue("store_id", `${store.storeId}`);
                            }}
                            value={`${store.name}`.toLowerCase()}
                          >
                            {store.name}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                `${store.storeId}` === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="events"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Similar Events</FormLabel>
              <MultiSelector
                onValuesChange={field.onChange}
                values={field.value || []}
                loop={false}
                options={eventOptions}
                emptyIndicator="No Events Found"
              >
                <FormControl>
                  <MultiSelectorTrigger>
                    <MultiSelectorInput
                      placeholder={
                        field.value.length <= 0 ? "Select Related Events" : ""
                      }
                    />
                  </MultiSelectorTrigger>
                </FormControl>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {events?.map((event) => (
                      <MultiSelectorItem
                        key={event.eventId}
                        value={`${event.eventId}`}
                        id={event.eventId.toString()}
                        label={event.name}
                      >
                        {event.name}
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
                <FormMessage />
              </MultiSelector>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="due_date"
          render={({ field }) => (
            <FormItem className="flex w-fit flex-col gap-2">
              <FormLabel>
                Expiry Date <sup className="text-app-main">*</sup>
              </FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[200px] justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "dd-MMM-yyyy")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className=" w-auto p-0">
                    <Calendar
                      mode="single"
                      captionLayout="dropdown-buttons"
                      selected={date}
                      onSelect={(currentDate) => {
                        setDate(currentDate);
                        form.setValue("due_date", currentDate!);
                      }}
                      fromDate={new Date()}
                      toYear={date?.getFullYear()! + 10}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="mt-2 place-self-center text-xs text-gray-400">
          Fields marked with<span className="text-app-main"> * </span>are
          required
        </p>

        <Button
          type="submit"
          className="w-full place-self-center rounded-lg hover:shadow-md"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Editing..." : "Edit Coupon"}
        </Button>
      </form>
    </Form>
  );
};

interface RemoveImageDialogProps {
  handleConfirmDelete: () => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}

const RemoveImageDialog: React.FC<RemoveImageDialogProps> = ({
  handleConfirmDelete,
  isDialogOpen,
  setIsDialogOpen,
}: RemoveImageDialogProps) => (
  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="w-11/12 max-w-96">
      <DialogHeader>
        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete this Image
          if you press delete and update the coupon.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          className="my-4 border-app-main sm:mx-2 sm:my-0"
          onClick={() => setIsDialogOpen(false)}
        >
          Cancel
        </Button>
        <Button className="bg-app-main" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default EditCouponForm;
