// next.config.mjs
import withBundleAnalyzer from '@next/bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: "b3jocvvhl9mu",
    CONTENTFUL_ACCESS_TOKEN: "IwuLk0-265d8IaZAolB833HsPq3CKXv3KT7_Aamh4c8",
  },
  productionBrowserSourceMaps: true,
  webpack(config) {
    if (!config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }
    config.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      })
    );

    return config;
  },
};

export default bundleAnalyzer(nextConfig);
