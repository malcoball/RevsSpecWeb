import Images from "../../Data/Images";
import './headerStyle.css';
type props = {
    title : string,
    date : string
}

const Header = (props:props)=>{
    const {title, date} = props;
    return (
        <header className="bColor2 color1">
            <div className="left">
                {/* <img src={Images.other.arrow} className="ico1" /> */}
                <span className="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="middle">
                <h2 className="font1">{title}</h2>
                <h3 className="font2">{date}</h3>
            </div>
            <div className="right">
                <img src={Images.logos.revs} className="ico1" />
            </div>
        </header>
    )
}
export default Header;