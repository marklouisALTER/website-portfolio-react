import React from 'react'
import './loader.css'
import {useEffect} from 'react';
// import favicon1 from '../../assets/favicon.png'
// import favicon2 from '../../assets/favicon-sub.png'

const Loader = () => {
  useEffect(() => {
    const h1 = document.getElementsByTagName('h1')[0]; // Select the first h1 element

    function changeColor() {
        setTimeout(() => {
          h1.style.color = 'var(--color-primary)';
          h1.style.transition = '0.2s ease-in-out';
            setTimeout(() => {
              h1.style.color = 'var(--color-light)';
              h1.style.transition = '0.2s ease-in-out';
            },100);
        },100);
    }

    const intervalId = setInterval(changeColor, 500); // Execute changeColor every 1000 milliseconds (1 second)
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };

    }, []);

  return (
    <div className='loader-container'>
      <div className="loader">
        <h1>Markme</h1>
      </div>
    </div>
  );
}

export default Loader