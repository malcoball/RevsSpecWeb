// import NavMenu from "../../Components/NavMenu/navMenu";
import Header from "../../Components/Header/header";
import NavMenu from "../../Components/Nav/NavMenu/navMenu";
import SearchContainer from "../../Components/Search/SearchContainer/searchContainer";
import { useMemo } from "react";
import { specItemCont } from "../../Data/SpecDatabase/DatabaseCompile";
import './searchPageStyle.css';

const SearchPage = ()=>{
    const excludes = ['vegan','glutenFree','vegetarian'];
    const titlesData = useMemo(()=>specItemCont.getItem.all.name.string(...excludes),[]) // Controls what the search bar returns
    // const titlesData = useMemo(()=>specItemCont.getItem.all.name.string("vegan",'gf','v'),[]) // Controls what the search bar returns

    return (
        <>
        <Header/>
        <main className="searchPage maxWidthContainerMain">
            <SearchContainer className="maxWidthContainerMain" titlesData={titlesData}/>
            <NavMenu className="maxWidthContainerMain" titlesData={titlesData}/>
        </main>
        </>

    )
}
export default SearchPage;