import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzerFn from '@next/bundle-analyzer';

const withBundleAnalyzer = withBundleAnalyzerFn({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    turbo: true,
  },
};

const sentryOptions = {
  org: "jooo",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withBundleAnalyzer(withSentryConfig(nextConfig, sentryOptions));
