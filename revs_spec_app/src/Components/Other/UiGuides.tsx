import Images from "../../Data/Images"
import './UiGuides.css';

export const NavMenuScrollHelp = (props:{className : string})=>{
    const {className} = props;
    return (
        <div className={"handContainer " + className}>
            <img className="ico1" src={Images.other.hand} alt="" />
        </div>
    )
}
NavMenuScrollHelp.defaultProps = {
    className : ""
}