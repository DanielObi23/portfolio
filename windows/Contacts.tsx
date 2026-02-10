import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";

function Contacts() {
  const contactLinks = [
    {
      label: "GitHub",
      href: "https://github.com/DanielObi23",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chibuikem-daniel-onwu-obi-bb963a329/",
    },
    {
      label: "Email",
      href: "mailto:chibuikemonwuobi23@gmail.com",
    },
  ];

  return (
    <div className="w-xl rounded-md overflow-hidden bg-window-canvas text-sm text-white">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center h-10 px-3 bg-window-surface">
        <div />
        <p className="font-medium">Contacts</p>
        <div className="flex justify-end">
          <WindowsControls window="contacts" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-4">
        <img
          src="/profile.jpg"
          alt="profile photo"
          className="size-20 rounded-full object-cover"
        />

        <ul className="w-full space-y-2 text-center">
          {contactLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                className="block rounded px-3 py-1.5 hover:bg-window-secondary transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ContactsWindow = WindowWrapper(Contacts, "contacts");

export default ContactsWindow;
