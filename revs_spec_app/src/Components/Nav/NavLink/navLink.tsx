import { Link } from 'react-router-dom';
import './navLink.css';
import { useContext } from 'react';
import { AppContext } from '../../../Data/Context/AppContext';

const NavLink = (props:{title:string,link:string,oddColor:boolean})=>{
    const context = useContext(AppContext);
    const {title,link,oddColor} = props;
    const backgroundColor = oddColor ? "bColor4" : "bColor5";
    const onClick = ()=>{
        context.updateTitle("spec",title);
        context.changeBack(true);
    }
    return (
        <div className={"navLink viewWidth1 "+backgroundColor}>
            <Link to="/specScreen" onClick={onClick}>
                <span className="color1">{title}</span>
            </Link>
        </div>
    )
}

export default NavLink;