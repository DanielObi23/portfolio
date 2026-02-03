import useWindowStore from "@/store/useWIndows";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);

/**
 * Wraps a React component with window-like behavior (open/close animations, draggable focus, and z-index).
 *
 * The wrapped component reads window state from the window store using the provided `windowKey` to determine
 * whether it is open and what z-index to apply; it also registers drag handling to focus the window on press.
 *
 * @param Component - The React component to render inside the window wrapper
 * @param windowKey - Unique key used to look up this window's state (isOpen, zIndex) and to focus the window
 * @returns A higher-order React component that renders the given component inside an animated, draggable window tied to `windowKey`
 */
export default function WindowWrapper(Component: any, windowKey: string) {
  const Wrapped = (props: object) => {
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const windows = useWindowStore((state) => state.windows);
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

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