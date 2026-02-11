import MobileOnlyFallback from "@/components/mobile/MobileOnlyFallback";

export function MobileOnly({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="block lg:hidden h-dvh bg-secondary">{children}</div>

      <div className="hidden lg:block">
        <MobileOnlyFallback />
      </div>
    </>
  );
}
