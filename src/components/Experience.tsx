import { Section } from "./Section";
import { Timeline } from "./Timeline";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships & hackathons.">
      <Timeline items={experience} />
    </Section>
  );
}
