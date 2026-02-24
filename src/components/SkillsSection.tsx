import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    skills: ["Django", "Node.js", "REST APIs", "Google Apps Script"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Arduino IDE", "DBMS", "Agile"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-sm text-primary tracking-widest uppercase mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-lg p-6 border border-border hover:border-glow transition-colors duration-300"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
