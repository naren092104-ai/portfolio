import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { SKILLS, TECH_CATEGORIES } from '../data/skills';

export function TechStack() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-400/10 bg-[#0B0E1E]/45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Technology Stack"
          title="Tools I build and ship with."
          description="Core languages, frameworks, databases, and deployment platforms powering my production web systems and dashboards."
        />

        <div className="space-y-8">
          {TECH_CATEGORIES.map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            return (
              <div key={category} className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <h3 className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-[#93C5FD]">
                    {category}
                  </h3>
                  <div className="h-[1px] flex-1 bg-slate-400/12" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                  {categorySkills.map((skill, idx) => (
                    <SkillCard key={skill.id} skill={skill} index={idx} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
