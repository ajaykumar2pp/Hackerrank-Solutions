import React, { useState } from 'react'

const Slide2 = ({ slides }) => {

    const [index, setIndex] = useState(0);

    const restartBtn = () => {
        setIndex(0);
    }
  
    const previousBtn = () => {
        if (index > 0) {
          setIndex(index - 1);
        }
      };

      const nextBtn = () => {
        if (index < slides.length - 1) {
          setIndex(index + 1);
        }
      };

   
    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    disabled={index === 0}
                    data-testid="button-restart"
                    onClick={restartBtn}
                >
                    Restart
                </button>
                <button
                    disabled={index === 0}
                    data-testid="button-prev"
                    onClick={previousBtn}
                >
                    Prev
                </button>
                <button
                    disabled={index === slides.length - 1}
                    data-testid="button-next"
                    onClick={nextBtn}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );
}

export default Slide2