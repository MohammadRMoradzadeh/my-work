/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        Background: "url('/images/bg1.jfif')",
      },
      width: {
        13.5: "3/375rem",
      },
      height: {
        13.5: "3/375rem",
      },
      colors: {
        primary: {
          50: "#fff6e7",
          100: "#fee2b5",
          200: "#fed592",
          300: "#fdc160",
          400: "#fdb541",
          500: "#fca311",
          600: "#e5940f",
          700: "#b3740c",
          800: "#8b5a09",
          900: "#6a4407",
        },
        text: {
          50: "#e8e9ec",
          100: "#b6bac3",
          200: "#9399a6",
          300: "#626a7d",
          400: "#434d64",
          500: {
            DEFAULT: "#14213d",
            10: "#14213d10",
            20: "#14213d20",
            30: "#14213d30",
            40: "#14213d40",
            50: "#14213d50",
            60: "#14213d60",
            70: "#14213d70",
            80: "#14213d80",
            90: "#14213d90",
          },
          600: "#121e38",
          700: "#0e172b",
          800: "#0b1222",
          900: "#080e1a",
        },
        BG: {
          50: "#fcfcfc",
          100: "#f7f7f7",
          200: "#f3f3f3",
          300: "#eeeeee",
          400: "#eaeaea",
          500: "#e5e5e5",
          600: "#d0d0d0",
          700: "#a3a3a3",
          800: "#7e7e7e",
          900: "#606060",
        },
        filter: {
          black: {
            10: "#0001",
            20: "#0002",
            30: "#0003",
            40: "#0004",
            50: "#0005",
            60: "#0006",
            70: "#0007",
            80: "#0008",
            90: "#0009",
          },
          white: {
            10: "#fff1",
            20: "#fff2",
            30: "#fff3",
            40: "#fff4",
            50: "#fff5",
            60: "#fff6",
            70: "#fff7",
            80: "#fff8",
            90: "#fff9",
          },
        },
        white: "#fff",

        other1: "#3A3F46",
        transparent: "#fff0",
        error: {
          DEFAULT: "#C30000",
          light: "#ED2E2E",
          extralight: "#FFF2F2",
        },
        success: {
          DEFAULT: "#00966D",
          light: "#00BA88",
          extralight: "#F3FDFA",
        },
        warning: {
          DEFAULT: "#A9791C",
          light: "#F4B740",
          extralight: "#FFF8E1",
        },
        answered: "#9ADE82",
        notAnswered: "#DE8D82",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
    ({ addUtilities }) => {
      addUtilities({
        ".text-Pinar-Bold": {
          fontFamily: "Pinar-Bold",
        },
        ".text-Pinar-Black": {
          fontFamily: "Pinar-Black",
        },
        ".text-Pinar-ExtraBold": {
          fontFamily: "Pinar-ExtraBold",
        },
        ".textPinar-Light": {
          fontFamily: "Pinar-Light",
        },
        ".text-Pinar-Medium": {
          fontFamily: "Pinar-Medium",
        },
        ".text-Pinar-Regular": {
          fontFamily: "Pinar-Regular",
        },
        ".text-Pinar-SemiBold": {
          fontFamily: "Pinar-SemiBold",
        },
        ".text-Roboto-Bold": {
          fontFamily: "Roboto-Bold",
        },
        ".text-Roboto-Black": {
          fontFamily: "Roboto-Black",
        },
        ".text-Roboto-Thin": {
          fontFamily: "Roboto-Thin",
        },
        ".text-Roboto-Light": {
          fontFamily: "Roboto-Light",
        },
        ".text-Roboto-Medium": {
          fontFamily: "Roboto-Medium",
        },
        ".text-Roboto-Regular": {
          fontFamily: "Roboto-Regular",
        },
        ".dir-rtl": {
          direction: "rtl",
        },
        ".dir-ltr": {
          direction: "ltr",
        },
      });
    },
  ],
};
