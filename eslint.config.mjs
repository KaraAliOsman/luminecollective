import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".open-next/**",
      ".wrangler/**",
      "cloudflare-env.d.ts",
      "node_modules/**",
      "out/**",
      "dist/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
