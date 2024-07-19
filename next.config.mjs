/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true
  },
  env: {
    NEXT_PUBLIC_UMBRIEL_API: process.env.NEXT_PUBLIC_UMBRIEL_API || 'https://api.umbrielcms.com.br',
  },
}

export default nextConfig