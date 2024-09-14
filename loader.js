"use client";

const myImageLoader = ({ src, width, quality }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return `${baseUrl}/${src}?w=${width}&q=${quality || 75}`;
};

export default myImageLoader;
