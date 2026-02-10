import MobileOnlyFallback from "@/components/mobile/MobileOnlyFallback";

export function MobileOnly({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="block lg:hidden">{children}</div>

      <div className="hidden lg:block">
        <MobileOnlyFallback />
      </div>
    </>
  );
}
