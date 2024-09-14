"use client";

const myImageLoader = ({ src, width, quality }) => {
  return `https://singhcoderx.github.io/portfolio/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default myImageLoader;
