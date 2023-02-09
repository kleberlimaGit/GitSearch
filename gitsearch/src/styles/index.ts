import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
        orange600: "#f26000",
        purple500:"#44296d",
        white: "#f7f7f7",
        marineBlue:'#071422'

    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});
