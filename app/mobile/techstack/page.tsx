"use client";

import MobileNavigation from "@/components/mobile/MobileNavigation";
import { MobileOnly } from "@/hoc/MobileOnly";
import { techStack } from "@/constants";

export default function Page() {
  return (
    <MobileOnly>
      <div className="h-full bg-secondary text-white flex flex-col">
        <MobileNavigation title="Techstack" />

        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 ">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">What I Build With</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              A curated stack I use to build scalable, performant, and modern
              applications.
            </p>
          </div>

          {/* Tech Categories */}
          {techStack.map((section, index) => {
            const animationDelay = `${index * 70}ms`;
            return (
              <div
                key={section.category}
                className="bg-tertiary rounded-xl p-4 space-y-4 animate-fade-in"
                style={{ animationDelay }}
              >
                {/* Category Title */}
                <h3 className="text-base font-semibold">{section.category}</h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {section.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MobileOnly>
  );
}
