import NavLink from "../../NavLink/navLink";

const SearchResults = (props:{items:string[]})=>{
    const Items = props.items.map((item,index) => <NavLink oddColor={index%2==0} title={item} link="#"/>);
    return (
        <>
            {Items}
        </>
    )
}
export default SearchResults;