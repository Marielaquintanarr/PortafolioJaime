import { motion } from "framer-motion";

const getFontSize = () => {
  if (window.innerWidth >= 1920) {
    return 260;
  } else if (window.innerWidth >= 1440) {
    return 208;
  } else if (window.innerWidth >= 1280) {
    return 182;
  } else if (window.innerWidth >= 768) {
    return 135;
  } else {
    return 104;
  }
};

const Marquee = ({ text = "WELCOME - WELCOME -" }) => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", color: "white", }}>
      <motion.div
        style={{ display: "flex" }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} style={{ fontSize: `${getFontSize()}px`, fontWeight: "lighter", fontFamily: "Inter" }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
