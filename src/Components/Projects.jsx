import ProjectCard from "./ProjectCard";
import quizApp from "../assets/quizApp.gif";
import toDoList from "../assets/toDoList.gif";
import getWeather from "../assets/getWeather.gif";
import currencyConverter from "../assets/currencyConverter.gif";

function Projects() {
  return (
    <div className="projects">
      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <div className="project-list">
          <ProjectCard
            title="Quiz App Game"
            image={quizApp}
            decription="A browser-based quiz game app built with HTML, CSS, and JavaScript. 
              It features multiple-choice questions, score tracking, and shows scores and correct answers at the end."
            liveLink="https://moonwwweb.github.io/quiz-game/"
            codeLink="https://github.com/moonwwweb/quiz-game"
          />
          <ProjectCard
            title="To-Do List App"
            image={toDoList}
            decription="A simple task management app built with HTML, CSS, and JavaScript. 
              Users can add, check off, and remove tasks. Includes dynamic list rendering and visual feedback for completed tasks."
            liveLink="https://moonwwweb.github.io/to-do-list/"
            codeLink="https://github.com/moonwwweb/to-do-list"
          />
          <ProjectCard
            title="Weather App"
            image={getWeather}
            decription="A real-time weather checker built with HTML, CSS, and JavaScript using the OpenWeatherMap API. 
              Users can enter a city to view current temperature, humidity, weather description, and a dynamic icon based on conditions."
            liveLink="https://moonwwweb.github.io/get-weather/"
            codeLink="https://github.com/moonwwweb/get-weather"
          />
          <ProjectCard
            title="Currency Converter"
            image={currencyConverter}
            decription="A simple web app that fetches real-time exchange rates from the Frankfurter API. Users can select currencies, 
              enter an amount, and instantly view the converted value with proper validation and loading states."
            liveLink="https://moonwwweb.github.io/currency-converter/"
            codeLink="https://github.com/moonwwweb/currency-converter"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
