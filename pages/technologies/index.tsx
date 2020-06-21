import Layout from "../../components/layout/Layout";

import Technologies from "../../components/technologies/Technologies";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Phillip Lang: Technologies" description="">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.8 },
        }}
      >
        <Technologies />
      </motion.div>
    </Layout>
  );
}
