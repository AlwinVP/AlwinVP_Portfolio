import { Section } from "./Section";
import { Timeline } from "./Timeline";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Positions of responsibility.">
      <Timeline items={leadership} />
    </Section>
  );
}