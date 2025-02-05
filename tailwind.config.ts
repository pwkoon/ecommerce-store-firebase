import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.jpg')",
      },
      colors: {
        navbarYellow: "#FFBA00",
        cardLightYellow: "#E4D7B7",
        cardGreen: "#495B29",
        cardBrown: "#B86E3D",
        reviewRed: "#A24936",
      },
      backgroundColor: {
        bgDark: "#2B1F13",
      },
      fontFamily: {
        inria: ["Inria Sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
