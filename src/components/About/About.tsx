import { Container } from "./styles";
import mohsinshaikh1 from "../../assets/mohsinshaikh1.png";
import laravelIcon from "../../assets/laravel-2.svg"
import phpIcon from "../../assets/php-4.svg"
import tailwindIcon from "../../assets/tailwind-css-2.svg";
import mysqlIcon from "../../assets/mysql-2.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import postgresIcon from "../../assets/postgresql.svg";
import gitIcon from "../../assets/git-icon.svg";
import postmanIcon from "../../assets/postman.svg";



export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
  <p>
    Hi there! I'm Mohsin Shaikh, a Lead Full-Stack PHP Laravel Developer with 6+ years of experience
    in building scalable web applications, leading teams, and delivering innovative digital solutions
    that drive business growth.
  </p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  <p>
    I specialize in Laravel, Vue.js, React.js, REST APIs, and database optimization, with hands-on
    experience in payment gateway integration, role-based access control, and real-time application features.
  </p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
  <p>
    I’m also skilled in modern frontend technologies, project management tools, and version control systems.
    From CRM platforms to booking systems, I bring a strong focus on performance, security, and user experience.
  </p>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={400}>
  <div className="education">
    <h3>Education:</h3>
    <h4>BE | Computer Science</h4>
    <p>P. R. Pote Patil College of Engineering & Management, Amravati | 2017</p>

    <h4>Diploma | Computer Science</h4>
    <p>P. R. Pote Patil College of Engineering & Management, Amravati | 2014</p>
  </div>
</ScrollAnimation>

<ScrollAnimation animateIn="fadeInLeft" delay={550}>
  <div className="experience">
    <h3>Experience:</h3>
    <h4>Lead Full-Stack Developer</h4>
    <p>Nyusoft Solutions LLP | 2021 - 2025</p>
    <p>Worked on CRM, e-commerce, booking platforms, and loan management systems using Laravel, Vue.js, and secure payment integrations.</p>

    <h4>Full-Stack Developer</h4>
    <p>Webmedia | 2018 - 2021</p>
    <p>Developed online ordering, voting, and cab booking platforms, including mobile applications with API integration.</p>
  </div>
</ScrollAnimation>


        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
    
        <div className="hard-skills">
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
      <img src={laravelIcon} alt="Laravel" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
      <img src={phpIcon} alt="PHP" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
      <img src={vueIcon} alt="Vue.js" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
      <img src={reactIcon} alt="React.js" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
      <img src={jsIcon} alt="JavaScript" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
      <img src={tailwindIcon} alt="Tailwind CSS" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
      <img src={boostrapIcon} alt="Bootstrap" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
      <img src={mysqlIcon} alt="MySQL" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
      <img src={postgresIcon} alt="PostgreSQL" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
      <img src={gitIcon} alt="Git" />
    </ScrollAnimation>
  </div>
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
      <img src={postmanIcon} alt="Postman" />
    </ScrollAnimation>
  </div>
</div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={mohsinshaikh1} alt="Mohsin Shaikh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
