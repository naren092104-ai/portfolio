import { SectionHeading } from '../components/SectionHeading';
import { Timeline } from '../components/Timeline';
import { EXPERIENCES } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-400/10 bg-[#0B0E1E]/45">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience & Leadership"
          title="From code to coordinated field impact."
          description="A verified record of software implementation, institutional ERP delivery, and multi-year leadership across education and humanitarian NGOs."
        />

        <Timeline entries={EXPERIENCES} />
      </div>
    </section>
  );
}
