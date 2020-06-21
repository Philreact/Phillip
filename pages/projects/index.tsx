import Layout from "../../components/layout/Layout";

import Projects from "../../components/projects/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Phillip Lang: Projects" description="">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.8 },
        }}
      >
        <Projects />
      </motion.div>
    </Layout>
  );
}
