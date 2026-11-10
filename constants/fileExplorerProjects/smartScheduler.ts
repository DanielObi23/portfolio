import type { ProjectFolder } from "@/types/fileExplorerTypes";

export const smartScheduler: ProjectFolder = {
  id: "smart-scheduler",
  title: "Smart Scheduler",
  briefDescription:
    "A deterministic, priority-based task scheduler that fills your calendar",
  files: [
    {
      id: "smart-scheduler-website",
      title: "website",
      fileType: "url",
      link: "https://smart-scheduler-alpha.vercel.app/sign-in",
    },
    {
      id: "smart-scheduler-github",
      title: "github",
      fileType: "url",
      link: "https://github.com/DanielObi23/smart-scheduler",
    },
    {
      id: "smart-scheduler-description",
      title: "description.txt",
      fileType: "txt",
      description: {
        type: "full-stack",
        text: [
          "Smart Scheduler automatically slots tasks into a calendar around fixed commitments and daily capacity.",
          "Note: \"smart\" does not mean AI. There is no machine learning or language model involved. The scheduler is a deterministic, priority-based algorithm I designed and wrote from scratch, so the same inputs always produce the same schedule.",
          "It works in two steps: tasks are ranked by priority, then placed using interval-merging bin-packing into the free time that remains.",
          "The algorithm is covered by a Vitest suite, including a 2000-run randomized fuzz test and regressions for DST transitions and starvation prevention. The full-stack app around it was built with Claude Code.",
          "The UI is responsive and mobile-first, with light/dark themes and Calendar, Board, Timetable and Overdue views.",
        ],
        techstack: [
          {
            category: "Frontend",
            items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
          },
          {
            category: "Backend",
            items: ["Next.js App Router", "Neon Auth"],
          },
          {
            category: "Database",
            items: ["Neon Postgres", "Drizzle ORM"],
          },
          {
            category: "Testing",
            items: ["Vitest"],
          },
        ],
      },
    },
    {
      id: "smart-scheduler-screenshot-1",
      title: "screenshot-1",
      fileType: "img",
      imageUrl: "/screenshots/smart-scheduler/smart-scheduler-screenshot-1.jpg",
    },
    {
      id: "smart-scheduler-screenshot-2",
      title: "screenshot-2",
      fileType: "img",
      imageUrl: "/screenshots/smart-scheduler/smart-scheduler-screenshot-2.jpg",
    },
    {
      id: "smart-scheduler-screenshot-3",
      title: "screenshot-3",
      fileType: "img",
      imageUrl: "/screenshots/smart-scheduler/smart-scheduler-screenshot-3.jpg",
    },
    {
      id: "smart-scheduler-screenshot-4",
      title: "screenshot-4",
      fileType: "img",
      imageUrl: "/screenshots/smart-scheduler/smart-scheduler-screenshot-4.jpg",
    },
  ],
};
