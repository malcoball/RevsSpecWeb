import './navLink.css';

const NavLink = (props:{title:string,link:string,oddColor:boolean})=>{
    const {title,link,oddColor} = props;
    const backgroundColor = oddColor ? "bColor4" : "bColor5";
    return (
        <div className={"navLink viewWidth1 "+backgroundColor}>
            <a className='color1' href={link}>{title}</a>
        </div>
    )
}

export default NavLink;