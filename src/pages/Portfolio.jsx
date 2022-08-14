import React from "react";
import Pieces from "../components/Pieces";
import images from "../components/ImageExports";
import { ThemeContext } from "../App";

export function Portfolio() {
  return (
    <ThemeContext.Provider>
      <div>
        <div className="portfolio-top">
          <div className="portfolio-top-content">
            <h1>My Portfolio</h1>
            <h2>
              Here are some projects I've done reflecting my journey as a web
              developer. <br />
              The projects at the top are my most recent creations decending <br/> downward into my earliest work. <br/>You'll see what I was creating starting out,
              and where I am today. 
            </h2>
            <h3>A comprehensive history on building my
              skillset.</h3>
            <p className="portfolio-para">
              Starting with exhibit A: this very website! This website was
              created using React <br /> and React Router DOM and is fully responsive. Please take a
              look at my other projects below.
            </p>
          </div>
          <div>
            <img className="webdev-img" src={images.coding} alt="" />
          </div>
        </div>
        <div className="cards card-row">
          <Pieces
            key="1"
            img={images.noted}
            p="This app I've called Note'd is made in React. I've also implemented a toggleable dark theme, as well as implemented local storage so your notes and theme persist between sessions."
            link="https://noted-app-neon.vercel.app/"
            code="https://github.com/zombigiraffe/noted-app"
          />
          <Pieces
            key="2"
            img={images.Escape}
            p="This website is a homepage for my band, Escape Artist. It is a static webapp made with HTML, CSS, Bootstrap, and Javascript. It is fully responsive and mobile friendly."
            link="https://zombigiraffe.github.io/Escape-Artist-Site/"
            code="https://github.com/zombigiraffe/Escape-Artist-Site"
          />
          <Pieces
            key="3"
            img={images.tindog}
            p="This silly website is a product and pricing landing page for the fictional app, Tindog™. It is a static webapp made with only HTML, CSS, and Bootstrap. It is also fully responsive and mobile friendly"
            link="https://zombigiraffe.github.io/bootcamp-tindog/"
            code="https://github.com/zombigiraffe/bootcamp-tindog"
          />
        </div>
        <div className="cards card-row-middle">
          <Pieces
            key="4"
            img={images.fourdaywork}
            p="I was challenged to recreate wework4days using CSS only. I accepted. I think I did a decent job?"
            link="https://zombigiraffe.github.io/4daywork-clone-site/"
            code="https://github.com/zombigiraffe/4daywork-clone-site"
          />
          <Pieces
            key="5"
            img={images.simon}
            p="This project was a combination of the concepts used in the last two applications, as well as using my first JS library, JQuery. This project was a fantastic learning experience as it has all the basic fundamentals you need to be a javascript programmer"
            link="https://zombigiraffe.github.io/bootcamp-simon-game/"
            code="https://github.com/zombigiraffe/bootcamp-simon-game"
          />
          <Pieces
            key="6"
            img={images.dice}
            p="Another early dive into Javascript. This project helped me understand query selectors as well as some of the math and math manipulators involved in javascript programming"
            link="https://zombigiraffe.github.io/dice-game/"
            code="https://github.com/zombigiraffe/dice-game"
          />
        </div>
        <div className="cards card-row">
          <Pieces
            key="7"
            img={images.drumkit}
            p="One of my first introductions to Javascript. This helped me become familiar with switch statements, for loops, a little bit of javascript animation and event listeners."
            link="https://zombigiraffe.github.io/bootcamp-drum-kit/"
            code="https://github.com/zombigiraffe/bootcamp-drum-kit"
          />
          <Pieces
            key="8"
            img={images.css}
            p="A fun site I made while learning CSS."
            link="https://zombigiraffe.github.io/bootcamp-css-learning/"
            code="https://github.com/zombigiraffe/bootcamp-css-learning"
          />
          <Pieces
            key="9"
            img={images.html}
            p="A silly site I worked on while learning HTML. You're sure to get a chuckle or two visting this."
            link="https://zombigiraffe.github.io/html-learning/"
            code="https://github.com/zombigiraffe/html-learning"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
