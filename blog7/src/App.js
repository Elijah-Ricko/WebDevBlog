import './App.css';
import { Pad } from './Pad.jsx';

function App() {
  return (
    <div className="App">

      <div className="header">
        <h1>Blog 7</h1>
      </div>

      <Pad /> <Pad /> <Pad /> <Pad />
      <Pad /> <Pad /> <Pad /> <Pad />

      <p>In this blog, I further worked on what we learned in class. I created a component called 'Pad' that is one instance of the many lily pads floating around the sreen. One new thing I added to this is that every time you refresh the page, the lily pads change location on the screen. Below I will provide the code snippets that made this possible.</p>

      <pre className="preClass"> {
      
` import image from './lily-pad.png';
  import React, {useRef} from 'react';

    export function Pad() {

      const styles = useRef({
        position: 'absolute',
        top: Math.floor(Math.random() * 600),
        left: Math.floor(Math.random() * 1300),
      });

      return (
        <img src={image} className="image" alt="lily pad"
          width="150" height="auto" style={styles.current} />
      );

    }`

      }
      </pre>

      <p>The extent of figuring out how to do this was learned from
        <a href="https://stackoverflow.com/questions/63525812/react-random-position-every-time-the-same-picture-renders">Here</a>.
      </p>

      <p>I also figured out how to use 'pre' from 
        <a href="https://dev.to/gustavohst/how-can-i-use-pre-tag-in-react-js-355g">Here</a>
      </p>

    </div>
    
  );
}


export default App;
