import { build } from "../../Data/@types/types";
import Image from "../DOM/Image";
import './SpecBuild.css';
type buildProps = {
    title:string,
    items:string[]
}
const BuildList = (props:buildProps)=>{
    const {title, items} = props;
    const List = items.map(item=><span className="color4">{item}</span>)
    return (
        <div className="buildList bColor7">
            <h5 className="font3 color3">{title}</h5>
            <div className="listContainer">
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
        return <BuildList items={item.items} title={item.title}/>
    })
    return (
        <div className="specBuild">
            <Image imageSrc={imageSrc} className="specImage viewWidth1"/>
            <div className="buildListContainer">
                {Builds}
            </div>
        </div>
    )
}

export default SpecBuild;