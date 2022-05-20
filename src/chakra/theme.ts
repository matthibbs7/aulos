import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "white",
      200: '#4287f5',
      300: '#788a96'
    },
  },
  fonts: {
    body: "Nunito",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#1f2124",
      },
    }),
  },
});
