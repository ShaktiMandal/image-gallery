// const ImageModal:React.FC = ({imageList, onClick}) => {

//     return (
//         <div  className="display__modal" onClick={() =>   setIndex(-1) }>
//             <div className="display__img">
//             <img src={ imageList.at(index) } alt="display image" className="modal__img"/>
//         </div>
//         <div className="display__imglist">
//           {
//             imageList.map( (imgUrl: string, imgIndex: number) => {
//               return(
//                 <div key={ imgIndex.toString() } onClick={(event:any) => {
//                   event.stopPropagation();
//                   setIndex(imgIndex)}
//                   }>
//                   <img alt='image' src={ imgUrl } className= {imgIndex === index ? "img__style-tile1" : "img__style-tile" }  />
//                 </div>
//               )
//             })
//           }
//         </div>
//     </div>
//     )
// }

// export default ImageModal;