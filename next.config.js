/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash:true, //for avoid path.html to path / only in out deirectory
}

module.exports = nextConfig
