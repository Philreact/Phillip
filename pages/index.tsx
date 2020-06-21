import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

import HomePage from "../components/home/Homepage";
export default function Home() {
  return (
    <Layout title="Phillip Lang: Front-end Developer" description="">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.8 },
        }}
      >
        <HomePage />
      </motion.div>
    </Layout>
  );
}
