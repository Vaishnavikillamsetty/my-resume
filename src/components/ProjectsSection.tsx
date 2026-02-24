import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Resume Builder",
    tech: ["Django", "JavaScript", "SQLite", "HTML/CSS"],
    description:
      "Full-stack web app enabling dynamic professional resume generation, reducing manual formatting effort by ~70%. Features secure auth, persistent storage, real-time preview, and one-click PDF download.",
    highlights: [
      "Rule-based AI for auto-structuring resume content",
      "RESTful Django endpoints for CRUD operations",
      "Responsive cross-device UI",
    ],
  },
  {
    title: "AI-Powered Mock Interview Platform",
    tech: ["Google Apps Script", "Gemini API", "Tailwind CSS", "REST API"],
    description:
      "AI interview practice platform with real-time question generation and personalized feedback via Gemini API. Covers technical, behavioural, and coding modules.",
    highlights: [
      "Real-time evaluation engine with scoring system",
      "Dynamic interview session management",
      "Instant performance analytics",
    ],
  },
  {
    title: "Automatic Railway Gate Control",
    tech: ["Arduino Nano", "C++", "Ultrasonic Sensor", "Servo Motor"],
    description:
      "Automated railway gate system using Arduino Nano and ultrasonic sensors to reduce accidents at unmanned crossings. Low-cost embedded solution for rural deployments.",
    highlights: [
      "Distance-based train detection logic",
      "Real-time sensor data processing",
      "Hardware-software integration",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-sm text-primary tracking-widest uppercase mb-12"
        >
          Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group bg-card rounded-lg border border-border p-8 hover:border-glow transition-all duration-300 hover:glow-primary"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View source">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View live">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-secondary-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-secondary text-primary font-mono">
                    {t}
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

export default ProjectsSection;
