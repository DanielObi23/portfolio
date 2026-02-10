import type { ProjectDescription } from "@/types/fileExplorerTypes";

const NAV_ICON_FOLDER = "/icons/window-icons";

type NavIcons = {
  id: keyof WindowDataMap;
  name: string;
  src: string;
};

const navIcons: NavIcons[] = [
  {
    id: "start",
    name: "Start",
    src: `${NAV_ICON_FOLDER}/start-icon.svg`,
  },
  {
    id: "contacts",
    name: "Contacts",
    src: `${NAV_ICON_FOLDER}/contacts-icon.svg`,
  },
  {
    id: "file-explorer",
    name: "File Explorer",
    src: `${NAV_ICON_FOLDER}/file-explorer-icon.svg`,
  },
  {
    id: "notepad",
    name: "Notepad",
    src: `${NAV_ICON_FOLDER}/notepad-icon.svg`,
  },
  {
    id: "vscode",
    name: "VS Code",
    src: `${NAV_ICON_FOLDER}/vscode-icon.svg`,
  },
  {
    id: "chrome",
    name: "Chrome",
    src: `${NAV_ICON_FOLDER}/chrome-icon.svg`,
  },
];

type WindowDataMap = {
  description: {
    title: string;
    description: ProjectDescription;
  };
  screenshot: {
    title: string;
    imageUrl: string;
  };
  pdf: {
    title: string;
    url: string;
  };
  chrome: null;
  vscode: null;
  "file-explorer": null;
  notepad: null;
  contacts: null;
  start: null;
};

type WindowConfig<K extends keyof WindowDataMap> = {
  isOpen: boolean;
  zIndex: number;
  data: WindowDataMap[K] | null;
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  start: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contacts: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  notepad: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  "file-explorer": { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  description: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  screenshot: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  chrome: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  pdf: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
} satisfies {
  [K in keyof WindowDataMap]: WindowConfig<K>;
};

export {
  navIcons,
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  type WindowDataMap,
  type WindowConfig,
};
