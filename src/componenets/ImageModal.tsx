import { useState } from "react"

interface IProps {
    images: Array<string>,
    hideImageModal: (index: number) => void,
    selectedIndex: number
}

const ImageModal:React.FC<IProps> = ({
    images,
    selectedIndex,
    hideImageModal
}) => {
    return (
        <div  className="display__modal" onClick={() =>  hideImageModal(-1) }>
            <div className="display__img">
            <img src={ images.at(selectedIndex) } alt="display image" className="modal__img"/>
        </div>
        <div className="display__imglist">
          {
            images.map( (imgUrl: string, imgIndex: number) => {
              return(
                <div key={ imgIndex.toString() } onClick={(event:any) => {
                  event.stopPropagation();
                  hideImageModal(imgIndex)}
                  }>
                  <img alt='image' src={ imgUrl } className= {imgIndex === selectedIndex ? "img__style-tile1" : "img__style-tile" }  />
                </div>
              )
            })
          }
        </div>
    </div>
    )
}

export default ImageModal;