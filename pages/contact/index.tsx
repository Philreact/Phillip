import Layout from "../../components/layout/Layout";

import Contact from "../../components/contact/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Phillip Lang: Contact" description="">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.8 },
        }}
      >
        <Contact />
      </motion.div>
    </Layout>
  );
}
