import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>À propos de moi</h2>
      <p>
        Étudiant en informatique, passionné par le développement web
        et les technologies numériques modernes.
      </p>
    </motion.section>
  );
}

export default About;
