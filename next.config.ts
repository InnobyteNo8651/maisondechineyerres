import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/maison-chine-yerres',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['next-intl'],
  },
};

export default withNextIntl(nextConfig);
