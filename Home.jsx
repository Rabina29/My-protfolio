import rabinaImg from "../image/newimage.jpeg";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>Hello, I'm Rabina</h1>

        <h2>Computer Science & Engineering Student</h2>

        <p>
          I am a passionate CSE student interested in technology,
          web development, and building creative digital solutions.
          I enjoy learning new skills and turning ideas into meaningful projects.
        </p>
      </div>

      <div className="profile">
        <img src={rabinaImg} alt="Rabina" />
      </div>
    </section>
  );
}

export default Home;
