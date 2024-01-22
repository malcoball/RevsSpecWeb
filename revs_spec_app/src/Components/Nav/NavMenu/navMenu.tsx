import NavMenuHeader from "./NavMenuHeader/navMenuHeader";
import { NavMenuScrollHelp } from "../../Other/UiGuides";
import './navMenuStyle.css';
import { useEffect, useState } from "react";
import { firstLoad } from "../../../Data/LocalData/LocalData";

const NavMenu = (props:{titlesData:string[],className:string})=>{
    const first = firstLoad("navMenu");
    const [showHelp,setShowHelp] = useState(first);    
    useEffect(()=>{
        setTimeout(()=>{
            setShowHelp(false);
        },3000)
    },[]);
    
    return (
        <div className={"navMenu "+props.className}>
            <NavMenuHeader titlesData={props.titlesData}/>
            {showHelp && <NavMenuScrollHelp className="scrollHelp"/> }
        </div>
    )
}
NavMenu.defaultProps = {
    className : ""
}
export default NavMenu;