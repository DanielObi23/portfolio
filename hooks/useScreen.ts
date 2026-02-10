import { useLayoutEffect, useState } from "react";

type ScreenType = "mobile" | "tablet" | "desktop";

function getScreenType(width: number): ScreenType {
  if (width >= 1024) return "desktop";
  if (width >= 640) return "tablet";
  return "mobile";
}

export function useScreen() {
  const [screen, setScreen] = useState<ScreenType>(() => {
    // SSR-safe default
    if (typeof window === "undefined") return "desktop";
    return getScreenType(window.innerWidth);
  });

  useLayoutEffect(() => {
    function handleResize() {
      setScreen(getScreenType(window.innerWidth));
    }

    // Run once in case of hydration mismatch
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screen,
    isMobile: screen === "mobile",
    isTablet: screen === "tablet",
    isDesktop: screen === "desktop",
  };
}
