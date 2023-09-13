/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const { withSecureHeaders } = require("next-secure-headers");

module.exports = withSecureHeaders({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "validator.swagger.io"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    },
  },
  forceHTTPSRedirect: [
    true,
    { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
  ],
  referrerPolicy: "same-origin",
  xFrameOptions: "SAMEORIGIN",
  xContentTypeOptions: "nosniff",
  xXssProtection: "1; mode=block",
});
