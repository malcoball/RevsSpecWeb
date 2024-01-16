import { useEffect, useRef } from "react";
import { build } from "../../Data/@types/types";
import Image from "../DOM/Image";
import './SpecBuild.css';
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
    const {imageSrc, builds} = props;
    const Builds = builds.map((item,index)=>{
        return <BuildList className="noSwipe" key={index} items={item.items} title={item.title}/>
    })
    return (
        <div className="specBuild">
            <Image imageSrc={imageSrc} className="specImage viewWidth1"/>
            <div className="buildListContainer noSwipe">
                {Builds}
            </div>
        </div>
    )
}

export default SpecBuild;