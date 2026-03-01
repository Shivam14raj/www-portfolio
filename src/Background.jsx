import { motion, useScroll, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      x.set(latest * 0.06);
      y.set(latest * 0.06);
    });
  }, [scrollY]);

  return (
    <motion.div  
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        
        // backgroundColor: "#fafafa",
        backgroundColor :"#E1E9E5", // best 
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        backgroundPositionX: x,  
        backgroundPositionY: y,
      }}
    />
  );
}