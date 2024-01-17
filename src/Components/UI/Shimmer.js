import React from "react";
import {
  ShimmerSimpleGallery,
  ShimmerTitle,
  ShimmerPostItem,
} from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <ShimmerPostItem
      card
      title
      cta
      imageType="thumbnail"
      imageWidth={100}
      imageHeight={100}
      contentCenter
    />
  );
};

export const LocationShimmer = () => {
  return <ShimmerTitle line={1} gap={30} variant="primary" />;
};
