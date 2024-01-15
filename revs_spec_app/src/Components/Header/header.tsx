import { Link } from "react-router-dom";
import Images from "../../Data/Images";
import './headerStyle.css';
import { useContext, useEffect } from "react";
import { AppContext } from "../../Data/Context/AppContext";


const Header = (props:{backButton:boolean})=>{
    const context = useContext(AppContext);
    const {backButton} = props;
    const {mainTitle,date} = context.data;

    return (
        <header className="bColor2 color1">
            <div className="left">
                {/* <img src={Images.other.arrow} className="ico1" /> */}
                {backButton && 
                    <Link to="/">
                    <span className="material-symbols-outlined">arrow_back</span>
                    </Link>}
                
            </div>
            <div className="middle">
                <h2 className="font1">{mainTitle}</h2>
                <h3 className="font2">{date}</h3>
            </div>
            <div className="right">
                <img src={Images.logos.revs} className="ico1" />
            </div>
        </header>
    )
}
Header.defaultProps = {
    backButton : false
}
export default Header;