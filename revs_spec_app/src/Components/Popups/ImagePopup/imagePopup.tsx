import Image from "../../DOM/Image";
import './imagePopup.css';

const ImagePopup = (props:{imageSrc:string,closeFunc:()=>void})=>{

    return(
        <div onMouseUp={props.closeFunc} id="imagePopup" className="imageContainer">
            <Image imageSrc={props.imageSrc}/>
        </div>
    )
}

export default ImagePopup;