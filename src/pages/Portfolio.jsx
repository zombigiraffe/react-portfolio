import React from "react";
import Pieces from "../components/Pieces";
import images from "../components/ImageExports";
import { ThemeContext } from "../App"

export function Portfolio() {
  return (
    <ThemeContext.Provider>
    <div>
    <h1>My Portfolio</h1>
      <h3>Here are some projects I've done that reflect my journey as a web developer. <br />
      From bottom to top, you'll see the what I was creating starting out, and where I am today. <br/>
      A comprehensive history on building my skillset.</h3>
      <p>Starting with exhibit A: this very website! This website was created using React <br/> and React Router DOM. Please take a look at my other projects below.</p>
     <div className="cards">
      <Pieces
        key=""
        img={images.noted}
        p="This app I've called Note'd is made in React with various usages of complex state. I've also implemented a toggleable dark theme, as well as implemented local storage so that your notes and theme persists between sessions."
        link="https://noted-app-neon.vercel.app/"
        code="https://github.com/zombigiraffe/noted-app"
      />
      <Pieces
        key=""
        img={images.Escape}
        p="This website is a homepage for my band, Escape Artist. It is a static webapp made with HTML, CSS, Bootstrap, Javascript. It is fully responsive and mobile friendly."
        link="https://zombigiraffe.github.io/Escape-Artist-Site/"
        code="https://github.com/zombigiraffe/Escape-Artist-Site"
      />
      <Pieces
        key=""
        img={images.tindog}
        p="This silly website is a product and pricing landing page for the fictional app, Tindog™. It is a static webapp made with only HTML, CSS, and Bootstrap. It is also fully responsive and mobile friendly"
        link="https://zombigiraffe.github.io/bootcamp-tindog/"
        code="https://github.com/zombigiraffe/bootcamp-tindog"
      />
      </div>
      <div className="cards">
      <Pieces
        key=""
        img={images.fourdaywork}
        p="I was challenged to recreate wework4days using CSS only. I accepted. I think I did a decent job?"
        link="https://zombigiraffe.github.io/4daywork-clone-site/"
        code="https://github.com/zombigiraffe/4daywork-clone-site"
      />
      <Pieces
        key=""
        img={images.simon}
        p="This project was a combination of the concepts used in the last two applications, as well as using my first JS library, JQuery. This project was a fantastic learning experience as it has all the basic fundamentals you need to be a javascript programmer"
        link="https://zombigiraffe.github.io/bootcamp-simon-game/"
        code="https://github.com/zombigiraffe/bootcamp-simon-game"
      />
      <Pieces
        key=""
        img={images.dice}
        p="Another early dive into Javascript. This project helped me understand query selectors as well as some of the math and math manipulators involved in javascript programming"
        link="https://zombigiraffe.github.io/dice-game/"
        code="https://github.com/zombigiraffe/dice-game"
      />
      </div>
      <div className="cards">
      <Pieces
        key=""
        img={images.drumkit}
        p="One of my first introductions to Javascript. This helped me become familiar with switch statements, for loops, a little bit of javascript animation and event listeners."
        link="https://zombigiraffe.github.io/bootcamp-drum-kit/"
        code="https://github.com/zombigiraffe/bootcamp-drum-kit"
      />
      <Pieces
        key=""
        img={images.css}
        p="A fun site I made while learning CSS."
        link="https://zombigiraffe.github.io/bootcamp-css-learning/"
        code="https://github.com/zombigiraffe/bootcamp-css-learning"
      />
      <Pieces
        key=""
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
