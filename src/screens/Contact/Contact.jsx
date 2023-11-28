import "./Contact.css";
import resume from "./img/SOD.pdf"

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <p>SUKRU OGUZ DIZDAROGLU</p>
      <p>Marieatta, GA</p>
      <p>+1 (404) 429-9328</p>
      <p>dizdaroglu105@gmail.com</p>
      <a href={resume} download="SOD.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
    </div>
  )
}

export default Contact