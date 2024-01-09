// import NavMenu from "../../Components/NavMenu/navMenu";
import NavMenu from "../../Components/Nav/NavMenu/navMenu";
import SearchContainer from "../../Components/Search/SearchContainer/searchContainer";
import { useMemo } from "react";
import { specItemCont } from "../../Data/SpecDatabase/DatabaseCompile";
import './searchPageStyle.css';

const SearchPage = ()=>{
    const titlesData = useMemo(()=>specItemCont.getItem.all.name.string("vegan",'gf','v'),[]) // Controls what the search bar returns
    

    return (
        <main className="searchPage">
            <SearchContainer titlesData={titlesData}/>
            <NavMenu titlesData={titlesData}/>
        </main>
    )
}
export default SearchPage;