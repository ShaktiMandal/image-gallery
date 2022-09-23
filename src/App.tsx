import { images } from "./images";
import "./App.css";
import { useState } from "react";
import ImageBoard from "./componenets/ImageBoard";
import ImageModal from "./componenets/ImageModal";


const App: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);
  
  return (
    <div className="App">
      <ImageBoard listOfImages={images} setCurentIndex={setIndex}/>
      { index !== -1 && <ImageModal  images={images} selectedIndex={index} hideImageModal={setIndex}/> }
    </div>
  );
};

export default App;
