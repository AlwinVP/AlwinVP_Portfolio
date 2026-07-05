import { Section } from "./Section";
import { Timeline } from "./Timeline";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I learned the craft.">
      <Timeline items={education} />
    </Section>
  );
}
