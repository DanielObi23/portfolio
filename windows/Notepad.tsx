import WindowsControls from "@/components/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  List,
  MoreHorizontal,
  X,
  Link2,
  CircleUserRound,
  Settings,
  Italic,
  Bold,
  Heading1,
} from "lucide-react";
import { useState } from "react";

function Notepad() {
  const tabs = [
    { title: "About me", id: "about-me" },
    { title: "Education", id: "education" },
    { title: "Work experience", id: "work-experience" },
  ];

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

  const [showTab, setShowTab] = useState(tabs[0].id);

  const aboutMe = `I am an aspiring developer with a genuine passion for programming and software development. 
    I recently completed a comprehensive coding traineeship as a full stack developer, 
    where I successfully delivered two real-world projects to specifications, plus additional personal projects. 
    This hands-on experience allowed me to apply a wide range of programming languages and development tools, 
    solidifying my technical knowledge and problem-solving abilities.`;

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

  const statusItems = [
    { id: "pos", label: "Ln 1, Col 1" },
    {
      id: "chars",
      label: `${
        showTab === "about-me" ? aboutMe.length : educationCharCount
      } characters`,
    },
    { id: "mode", label: "Plain text" },
    { id: "zoom", label: "100%" },
    { id: "line-endings", label: "Windows (CRLF)" },
    { id: "encoding", label: "UTF-8" },
  ];

  return (
    <div className="bg-[#141414] text-white w-150 h-150">
      <div className="h-1/14 flex justify-between px-2 pt-2">
        <div className="flex items-end">
          <img
            src="/icons/notepad-icon.png"
            alt="notepad logo"
            className="size-6 ml-1 mr-3 self-center"
          />

          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setShowTab(tab.id)}
              className={cn(
                showTab === tab.id && "bg-[#2A2A2A]",
                "flex items-center justify-between gap-2 px-3 py-1.5 rounded-t-md mr-0.5 whitespace-nowrap cursor-pointer",
              )}
            >
              <span className="text-sm">{tab.title}</span>
              {showTab === tab.id && <X size={18} />}
            </div>
          ))}
        </div>

        <WindowsControls window="notepad" />
      </div>

      <div className="h-1/14 flex justify-between items-center py-1.5 px-2.5 bg-[#2A2A2A]">
        <ul className="flex gap-3">
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
        </ul>

        <ul className="flex gap-3">
          {toolbarItems.map(({ icon: Icon, hasDropdown }, index) => (
            <li key={index} className="flex items-center gap-1">
              <Icon className="size-5" />
              {hasDropdown && (
                <ChevronDown className="size-4" strokeWidth={1} />
              )}
            </li>
          ))}
        </ul>

        <ul className="flex gap-3">
          <li>
            <CircleUserRound className="size-5" />
          </li>
          <li>
            <Settings className="size-5" />
          </li>
        </ul>
      </div>

      <div className="h-11/14 bg-[#1E1E1E] p-4 text-sm leading-relaxed font-mono overflow-y-auto">
        {showTab === "about-me" && (
          <p className="whitespace-pre-line">{aboutMe}</p>
        )}

        {showTab === "education" && (
          <div className="space-y-6">
            {education.map((ed, i) => (
              <section key={`${ed.qualification}-${i}`} className="space-y-1">
                <p className="font-semibold">{ed.qualification}</p>
                <p className="text-xs opacity-70">
                  {ed.duration} • {ed.location}
                </p>
                <p className="pt-1">{ed.summary}</p>
              </section>
            ))}
          </div>
        )}

        {showTab === "work-experience" && (
          <div className="space-y-6">
            {workExperience.map((job, i) => (
              <section key={`${job.company}-${i}`} className="space-y-1">
                <p className="font-semibold">{job.company}</p>

                <p className="text-xs opacity-70">
                  {job.duration} • {job.location}
                </p>

                <ul className="pt-1 list-disc pl-4 space-y-0.5">
                  {job.duties.map((duty, j) => (
                    <li key={j}>{duty}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>

      <ul className="h-1/14 flex items-center bg-[#2A2A2A] px-2 text-sm">
        {statusItems.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <span>{item.label}</span>

            {index < statusItems.length - 1 && (
              <span className="mx-2 text-[#A6A6A6]">|</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const NotepadWindow = WindowWrapper(Notepad, "notepad");

export default NotepadWindow;
