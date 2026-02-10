import WindowsControls from "@/components/desktop/WindowsControls";
import WindowWrapper from "@/hoc/WindowsWrapper";
import { contacts } from "@/constants/contacts";

function Contacts() {
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

        <ul className="w-full space-y-1">
          {contacts.map(({ title, url, icon }) => (
            <li key={title}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-3 py-2 rounded-md hover:bg-window-secondary transition"
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
