import { motion } from "framer-motion";

const Marquee = ({ text = "WELLCOME  -  WELLCOME -" }) => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%",  color: "white" }}>
      <motion.div
        style={{ display: "flex" }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} style={{ fontSize: "250px", fontWeight: "lighter", fontFamily: "Inter" }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
