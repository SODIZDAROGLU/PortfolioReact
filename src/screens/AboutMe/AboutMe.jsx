import "./AboutMe.css";
import img from "./img/oguz.jpg"


function AboutMe() {
  return (
    <div id = "aboutme" className="aboutme-container">
        <img src = {img} alt = "aboutme"/>
    <div>
        <h1>AboutMe</h1>
        <p>
            "I've chosen to move to development side of IT into being more directly involved with technology.
        </p>
    </div>
    </div>
  )
}

export default AboutMe