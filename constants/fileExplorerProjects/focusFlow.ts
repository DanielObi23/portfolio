import type { ProjectFolder } from "@/types/fileExplorerTypes";

export const focusFlow: ProjectFolder = {
  id: "focusflow",
  title: "FocusFlow",
  files: [
    {
      id: "focusflow-website",
      title: "website",
      fileType: "url",
      link: "https://focusflow-4ss7.onrender.com/",
    },
    {
      id: "focusflow-github",
      title: "github",
      fileType: "url",
      link: "https://github.com/DanielObi23/FocusFlow",
    },
    {
      id: "focusflow-description",
      title: "description.txt",
      fileType: "txt",
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
      id: "focusflow-screenshot-1",
      title: "screenshot-1",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-1.jpg",
    },
    {
      id: "focusflow-screenshot-2",
      title: "screenshot-2",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-2.jpg",
    },
    {
      id: "focusflow-screenshot-3",
      title: "screenshot-3",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-3.jpg",
    },
    {
      id: "focusflow-screenshot-4",
      title: "screenshot-4",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-4.jpg",
    },
    {
      id: "focusflow-screenshot-5",
      title: "screenshot-5",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-5.jpg",
    },
    {
      id: "focusflow-screenshot-6",
      title: "screenshot-6",
      fileType: "img",
      imageUrl: "/screenshots/focusflow/focusflow-screenshot-6.jpg",
    },
  ],
};
