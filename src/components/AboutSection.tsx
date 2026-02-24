import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-sm text-primary tracking-widest uppercase mb-3">About Me</h2>
          <p className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-6">
            A motivated developer with a knack for building{" "}
            <span className="text-gradient">intelligent, user-centric</span> applications.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            I'm a B.Tech Information Technology student at Aditya Institute of Technology and Management,
            with hands-on experience in full-stack development and embedded systems. I thrive at the
            intersection of AI and web technologies, building tools that simplify complex workflows —
            from AI resume builders to smart interview platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
