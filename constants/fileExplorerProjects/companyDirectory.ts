import type { ProjectFolder } from "@/types/fileExplorerTypes";

export const companyDirectory: ProjectFolder = {
  id: "company-directory",
  title: "Company Directory",
  files: [
    {
      id: "company-directory-website",
      title: "website",
      fileType: "url",
      link: "https://chibuikemonwuobi.co.uk/project2/",
    },
    {
      id: "company-directory-github",
      title: "github",
      fileType: "url",
      link: "https://github.com/DanielObi23/chibuikemOnwu-Obi/tree/main/project2",
    },
    {
      id: "company-directory-description",
      title: "description.txt",
      fileType: "txt",
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
      id: "company-directory-screenshot-1",
      title: "screenshot-1",
      fileType: "img",
      imageUrl:
        "/screenshots/company-directory/company-directory-screenshot-1.jpg",
    },
  ],
};
