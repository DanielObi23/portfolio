import type { ProjectFolder } from "@/types/fileExplorerTypes";

export const fluentroam: ProjectFolder = {
  id: "fluentroam",
  title: "FluentRoam",
  briefDescription: "An AI-powered learning path generator",
  files: [
    {
      id: "fluentroam-website",
      title: "website",
      fileType: "url",
      link: "https://fluentroam.chibuikemonwuobi.co.uk/",
    },
    {
      id: "fluentroam-github",
      title: "github",
      fileType: "url",
      link: "https://github.com/DanielObi23/FluentRoam",
    },
    {
      id: "fluentroam-description",
      title: "description.txt",
      fileType: "txt",
      description: {
        text: [
          "AI-powered language learning application for practicing reading, writing, listening and speaking with real-time feedback.",
        ],
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
      id: "fluentroam-screenshot-1",
      title: "screenshot-1",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-1.jpg",
    },
    {
      id: "fluentroam-screenshot-2",
      title: "screenshot-2",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-2.jpg",
    },
    {
      id: "fluentroam-screenshot-3",
      title: "screenshot-3",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-3.jpg",
    },
    {
      id: "fluentroam-screenshot-4",
      title: "screenshot-4",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-4.jpg",
    },
    {
      id: "fluentroam-screenshot-5",
      title: "screenshot-5",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-5.jpg",
    },
    {
      id: "fluentroam-screenshot-6",
      title: "screenshot-6",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-6.jpg",
    },
    {
      id: "fluentroam-screenshot-7",
      title: "screenshot-7",
      fileType: "img",
      imageUrl: "/screenshots/fluentroam/fluentroam-screenshot-7.jpg",
    },
  ],
};
