/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { loader: "custom", loaderFile: "./loader.js", unoptimized: true },
};

export default nextConfig;
