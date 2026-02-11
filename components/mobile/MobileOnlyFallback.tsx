import Link from "next/link";

export default function MobileOnlyFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 gap-4 text-white">
      <p className="text-2xl font-semibold">
        This page is only available on mobile screens.
      </p>

      <Link href="/" className="text-xl underline hover:opacity-80">
        Go to desktop version
      </Link>
    </div>
  );
}
