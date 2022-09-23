
interface IProps {
    listOfImages: Array<string>;
    setCurentIndex: (index: number) => void;
}

const ImageBoard: React.FC<IProps> = ({
    listOfImages,
    setCurentIndex
}) => {
    return (
        <div className="image__container">
        {
            listOfImages.map( (imgUrl: string, index: number) => {
              return(
                <div className="img" key={ index.toString() } onClick={() => setCurentIndex(index)}>
                  <img alt='image' src={ imgUrl } className="img__style"  />
                  <div className="overlay"></div>
                </div>
              )
            })
        }
      </div>
    )
}

export default ImageBoard;