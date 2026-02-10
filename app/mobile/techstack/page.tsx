import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";

export default function page() {
  return (
    <MobileOnly>
      <MobileNavigation title="Techstack" />
    </MobileOnly>
  );
}
