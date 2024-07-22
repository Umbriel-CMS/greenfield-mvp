/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true
  },
  env: {
    NEXT_PUBLIC_UMBRIEL_API: process.env.NEXT_PUBLIC_UMBRIEL_API || 'https://api.umbrielcms.com.br',
  },
  images: {
    domains: [
      'd3t3ozftmdmh3i.cloudfront.net',
      's3.amazonaws.com',
      'afr.net',
      'ott.bgea.live',
      'deow9bq0xqvbj.cloudfront.net',
      'd3wo5wojvuv7l.cloudfront.net',
      'episodes.castos.com',
      'https://static01.nyt.com'
    ],
    remotePatterns: [
      { protocol: 'http', hostname: '**' },
      { protocol: 'https', hostname: '**' }
    ]
  },
}

export default nextConfig