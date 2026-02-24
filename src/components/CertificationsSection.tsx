import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  { title: "Generative AI Foundations", issuer: "AWS Academy Graduate", date: "Aug 2025" },
  { title: "The Joy of Computing Using Python", issuer: "NPTEL – Silver Badge", date: "Jul – Oct 2025" },
  { title: "Web Development Using Django", issuer: "APSSDC", date: "Jan 2025" },
  { title: "Advanced UI Development with JavaScript", issuer: "AITAM", date: "Sept 2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-sm text-primary tracking-widest uppercase mb-12"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-5 hover:border-glow transition-colors"
            >
              <Award size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-medium text-sm">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mt-1 font-mono">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 bg-card border border-primary/20 rounded-lg p-6 glow-primary"
        >
          <Trophy size={22} className="text-primary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-heading font-semibold">First Prize — Build-A-Thon Hackathon</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Built a working prototype in 24 hours, competing against 50+ teams at AITAM (Jul 2025)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
