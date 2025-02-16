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
        banner:
          "url('https://images.unsplash.com/photo-1596404815741-adf337d685f0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        about:
          "url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        gallery: "url('/gallery.jpg')",
        review: "url('/review.jpg')",
      },
      colors: {
        aboutDark: "#1D201F",
        introWhite: "#F7F0F5",
        green: "#4B543B",
        gray: "#588157",
        yellow: "#F7E7CE",
        cardLightYellow: "#E4D7B7",
        lightWhite: "#E4DFDA",
      },
      backgroundColor: {
        bgIntro: "#2d2926",
        bgDark: "#2B1F13",
      },
      fontFamily: {
        inria: ["Inria Sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
