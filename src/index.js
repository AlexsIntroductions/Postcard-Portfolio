import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Postcard } from './Postcard';

var doAnimate = false;

class Tabletop extends React.Component {
  render() {
    //<Postcard type={"picture"} in={false} url={"../images/cats.jpg"} content={"A picture of my Cats"} />
    return (
      <>
        <button type='button' onClick={() => {
          doAnimate = !doAnimate;
        }}>PRESS</button>
        <Postcard type={"paragraph"} in={doAnimate} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
        <Postcard type={"paragraph"} in={doAnimate} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
        <Postcard type={"paragraph"} in={doAnimate} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />
        <Postcard type={"paragraph"} in={doAnimate} url={""} content={"The fitness graham pacer test is a multi stage capacity test that prograssively gets more difficult as it continues. The fitness graham pacer test will begin in 30 seconds so line up at the door this is a continuation of the test"} />

      </>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Tabletop />);
