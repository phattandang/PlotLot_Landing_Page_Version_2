/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isProjectPage = Boolean(repoName && !repoName.endsWith(".github.io"))
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProjectPage ? `/${repoName}` : "")

const nextConfig = {
  output: "export",
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
