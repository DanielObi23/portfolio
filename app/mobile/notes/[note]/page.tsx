import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";
import { aboutMe, education, workExperience } from "@/constants/notepad";

export default async function page({
  params,
}: {
  params: Promise<{ note: string }>;
}) {
  const { note } = await params;
  function renderContent(note: string) {
    switch (note) {
      case "about-me":
        return (
          <div className="px-6 py-8 max-w-2xl mx-auto space-y-6 text-[15px] leading-7 text-white/85 font-mono">
            {aboutMe.map((paragraph, i) => (
              <p
                key={i}
                className="pb-4 border-b border-white/5 last:border-none"
              >
                {paragraph}
              </p>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="space-y-6 text-white p-3">
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
        );

      case "work-experience":
        return (
          <div className="space-y-6 text-white p-3">
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
        );

      default:
        return <p className="text-white">Note not found.</p>;
    }
  }

  return (
    <MobileOnly>
      <MobileNavigation title={note} />
      {renderContent(note)}
    </MobileOnly>
  );
}
