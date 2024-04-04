import './Image.css';

type props = {
    imageSrc : string,
    className : string,
    onClick : ()=>void | null
}
const Image = (props:props)=>{
    const {imageSrc,className,onClick} = props;
    return (
        <div onMouseUp={onClick} style={{backgroundImage:`url(${imageSrc})`}} className={className + " imageComponent"}></div>
    )
}
Image.defaultProps = {
    className : "",
    onClick : null
}
export default Image;