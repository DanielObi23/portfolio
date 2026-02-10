"use client";

import Desktop from "@/components/desktop/Desktop";
import Mobile from "@/components/Mobile";
import { useScreen } from "@/hooks/useScreen";

export default function Home() {
  const { isDesktop } = useScreen();

  return isDesktop ? <Desktop /> : <Mobile />;
}
