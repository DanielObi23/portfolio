import Link from "next/link";

export default function MobileAppList() {
  const apps = [
    {
      title: "Resume",
      href: "/files/resume.pdf",
      icon: "/icons/file-explorer-icons/pdf-file-icon.svg",
      iconSize: "size-8",
      external: true,
    },
    {
      title: "Techstack",
      href: "/mobile/techstack",
      icon: "/icons/window-icons/notepad-icon.svg",
      iconSize: "size-10",
    },
    {
      title: "Contacts",
      href: "/mobile/contacts",
      icon: "/icons/window-icons/contacts-icon.svg",
      iconSize: "size-8",
    },
    {
      title: "Notes",
      href: "/mobile/notes",
      icon: "/icons/window-icons/notepad-icon.svg",
      iconSize: "size-10",
    },
    {
      title: "Files",
      href: "/mobile/files",
      icon: "/icons/file-explorer-icons/folder-icon.svg",
      iconSize: "size-8",
    },
  ];

  return (
    <div className="flex-1 px-6 space-y-7">
      <div className="grid grid-cols-3 gap-y-10 gap-x-6">
        {apps.map(({ title, href, icon, iconSize, external }) => {
          const content = (
            <>
              <div className="size-16 bg-primary rounded-3xl flex items-center justify-center shadow-md transition active:scale-90">
                <img src={icon} alt={`${title} icon`} className={iconSize} />
              </div>

              <p className="text-xs mt-2 text-center">{title}</p>
            </>
          );

          return external ? (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener"
              className="flex flex-col items-center"
            >
              {content}
            </a>
          ) : (
            <Link
              key={title}
              href={href}
              className="flex flex-col items-center"
            >
              {content}
            </Link>
          );
        })}
      </div>

      <div className="p-6 w-full rounded-3xl bg-primary backdrop-blur-sm shadow-lg">
        <div className="space-y-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Chibuikem Daniel Onwu-Obi
            </h1>
            <p className="text-sm text-white/60">Full-Stack & AI Engineer</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
              Currently building
            </p>
            <p className="text-sm font-medium">AI-powered tutor system</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
              Available for
            </p>
            <p className="text-sm">Freelance • Collaboration • Full-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
