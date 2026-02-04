import {
  Files,
  Search,
  GitFork,
  BugPlay,
  Blocks,
  X,
  MoreHorizontal,
  Maximize,
  Trash2,
  Columns2,
} from "lucide-react";

const navList = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const sideBarList = [Files, Search, GitFork, BugPlay, Blocks];

const terminalNav = [
  "PROBLEMS",
  "OUTPUT",
  "DEBUG CONSOLE",
  "TERMINAL",
  "PORTS",
];

const terminalNavIcons = [Columns2, Trash2, MoreHorizontal, Maximize, X];

const firstname = "chibuikem";
const lastname = "onwu-obi";

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI"],
  },
  {
    category: "Database",
    items: ["PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

function generateTechStackTable(
  techStack: { category: string; items: string[] }[],
) {
  const rows = techStack.map(({ category, items }) => ({
    category,
    tech: items.join(", "),
  })); // Turning tech list into a single string

  const categoryWidth = Math.max(
    "Category".length,
    ...rows.map((r) => r.category.length),
  ); // finding out the category with longest character length

  const techWidth = Math.max(
    "Technologies".length,
    ...rows.map((r) => r.tech.length),
  ); // finding out the technology with longest character length

  const line = (l: string, m: string, r: string) =>
    l + "─".repeat(categoryWidth + 2) + m + "─".repeat(techWidth + 2) + r;

  const pad = (text: string, width: number) => text.padEnd(width, " "); // To make sure each line lines up

  return [
    line("┌", "┬", "┐"),
    `│ ${pad("Category", categoryWidth)} │ ${pad("Technologies", techWidth)} │`,
    line("├", "┼", "┤"), // Header

    ...rows.map(
      (r) =>
        `│ ${pad(r.category, categoryWidth)} │ ${pad(r.tech, techWidth)} │`,
    ),
    line("└", "┴", "┘"), // Tech Stack
  ].join("\n");
}

export {
  techStack,
  navList,
  sideBarList,
  terminalNav,
  terminalNavIcons,
  generateTechStackTable,
  firstname,
  lastname,
};
