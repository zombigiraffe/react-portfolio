import LinkedinIcon from "../components/Linkedin-Icon";
import images from "../components/ImageExports";

export function Home() {
  return (
    <div>
      <div className="home-div">
        <h3 className="home-h3">Hi, my name is</h3>
        <h1>Arron Mixell.</h1>
        <h4>A web developer.</h4>
        <a href="https://www.linkedin.com/in/arron-mixell-30b872155/">
          <LinkedinIcon />
        </a>
      <div className="cv">
        <a href="https://drive.google.com/file/d/1b76DLSYdJjJy1yGn8_-GzA0xlwmmeJpK/view?usp=sharing" download>
          Download CV
        </a>
      </div>
        <h2>Thank you for visiting. Please enjoy a look around my website.</h2>
      <img className="appdev" src={images.appdev} alt="appdev-img"/>
      </div>
      <div className="home-bottom-div"></div>
    </div>
  );
}