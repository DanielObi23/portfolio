import useWindowStore from "@/store/useWIndows";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

export default function WindowWrapper(Component: any, windowKey: string) {
  const Wrapped = (props: object) => {
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const windows = useWindowStore((state) => state.windows);
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      gsap.killTweensOf(el);
      if (isOpen) {
        el.style.display = "block";

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        );
      } else {
        gsap.to(el, {
          scale: 0.5,
          opacity: 0,
          y: 400,
          duration: 0.4,
          ease: "power1.out",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, []);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
}
