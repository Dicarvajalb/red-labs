/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/html",
          destination: "/index.html",
        },
      ],
    };
  },

  basePath: process.env.BASE_URL || "",
};

module.exports = nextConfig;
