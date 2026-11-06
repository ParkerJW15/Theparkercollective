/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Static hosting has no Next.js image optimization server.
  images: { unoptimized: true },
};
export default nextConfig;
