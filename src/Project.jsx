import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <>
      <section className="project-container">
        <div className="project-title" style={{ gridArea: "title" }}>
          <h1>VIEW MY WORK</h1>
        </div>
        <motion.div 
        // whileHover={{scale: 1.1}}
        className="project-1" style={{ gridArea: "project1" }}>
          <div className="project1-title">
            <h1>Expense Tracker</h1>
          </div>
          <div className="project1-description">
            <h3>
              {" "}
              A modern and fully responsive Expense Tracker web application
              built using React and Firebase, designed to help users efficiently
              manage their personal finances. Users can easily track income and
              expenses in real-time, view their total balance at a glance, and
              categorize transactions for better insights. The app also offers
              visual summaries and spending analysis, enabling users to
              understand their habits and make smarter financial decisions. With
              a clean, intuitive, and user-friendly interface, this project
              demonstrates the power of modern web technologies combined with
              thoughtful UX design.{" "}
            </h3>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: "300", damping: "20" }}
              className="project1-btn"
              onClick={() =>
              window.open("https://github.com/Shivam14raj/expense-tracker", "_blank")
            }
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
        // whileHover={{scale:1.1}}
        className="project-2" style={{ gridArea: "project2" }}>
            <div className="project1-title">
            <h1>Weather App</h1>
          </div>
          <div className="project1-description">
            <h3>
              {" "}
             A modern and fully responsive Weather App built using React.js that fetches real-time weather data from a RESTful Weather API. The app leverages Axios for efficient API communication and React Hooks (useState, useEffect) for seamless state management and side effects. Users can search for any city to view current weather conditions, including temperature, humidity, and overall weather status, all displayed through a clean and intuitive interface. This project demonstrates practical API integration, dynamic data handling, and thoughtful UI/UX design to deliver a responsive and user-friendly web application.{" "}
            </h3>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: "300", damping: "20" }}
              className="project1-btn"
              onClick={() =>
              window.open("https://github.com/Shivam14raj/Weather-app-in-react", "_blank")
            }
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>

        <motion.div
        // whileHover={{scale: 1.1}}
         className="project-3" style={{ gridArea: "project3" }}>
              <div className="project1-title">
            <h1>Interactive DSA Visualizer </h1>
          </div>
          <div className="project1-description">
            <h3>
              {" "}
              An interactive web-based DSA Visualizer built to demonstrate core data structures and algorithms, including sorting and searching algorithms, stacks, and queues. The application leverages D3.js for dynamic DOM manipulation, smooth animations, and step-by-step visualizations, providing an engaging and intuitive way to understand algorithm behavior. Users can interact with the visualizer to explore each algorithm in detail, significantly enhancing conceptual clarity and the overall learning experience. This project showcases practical use of data visualization techniques, algorithmic logic, and thoughtful UI/UX design in a modern web application.{" "}
            </h3>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: "300", damping: "20" }}
              className="project1-btn"
              onClick={() =>
              window.open("https://github.com/Shivam14raj/DSA-Visualizer-", "_blank")
            }
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>



        
      </section>
    </>
  );
};

export default Project;
