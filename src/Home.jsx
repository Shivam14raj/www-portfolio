import React from "react";
import "./Home.css";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const words = ["Competitive Programming", "Development", "Machine Learning"];

const Home = () => {
  return (
    <section className="container">
      <div className="item" id="links" style={{ gridArea: "box1" }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-links">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: "300", damping: "20" }}
            id="btn"
            className="leetcode"
            onClick={() =>
              window.open("https://leetcode.com/u/shivam_hack014/", "_blank")
            }
          >
            LeetCode
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: "300", damping: "20" }}
            id="btn"
            className="github"
            onClick={() =>
              window.open("https://github.com/Shivam14raj", "_blank")
            }
          >
            Github
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: "300", damping: "20" }}
            id="btn"
            className="linkdein"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shivam-raj-427a03284",
                "_blank",
              )
            }
          >
            Linkdein
          </motion.button>
        </div>
      </div>
      <div className="item" id="name-text" style={{ gridArea: "box2" }}>
        <h1>HI, I'M SHIVAM RAJ</h1>
        {/* <h2> ~ I do Competitive Programming, Developement & Machine learning. ~ 📚💻✨  </h2> */}
        <motion.h2
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.2rem",
          }}
        >
          ~ I do{" "}
          {words.map((word, index) => (
            <React.Fragment key={word}>
              <span
                style={{
                  position: "relative",
                  padding: "0.3rem 0.7rem",
                  overflow: "hidden",
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                {/* sliding background */}
                <motion.span
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#2563eb",
                    zIndex: 0,
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: ["-100%", "0%", "0%", "100%"] }}
                  transition={{
                    duration: 2.8,
                    times: [0, 0.3, 0.7, 1],
                    delay: index * 4,
                    ease: "easeInOut",
                  }}
                />

                {/* text */}
                <motion.span
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                  initial={{ color: "#111" }}
                  animate={{ color: ["#111", "#fff", "#fff", "#111"] }}
                  transition={{
                    duration: 2.8,
                    times: [0, 0.3, 0.7, 1],
                    delay: index * 4,
                    ease: "easeInOut",
                  }}
                >
                  {word}
                </motion.span>
              </span>

              {index === 0 && ","}
              {index === 1 && " &"}
            </React.Fragment>
          ))}{" "}
          ~ 📚💻✨
        </motion.h2>
      </div>
      <div className="item" id="hireMe" style={{ gridArea: "box3" }}>
        <h1>Hire Me ^_^ </h1> 
        
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: "300", damping: "20" }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/182JNqG0xh01aWIxOBH4i0HXbe0dVGd94/preview",
              "_blank",
            )
          }
        >
          View CV 
          
        </motion.button>
      </div>
      {/* <div className="item" style={{ gridArea: "box4" }}></div> */}
    </section>
  );
};

export default Home;
