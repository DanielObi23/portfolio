import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { contacts } from "@/constants";

function Contacts() {
  return (
    <div className="w-xl rounded-md overflow-hidden bg-secondary text-sm text-white">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center h-10 px-3 bg-primary">
        <div />
        <p className="font-medium">Contacts</p>
        <div className="flex justify-end">
          <WindowsControls window="contacts" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-4">
        <div className="flex flex-col items-center text-center gap-3 max-w-xs">
          <img
            src="/profile.jpg"
            alt="profile photo"
            className="size-20 rounded-full object-cover"
          />

          <p className="text-lg font-semibold">Let&apos;s connect</p>

          <p className="text-sm opacity-80 leading-relaxed">
            Got an idea, a bug to squash, looking to hire, or just wanna talk
            tech? I&apos;m in.
          </p>
        </div>

        <ul className="w-full space-y-1">
          {contacts.map(({ title, url, icon }) => (
            <li key={title}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-3 py-2 rounded-md hover:bg-tertiary transition"
              >
                <img src={icon} alt={`${title} icon`} className="size-5" />

                <span className="text-md">{title}</span>
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
