import React, { useEffect, useRef, useState } from "react";
import { NavMenuScrollHelp } from "../Other/UiGuides";
import { build } from "../../Data/@types/types";
import Image from "../DOM/Image";
import './SpecBuild.css';
import { firstLoad } from "../../Data/LocalData/LocalData";
import ImagePopup from "../Popups/ImagePopup/imagePopup";
type buildProps = {
    title:string,
    items:string[],
    className : string
}
const BuildList = (props:buildProps)=>{
    useEffect(()=>{
        // console.log(listContainerRef.current?.scrollHeight)
        if (listContainerRef.current !== null){
            listContainerRef.current.scrollTo(0,0);
        }
    },[])
    const listContainerRef = useRef<HTMLDivElement|null>(null);
    const {title, items, className} = props;
    const List = items.map((item,index)=><span key={index} className={"color4 "+className}>{item}</span>)
    return (
        <div className={"buildList "+className}>
            <h5 className={"font3 bColor7 color3 "+className}>{title}</h5>
            <div ref={listContainerRef} className={"listContainer bColor7 "+className}>
                {List}
            </div>
        </div>
    )
}

type props = {
    imageSrc : string,
    builds : build[]
}
const SpecBuild = (props:props)=>{
    const myRef = React.useRef<HTMLDivElement>(null);
    const pageSwipe = firstLoad("specBuild");
    const [showPageSwipe,setShowPageSwipe] = useState(pageSwipe);
    const [showImagePopup,setImagePopup] = useState<boolean>(false);
    const showImage = ()=>{setImagePopup(true)}; const hideImage = ()=>{setImagePopup(false)};
    const startSwipeDetect = ()=>{
        const yy = myRef.current?.getBoundingClientRect();
        if ((yy !== undefined) && (yy.y+yy.height < window.outerHeight*1.1)){
            setShowPageSwipe(true);
            window.removeEventListener("scroll",startSwipeDetect);
            setTimeout(()=>{
                setShowPageSwipe(false);
            },3000)
        }
    }
    useEffect(()=>{
        if (pageSwipe) window.addEventListener("scroll",startSwipeDetect);
    },[])
    
    const {imageSrc, builds} = props;
    const Builds = builds.map((item,index)=>{
        return <BuildList className="noSwipe maxWidthItem" key={index} items={item.items} title={item.title}/>
    })
    return (
        <div className="specBuild ">
            <Image onClick={showImage} imageSrc={imageSrc} className="specImage viewWidth1 maxWidthContainer"/>
            {showImagePopup && <ImagePopup closeFunc={hideImage} imageSrc={imageSrc}/>}
            <div ref={myRef} className="buildListContainer noSwipe maxWidthContainerMain">
                {showPageSwipe && <NavMenuScrollHelp/>}
                
                {Builds}
            </div>
        </div>
    )
}

export default SpecBuild;