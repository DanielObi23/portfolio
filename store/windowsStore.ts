import {
  WINDOW_CONFIG,
  INITIAL_Z_INDEX,
  type WindowDataMap,
  type WindowConfig,
} from "@/constants/windows";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowState {
  windows: {
    [K in keyof WindowDataMap]: WindowConfig<K>;
  };
  nextZIndex: number;
  openWindow: <K extends keyof WindowDataMap>(
    key: K,
    data: WindowDataMap[K],
  ) => void;
  closeWindow: (key: keyof WindowDataMap) => void;
  focusWindow: (key: keyof WindowDataMap) => void;
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG, // ✅ fully typed, no cast
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: <K extends keyof WindowDataMap>(
      windowKey: K,
      data: WindowDataMap[K],
    ) =>
      set((state) => {
        const win = state.windows[windowKey] as WindowConfig<K>;
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        state.windows[windowKey].zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
