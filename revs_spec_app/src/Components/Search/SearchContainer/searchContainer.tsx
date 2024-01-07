import { useMemo, useState } from "react";
import { specItemCont } from "../../../Data/SpecDatabase/DatabaseCompile";
import SearchBar from "../SearchBar/searchBar";
import SearchResults from "../SearchResults/searchResults";

const SearchContainer = (props:{titlesData:string[], className:string})=>{
    const [query,setQuery] = useState('');
    const filteredItems = useMemo(()=>{
        const output = query === '' ? [] : // Doesn't show the output if there's nothing typed in, could limit this to length for performance
        props.titlesData.filter(item =>{
            return item.toLowerCase().includes(query.toLowerCase())
        })
        return output;
    },[query]);
    return (
        <div className={"searchContainer bColor1 "+props.className}>
            <SearchBar text={query} textUpdate={setQuery}/>
            <SearchResults items={filteredItems}/>
        </div>
    )
}
SearchContainer.defaultProps = {
    className : ""
}
export default SearchContainer;