"use client";

import MobileNavigation from "@/components/mobile/MobileNavigation";
import { contacts } from "@/constants/contacts";
import { MobileOnly } from "@/hoc/MobileOnly";

export default function page() {
  return (
    <MobileOnly>
      <div className="h-full bg-window-canvas text-white">
        <MobileNavigation title="Contacts" />

        <div className="flex flex-col items-center px-6 pt-8 gap-8">
          {/* Profile photo */}
          <div className="flex flex-col items-center text-center gap-3 max-w-xs">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="size-28 rounded-full object-cover border border-white/10"
            />

            <p className="text-lg font-semibold">Let&apos;s connect</p>

            <p className="text-sm opacity-80 leading-relaxed">
              Got an idea, a bug to squash, looking to hire, or just wanna talk
              tech? I&apos;m in.
            </p>
          </div>

          {/* Contact buttons */}
          <div className="w-full flex flex-col gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 px-4 py-3 rounded-lg bg-window-secondary"
              >
                <img
                  src={contact.icon}
                  alt={contact.title}
                  className="size-6"
                />

                <span className="text-sm font-medium">{contact.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MobileOnly>
  );
}
