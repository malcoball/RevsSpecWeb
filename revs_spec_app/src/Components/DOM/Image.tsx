import './Image.css';

type props = {
    imageSrc : string,
    className : string,
}
const Image = (props:props)=>{
    const {imageSrc,className} = props;
    return (
        <div style={{backgroundImage:`url(${imageSrc})`}} className={className + " imageComponent"}></div>
    )
}
Image.defaultProps = {
    className : ""
}
export default Image;