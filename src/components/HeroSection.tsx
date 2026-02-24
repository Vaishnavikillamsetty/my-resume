import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Vaishnavi{" "}
          <span className="text-gradient">Killamsetty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building AI-driven web applications with Django, React.js & Node.js.
          Passionate about turning ideas into elegant, functional products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5"
        >
          <SocialLink href="https://github.com/Vaishnavikillamsetty" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/vaishnavikillamsetty" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:killamsettyvaishnavi@gmail.com" icon={<Mail size={20} />} label="Email" />
          <SocialLink href="tel:+918332875329" icon={<Phone size={20} />} label="Phone" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-primary"
  >
    {icon}
  </a>
);

export default HeroSection;
