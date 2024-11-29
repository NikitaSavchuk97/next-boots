/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    // loader: 'custom',
    // loaderFile: './src/lib/loader.ts',
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: '*.downloader.disk.yandex.ru',
    //     pathname: '**',
    //   },
    // ],
  },
};

export default nextConfig;
