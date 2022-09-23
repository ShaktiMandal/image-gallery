import { images } from "./images";
import "./App.css";
import { useState } from "react";
// import ImageBoard from "./componenets/ImageBoard";
// import ImageModal from "./componenets/ImageModal";

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="App">
      <div className="image__container">
        {images.map((imgUrl: string, index: number) => {
          return (
            <div
              className="img"
              key={index.toString()}
              onClick={() => setIndex(index)}>
              <img alt="image" src={imgUrl} className="img__style" />
              <div className="overlay"></div>
            </div>
          );
        })}
      </div>
      { index !== -1 &&
        <div className="display__modal" onClick={() => setIndex(-1)}>
          <div className="display__img">
            <img
              src={images.at(index)}
              alt="display image"
              className="modal__img"
            />
          </div>
          <div className="display__imglist">
            {images.map((imgUrl: string, imgIndex: number) => {
              return (
                <div
                  key={imgIndex.toString()}
                  onClick={(event: any) => {
                    event.stopPropagation();
                    setIndex(imgIndex);
                  }}>
                  <img
                    alt="image"
                    src={imgUrl}
                    className={
                      imgIndex === index
                        ? "img__style-tile1"
                        : "img__style-tile"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default App;
