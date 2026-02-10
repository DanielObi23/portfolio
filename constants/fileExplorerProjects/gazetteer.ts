import type { ProjectFolder } from "@/types/fileExplorerTypes";

export const gazetteer: ProjectFolder = {
  id: "gazetteer",
  title: "Gazetteer",
  files: [
    {
      id: "gazetteer-github",
      title: "github",
      fileType: "url",
      link: "https://github.com/DanielObi23/chibuikemOnwu-Obi/tree/main/project1",
    },
    {
      id: "gazetteer-website",
      title: "website",
      fileType: "url",
      link: "https://chibuikemonwuobi.co.uk/project1/",
    },

    {
      id: "gazetteer-description",
      title: "description.txt",
      fileType: "txt",
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
      id: "gazetteer-screenshot-1",
      title: "screenshot-1",
      fileType: "img",
      imageUrl: "/screenshots/gazetteer/gazetteer-screenshot-1.jpg",
    },
    {
      id: "gazetteer-screenshot-2",
      title: "screenshot-2",
      fileType: "img",
      imageUrl: "/screenshots/gazetteer/gazetteer-screenshot-2.jpg",
    },
    {
      id: "gazetteer-screenshot-3",
      title: "screenshot-3",
      fileType: "img",
      imageUrl: "/screenshots/gazetteer/gazetteer-screenshot-3.jpg",
    },
  ],
};
