import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import NextUiLayout from "@/components/nextUiLayout";
import { ThemeProvider } from "next-themes";

const darkTheme = createTheme({ type: "dark" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: darkTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider theme={darkTheme}>
        <NextUiLayout>
          <Component {...pageProps} />
        </NextUiLayout>
      </NextUIProvider>
    </ThemeProvider>
  );
}
