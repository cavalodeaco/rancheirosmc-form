import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    brand: [
        "#E4E0C3",
        "#DED7A3",
        "#DED480",
        "#E5D659",
        "#F5E02C", // <-- primary shade
        "#DDCA27",
        "#B9AB31",
        "#9A9038",
        "#827B3B",
        "#2B0604"
    ],
  },
  primaryColor: 'brand',
  primaryShade: 4,
  headings: {
    fontFamily: `'Lato', sans-serif`,
    fontWeight: 'bold',
  },
};