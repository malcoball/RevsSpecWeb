import Images from "../../Data/Images";
import './specTitle.css';

type props = {
    title : string,
    leftArrowFunc : ()=> void,
    rightArrowFunc : ()=> void,
}
const SpecTitle = (props:props)=>{
    const {title, leftArrowFunc, rightArrowFunc} = props;
    return (
        <div className="specTitle viewWidth1 borderColor1">
            <div className="leftArrowCont" onClick={leftArrowFunc}>
                <img className="ico1" src={Images.other.arrow} alt=""/>
            </div>
            <h3 className="color1 font3">{title}</h3>
            <div className="rightArrowCont" onClick={rightArrowFunc}>
                <img className="ico1" src={Images.other.arrow} alt=""/>
            </div>
        </div>
    )
}


export default SpecTitle;