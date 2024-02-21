import type { Config } from 'tailwindcss'

const defaultColors = require("tailwindcss/colors");
const defaultThemes = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "2xs": "360px",
      xs: "428px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      "2lg": "1024px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    fontFamily: {
      yekanBakh: ["var(--font-yekan-bakh)"],
      yekanBakhEn: ["var(--font-yekan-bakh-en)"],
      shabnam: ["var(--font-shabnam)"],
      kalamehFa: ["var(--font-Kalameh-fa)"],
      iransans: ["var(--font-iransans)"],
    },
    fontWeight: {
      thin: "100",
      ultraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
    },
    extend: {
    },
    boxShadow: {
      50: "0px -3px 4px rgba(50, 50, 71, 0.08)",
      100: "0px -1px 5px 1px rgba(50, 50, 71, 0.08)",
      120: "0px 4px 12px 0px rgba(0, 0, 0, 0.2)",
      150: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
      200: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      white: {
        DEFAULT: defaultColors.white,
        500: 'rgba(255,255,255,0.5)',

      },
      green: {
        'dark': '#042000',

      },
      transparent: defaultColors.transparent,
      black: {
        DEFAULT: defaultColors.black,
        100: 'rgba(0, 0, 0, 0.1)',
        850: 'rgba(0, 0, 0, 0.85)',
        'dark': '#020202',
      },
      primary: {
        DEFAULT: "#253A56",
        100: "#196EC0",
        200: "#00A3FF",
        "dark": "#000F36",
      },
      gray: {
        DEFAULT: defaultColors.gray,
        79: '#797979',
        'divider': '#DBDBDB',
        'a5': '#A5A5A5',
        'B2': '#B2B2B2',
        'EE': '#EEEEEE',
        '2': '#222',
        '86': '#868686',
        '32': '#323232',
        form:'#e0e0e2',

        50: "#fcfeff",
        100: "#F6F6F6",
        200: "#F0F0F0",
        300: "#D7DEE0",
        400: "#CED0D0",
        500: "#9C9D9E",
        600: "#666666",
        700: "#333333",
        800: "#212121",
        900: "#000000",
        1: "#D9D9D9",

        3: "#F8F8F8",
      },
      red:{
        DEFAULT: defaultColors.red,
        'ehya' : '#E33933',
        'product' : '#E5443E',
        'light' : 'rgba(227,57,51,0.03)',
      }
    }
  },
  plugins: [],
}
export default config
