import type { FolderStructure, ProjectFolder } from "@/types/fileExplorerTypes";

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
          icon: "/icons/folder-icon.svg",
          url: "/files/resume.pdf",
        },
      ],
    },
  ],

  projects: [
    {
      id: "gazetteer",
      title: "Gazetteer",
      files: [
        {
          id: "gazetteer-website",
          title: "website",
          fileType: "url",
          icon: "/icons/chrome-icon.png",
          link: "https://chibuikemonwuobi.co.uk/project1/",
        },
        {
          id: "gazetteer-github",
          title: "github",
          fileType: "url",
          icon: "/icons/github-icon.png",
          link: "https://github.com/DanielObi23/chibuikemOnwu-Obi/tree/main/project1",
        },
        {
          id: "gazetteer-description",
          title: "description.txt",
          fileType: "txt",
          icon: "/icons/text-icon.svg",
          description: {
            text: `Developed a map-based application presenting geographical and demographic data
                  fetched from third-party APIs such as GeoNames and OpenWeather.`,
            type: "full-stack",
            techstack: [
              {
                category: "Frontend",
                items: ["HTML", "CSS", "JavaScript (jQuery)", "Bootstrap"],
              },
              {
                category: "Backend",
                items: ["PHP"],
              },
              {
                category: "APIs",
                items: ["GeoNames", "OpenWeather"],
              },
            ],
          },
        },
        {
          id: "gazetteer-screenshot",
          title: "screenshot.png",
          fileType: "img",
          icon: "/icons/screenshot-icon.svg",
          imageUrl: "/wallpaper/wallpaper.jpg",
        },
      ],
    },

    {
      id: "company-directory",
      title: "Company Directory",
      files: [
        {
          id: "company-directory-website",
          title: "website",
          fileType: "url",
          icon: "/icons/chrome-icon.png",
          link: "https://chibuikemonwuobi.co.uk/project2/",
        },
        {
          id: "company-directory-github",
          title: "github",
          fileType: "url",
          icon: "/icons/github-icon.png",
          link: "https://github.com/DanielObi23/chibuikemOnwu-Obi/tree/main/project2",
        },
        {
          id: "company-directory-description",
          title: "description.txt",
          fileType: "txt",
          icon: "/icons/text-icon.svg",
          description: {
            text: `Company personnel management system built through a full software
                  development lifecycle including proposal, database design and testing.`,
            type: "full-stack",
            techstack: [
              {
                category: "Frontend",
                items: ["HTML", "CSS", "JavaScript (jQuery)", "Bootstrap"],
              },
              {
                category: "Backend",
                items: ["PHP"],
              },
              {
                category: "Database",
                items: ["MySQL"],
              },
            ],
          },
        },
        {
          id: "company-directory-screenshot",
          title: "screenshot.png",
          fileType: "img",
          icon: "/icons/screenshot-icon.svg",
          imageUrl: "/wallpaper/wallpaper.jpg",
        },
      ],
    },

    {
      id: "focusflow",
      title: "FocusFlow",
      files: [
        {
          id: "focusflow-website",
          title: "website",
          fileType: "url",
          icon: "/icons/chrome-icon.png",
          link: "https://focusflow-4ss7.onrender.com/",
        },
        {
          id: "focusflow-github",
          title: "github",
          fileType: "url",
          icon: "/icons/github-icon.png",
          link: "https://github.com/DanielObi23/FocusFlow",
        },
        {
          id: "focusflow-description",
          title: "description.txt",
          fileType: "txt",
          icon: "/icons/text-icon.svg",
          description: {
            type: "full-stack",
            text: `An AI-powered skill learning path generator.
          FocusFlow helps users develop new skills by creating personalized learning paths
          with step-by-step guidance.`,
            techstack: [
              {
                category: "Frontend",
                items: [
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "React Router",
                  "DaisyUI",
                  "TanStack Query v5",
                ],
              },
              {
                category: "Backend",
                items: [
                  "Node.js",
                  "Express.js",
                  "JWT",
                  "Cookies",
                  "localStorage",
                  "Arcjet",
                  "AWS S3",
                ],
              },
              {
                category: "Database",
                items: ["PostgreSQL (Neon serverless)"],
              },
              {
                category: "Integrations",
                items: ["Claude API"],
              },
            ],
          },
        },
        {
          id: "focusflow-screenshot",
          title: "screenshot.png",
          fileType: "img",
          icon: "/icons/screenshot-icon.svg",
          imageUrl: "/wallpaper/wallpaper.jpg",
        },
      ],
    },

    {
      id: "fluentroam",
      title: "FluentRoam",
      files: [
        {
          id: "fluentroam-website",
          title: "website",
          fileType: "url",
          icon: "/icons/chrome-icon.png",
          link: "https://fluentroam.chibuikemonwuobi.co.uk/",
        },
        {
          id: "fluentroam-github",
          title: "github",
          fileType: "url",
          icon: "/icons/github-icon.png",
          link: "https://github.com/DanielObi23/FluentRoam",
        },
        {
          id: "fluentroam-description",
          title: "description.txt",
          fileType: "txt",
          icon: "/icons/text-icon.svg",
          description: {
            text: `AI-powered language learning application for practicing reading,
                  writing, listening and speaking with real-time feedback.`,
            type: "full-stack",
            techstack: [
              {
                category: "Frontend",
                items: [
                  "Next.js 15",
                  "React 19",
                  "TailwindCSS",
                  "shadcn/ui",
                  "zustand",
                ],
              },
              {
                category: "Backend",
                items: ["Supabase", "Groq", "Clerk"],
              },
            ],
          },
        },
        {
          id: "fluentroam-screenshot",
          title: "screenshot.png",
          fileType: "img",
          icon: "/icons/screenshot-icon.svg",
          imageUrl: "/wallpaper/wallpaper.jpg",
        },
      ],
    },
  ],
};

const allFolders: ProjectFolder[] = Object.values(folders).flat();
const allFoldersId = allFolders.map(({ id }) => ({
  id,
}));

export { folders, allFolders, allFoldersId };
