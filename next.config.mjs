/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.dummyjson.com",
                protocol: "https"
            }
        ]
    },
    staticPageGenerationTimeout: 2000
};

export default nextConfig;
