import LinkedinIcon from "../components/Linkedin-Icon";
import images from "../components/ImageExports";

export function Home() {
  return (
    <div>
      <div className="home-div">
        <h3 className="home-h3">Hi, my name is</h3>
        <h1>Arron Mixell.</h1>
        <h4 className="home-h1">A web developer.</h4>
        <h2>Thank you for visiting. Please enjoy a look around my website.</h2>
        <a href="https://www.linkedin.com/in/arron-mixell-30b872155/">
          <LinkedinIcon />
        </a>
      <div className="cv">
        <a href="../pubic/Arron-Mixell.pdf" download>
          Download CV
        </a>
      </div>
      <img className="appdev" src={images.appdev} alt="appdev-img"/>
      </div>
      <div className="home-bottom-div"></div>
    </div>
  );
}