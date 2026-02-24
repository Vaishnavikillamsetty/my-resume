import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-sm text-primary tracking-widest uppercase mb-4">Get In Touch</h2>
          <p className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Let's build something <span className="text-gradient">great together</span>.
          </p>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for Full-Stack Developer internship opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:killamsettyvaishnavi@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="https://github.com/Vaishnavikillamsetty" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vaishnavikillamsetty" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-muted-foreground text-sm font-mono">
        <p>Designed & Built by Vaishnavi Killamsetty</p>
      </div>
    </section>
  );
};

export default ContactSection;
