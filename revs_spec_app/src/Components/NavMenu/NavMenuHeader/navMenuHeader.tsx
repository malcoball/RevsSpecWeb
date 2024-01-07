import { useEffect, useMemo,useState } from 'react';
import { specItemCont } from '../../../Data/SpecDatabase/DatabaseCompile';
import { navTitles } from '../../../Data/Nav/navTitles';
import NavMenuHeaderItem from './NavMenuHeaderItem/navMenuHeaderItem';
import './navMenuHeaderStyle.css';

const NavMenuHeader = (props:{titlesData:string[]})=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const className = menuOpen ? "openMenu" : "closedMenu";
    const [open,setOpen] = useState<boolean[]>([]); // Controls what element is open
    const titleObjs = useMemo(()=>specItemCont.sort.intoCategories('glutenFree','vegan','vegetarian'),[]);
    useEffect(()=>{
        const out : boolean[] = [];
        navTitles.forEach(()=>out.push(false))
        setOpen(out);
    },[])
    
    const getMenuData = (foodType:string)=>{
        const out = titleObjs[foodType as keyof typeof titleObjs];
        return out;
    }
    const toggleMenu = (indexInp:number)=>{
        const replace :boolean[] = [];
        open.forEach((item,index)=>{
            index !== indexInp ? replace.push(item) : replace.push(!item);
        })
        if (replace.includes(true)) setMenuOpen(true); else setMenuOpen(false);
        setOpen(replace);
    }

    const Menu = navTitles.map((item,index)=>{
        return <NavMenuHeaderItem toggleOpen={toggleMenu} index={index} open={open[index]} imgSrc={item.image} type={item.title} items={getMenuData(item.title)}/>
    })
    return (
        <div className={"navMenuHeader bColor1 " + className}>
            {Menu}
        </div>
    )
}
export default NavMenuHeader;