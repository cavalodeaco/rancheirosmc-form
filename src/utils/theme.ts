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
        "#6F693C"
    ],
  },
  primaryColor: 'brand',
  primaryShade: 4,
  headings: {
    fontFamily: `'Lilita One', cursive`,
    fontWeight: 'normal',
  },
};