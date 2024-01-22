import { useContext, useMemo, useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import SearchResults from "../SearchResults/searchResults";
import { AppContext } from "../../../Data/Context/AppContext";

const SearchContainer = (props:{titlesData:string[], className:string})=>{
    const context = useContext(AppContext);
    const [query,setQuery] = useState(context.data.searchQuery);
    const updateQuery = (newValue : string)=>{
        setQuery(newValue);
        // Could be optimised by only triggering on a pagechange.
        context.updateSearchQuery(newValue);
    }
    const filteredItems = useMemo(()=>{
        const output = query === '' ? [] : // Doesn't show the output if there's nothing typed in, could limit this to length for performance
        props.titlesData.filter(item =>{
            return item.toLowerCase().includes(query.toLowerCase())
        })
        return output;
    },[query]);
    return (
        <div className={"searchContainer bColor1 "+props.className}>
            <SearchBar text={query} textUpdate={updateQuery}/>
            <SearchResults items={filteredItems}/>
        </div>
    )
}
SearchContainer.defaultProps = {
    className : ""
}
export default SearchContainer;