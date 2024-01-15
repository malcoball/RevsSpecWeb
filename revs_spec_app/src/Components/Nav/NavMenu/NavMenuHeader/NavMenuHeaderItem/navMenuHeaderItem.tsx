import { specType } from "../../../../../Data/@types/types";
import './navMenuHeaderItem.css';
import NavLink from "../../../NavLink/navLink";
type props = {
    type:specType,
    imgSrc:string,
    items:string[],
    index : number,
    open:boolean,
    toggleOpen:(indexInp: number) => void}

const NavMenuHeaderItem = (props:props)=>{
    const {type,imgSrc,items,index,open,toggleOpen} = props;
    const itemsList = items.map((item,index)=><NavLink key={index} oddColor={index%2==0} title={item} link="#"/>)
    return (
        <div className="navMenuHeaderItem viewWidth1" onClick={()=>{toggleOpen(index)}}>
            <div className="headerItemText viewWidth1 borderColor1">
                <img src={imgSrc} alt="" className="ico1"/>
                <span className="color1">{type}</span>
            </div>
            {open && 
                <div className="navMenuBody">
                    {itemsList}
                </div>
            }
            

        </div>
    )
}

export default NavMenuHeaderItem;