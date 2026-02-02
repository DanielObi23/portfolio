import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowConfig = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

interface WindowState {
  windows: Record<string, WindowConfig>;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG as Record<string, WindowConfig>,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey: string, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
