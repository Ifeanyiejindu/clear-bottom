import React from "react";
import PhotoHeroSection from "../components/PhotoHeroSection";
import FeatureWithPricing from "../components/FeatureWithPricing";
import GalleryForPhotos from "../components/GalleryForPhotos";
import CTAForTours from "../components/CTAForTours";

const Photography = () => {
  return (
    <div>
      <PhotoHeroSection />
      <FeatureWithPricing />
      <GalleryForPhotos />
      <CTAForTours />
    </div>
  );
};

export default Photography;
