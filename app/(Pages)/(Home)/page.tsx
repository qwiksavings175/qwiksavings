"use client";

import { useState, useEffect } from "react";

import AboutUs from "./_components/Sections/AboutUs";
import CategoriesSection from "./_components/Sections/CategoriesSection";
import FeaturedStoreSection from "./_components/Sections/FeaturedStoreSection";
import HowToUse from "./_components/Sections/HowToUse";
import IntroSection from "./_components/Sections/IntroSection";
import axios from "@/app/api/axios/axios";

// Define an interface for the category data
interface Category {
  categoryId: number;
  name: string;
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get("/getcategories");
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      {/* Intro Section */}
      <IntroSection />

      {/* Featured Store Section */}
      <FeaturedStoreSection />
      {/* How to use Qwik Savings section */}
      <HowToUse />
      {/* Render each dynamic category */}
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        categories.map((cat) => (
          <CategoriesSection
            key={cat.categoryId}
            title={cat.name}
            fetchFrom={cat.name}
          />
        ))
      )}



      {/* About Us Section */}
      <AboutUs />
    </>
  );
}
