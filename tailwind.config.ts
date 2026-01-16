import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                neon: "#2afc85",
                "neon-hover": "#20d873",
                dark: "#0c0f17",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            }
        },
    },
    plugins: [],
};
export default config;
