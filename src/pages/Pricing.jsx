import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear", type: "tween" }}
      exit={{ opacity: 0, y: -100 }}
    >
      <Navbar />
    </motion.main>
  );
}
