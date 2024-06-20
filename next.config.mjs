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
  };
  
  export default nextConfig;
  