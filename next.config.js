/** 
 * @type {import('next').NextConfig} 
*/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mango.blender.org",
      "uhdtv.io",
      "download.blender.org",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com"
    ],
  },
}

module.exports = nextConfig
