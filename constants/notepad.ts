import {
  List,
  MoreHorizontal,
  Link2,
  Italic,
  Bold,
  Heading1,
} from "lucide-react";

const tabs = [
  { title: "About me", id: "about-me" },
  { title: "Education", id: "education" },
  { title: "Work experience", id: "work-experience" },
];

const aboutMe = [
  "I am an aspiring developer with a genuine passion for programming and software development.",

  "I recently completed a comprehensive coding traineeship as a full stack developer, where I successfully delivered two real-world projects to specifications, plus additional personal projects.",

  "This hands-on experience allowed me to apply a wide range of programming languages and development tools, solidifying my technical knowledge and problem-solving abilities.",
];

const aboutMeCharCount = aboutMe.reduce((total, text) => {
  return total + text.length;
});

const education = [
  {
    qualification: "GCSE",
    duration: "2018-2022",
    location: "Denbigh, Milton Keynes, MK5 6EX",
    summary: "I completed 7 GCSE including Mathematics - 6 and English - 5",
  },
  {
    qualification: "A-level",
    duration: "2022-2024",
    location: "Denbigh, Milton Keynes, MK5 6EX",
    summary: "I completed my A-level in Spanish, Biology and Chemistry",
  },
];

const educationCharCount = education.reduce((total, item) => {
  return (
    total +
    item.qualification.length +
    item.duration.length +
    item.location.length +
    item.summary.length
  );
}, 0);

const workExperience = [
  {
    company: "Wingstop",
    duration: "2024 – Present",
    location: "86–88 Midsummer Blvd, Milton Keynes MK9 3GB",
    duties: [
      "Welcoming customers and taking their orders.",
      "Following food preparation guidelines in the kitchen.",
      "Dealing with customer complaints.",
      "Cleaning the restaurant after customers.",
    ],
  },
  {
    company: "McDonald's",
    duration: "2022 – 2024",
    location: "McConnell Dr, Wolverton, Milton Keynes MK12 5RJ",
    duties: [
      "Cleaning after customers and the kitchen.",
      "Working in a fast-paced team environment.",
      "Food preparation and serving customers.",
      "Stocking up ingredients for later preparation.",
    ],
  },
];

const workExperienceCharCount = workExperience.reduce((total, job) => {
  return (
    total +
    job.company.length +
    job.duration.length +
    job.location.length +
    job.duties.join("").length
  );
}, 0);

const toolbarItems = [
  {
    icon: Heading1,
    hasDropdown: true,
  },
  {
    icon: List,
    hasDropdown: true,
  },
  {
    icon: Bold,
  },
  {
    icon: Italic,
  },
  {
    icon: Link2,
  },
  {
    icon: MoreHorizontal,
  },
];

export {
  tabs,
  aboutMe,
  aboutMeCharCount,
  education,
  educationCharCount,
  workExperience,
  workExperienceCharCount,
  toolbarItems,
};
