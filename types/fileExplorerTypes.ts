type FileType = "pdf" | "url" | "txt" | "img";

interface BaseFile {
  id: string;
  title: string;
  icon?: string;
  fileType: FileType;
}

interface PdfFile extends BaseFile {
  fileType: "pdf";
  url: string;
}

interface UrlFile extends BaseFile {
  fileType: "url";
  link: string;
}

interface ImageFile extends BaseFile {
  fileType: "img";
  imageUrl: string;
}

interface TextFile extends BaseFile {
  fileType: "txt";
  description: ProjectDescription;
}

type ProjectFile = PdfFile | UrlFile | TextFile | ImageFile;

interface TechStackCategory {
  category: string;
  items: string[];
}

type TechStack = TechStackCategory[];

interface BaseDescription {
  text: string[];
}

interface NoStackDescription extends BaseDescription {
  type: "no-stack";
}

interface SimpleStackDescription extends BaseDescription {
  type: "frontend" | "backend";
  techstack: TechStack;
}

interface FullStackDescription extends BaseDescription {
  type: "full-stack";
  techstack: TechStack;
}

type ProjectDescription =
  | NoStackDescription
  | SimpleStackDescription
  | FullStackDescription;

interface ProjectFolder {
  id: string;
  title: string;
  briefDescription: string;
  files: ProjectFile[];
}

interface FolderStructure {
  favourites: ProjectFolder[];
  projects: ProjectFolder[];
}

interface ActiveFolder {
  id: string;
}

type ScreenshotPayload = {
  windowKey: "screenshot";
  data: {
    title: string;
    imageUrl: string;
  };
};

type PdfPayload = {
  windowKey: "pdf";
  data: {
    title: string;
    url: string;
  };
};

type DescriptionPayload = {
  windowKey: "description";
  data: {
    title: string;
    description: ProjectDescription;
  };
};

type WindowPayload = ScreenshotPayload | DescriptionPayload | PdfPayload;

export type {
  FolderStructure,
  ActiveFolder,
  WindowPayload,
  ProjectFolder,
  ProjectDescription,
  FileType,
  BaseFile,
};
