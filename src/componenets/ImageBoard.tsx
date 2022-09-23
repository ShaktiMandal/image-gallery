
// import { useEffect } from 'react';

// const ImageBoard: React.FC = ({ imageList }) => {
//     const [index, setIndex] = useEffect<number>(-1);
//     return (
//         <div className="image__container">
//         {
//             imageList.map( (imgUrl: string, index: number) => {
//               return(
//                 <div className="img" key={ index.toString() } onClick={() => setIndex(index)}>
//                   <img alt='image' src={ imgUrl } className="img__style"  />
//                   <div className="overlay"></div>
//                 </div>
//               )
//             })
//         }
//       </div>
//     )
// }

// export default ImageBoard;