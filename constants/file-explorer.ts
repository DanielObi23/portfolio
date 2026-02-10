import type {
  FolderStructure,
  ProjectFolder,
  FileType,
} from "@/types/fileExplorerTypes";
import {
  gazetteer,
  companyDirectory,
  focusFlow,
  fluentroam,
} from "./fileExplorerProjects";

const FILE_TYPE_ICON: Record<FileType, string> = {
  img: "/icons/file-explorer-icons/screenshot-icon.svg",
  pdf: "/icons/file-explorer-icons/pdf-file-icon.svg",
  txt: "/icons/file-explorer-icons/txt-file-icon.svg",
  url: "/icons/file-explorer-icons/chrome-icon.svg",
};

const folders: FolderStructure = {
  favourites: [
    {
      id: "resume",
      title: "Resume",
      files: [
        {
          id: "resume-pdf",
          title: "resume.pdf",
          fileType: "pdf",
          url: "/files/resume.pdf",
        },
      ],
    },
  ],

  projects: [gazetteer, companyDirectory, focusFlow, fluentroam],
};

const allFolders: ProjectFolder[] = Object.values(folders).flat();
const allFoldersId = allFolders.map(({ id }) => ({
  id,
}));

export { folders, allFolders, allFoldersId, FILE_TYPE_ICON };
