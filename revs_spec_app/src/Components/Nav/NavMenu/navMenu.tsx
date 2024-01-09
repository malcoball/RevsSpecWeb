import NavMenuHeader from "./NavMenuHeader/navMenuHeader";

const NavMenu = (props:{titlesData:string[],className:string})=>{
    
    return (
        <div className={"navMenu "+props.className}>
            <NavMenuHeader titlesData={props.titlesData}/>
        </div>
    )
}
NavMenu.defaultProps = {
    className : ""
}
export default NavMenu;