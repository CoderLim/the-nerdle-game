import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 在 Vercel 上避免使用 sharp 原生依赖
    unoptimized: true,
  },
};

export default nextConfig;
