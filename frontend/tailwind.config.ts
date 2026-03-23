import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                felt: {
                    50: "#f9f6f2",
                    100: "#f2ece4",
                    200: "#e5d8c7",
                    300: "#d6c2a7",
                    400: "#c0a07b",
                    500: "#a47e56",
                    600: "#8a6445",
                    700: "#6f4d37",
                    800: "#563b2b",
                    900: "#3e2a1f"
                },
                steppe: {
                    50: "#f3f6f4",
                    100: "#e2ebe5",
                    200: "#c6d7cd",
                    300: "#a3bcae",
                    400: "#7da18d",
                    500: "#5c8671",
                    600: "#466a58",
                    700: "#365146",
                    800: "#2a3d35",
                    900: "#1f2c27"
                },
                mountain: {
                    500: "#6e7c8e",
                    700: "#4f5a69"
                }
            },
            fontFamily: {
                display: ["'Marcellus'", "serif"],
                body: ["'Inter'", "system-ui", "sans-serif"]
            },
            boxShadow: {
                soft: "0 20px 50px -30px rgba(62,42,31,0.4)",
                lift: "0 25px 60px -30px rgba(62,42,31,0.5)"
            }
        }
    },
    plugins: []
};

export default config;
