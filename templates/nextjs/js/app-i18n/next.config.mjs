// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  // your config options here
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
