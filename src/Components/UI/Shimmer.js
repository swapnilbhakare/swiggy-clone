import React from "react";
import {
  ShimmerThumbnail,
  ShimmerSimpleGallery,
  ShimmerTitle,
  ShimmerSimpleGallery,
  ShimmerContentBlock,
} from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <ShimmerSimpleGallery imageType="thumbnail" imageHeight={200} caption />
  );
};

export const LocationShimmer = () => {
  return <ShimmerTitle line={1} gap={30} variant="primary" />;
};

export const CarouselShimmer = () => {
  return <ShimmerThumbnail height={250} rounded />;
};
export const RestaurantMenuShimmer = () => {
  return (
    <div>
      <ShimmerThumbnail
        thumbnailWidth={370}
        thumbnailHeight={100}
        title
        text
        cta
      />
      <ShimmerThumbnail
        thumbnailWidth={370}
        thumbnailHeight={100}
        title
        text
        cta
      />
      <ShimmerThumbnail
        thumbnailWidth={370}
        thumbnailHeight={100}
        title
        text
        cta
      />
      <ShimmerThumbnail
        thumbnailWidth={370}
        thumbnailHeight={100}
        title
        text
        cta
      />
    </div>
  );
};
