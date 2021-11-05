import image from './lily-pad.png';
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

}

