import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  typedRoutes: true,
  allowedDevOrigins: ['192.168.100.6']
};

export default withNextIntl(nextConfig);
