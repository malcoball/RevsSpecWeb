import { ingredient, specType } from "../../Data/@types/types";
import PrepYield from "../PrepYield/prepYield";
import './infoContainer.css';
type props = {
    ingredients : ingredient[]
    crockery : string[],
    type : specType | specType[],
    prepData : {
        multiply : {
            data : string,
            setData: React.Dispatch<React.SetStateAction<string>>
        },
        yieldTotal:number|string
    }
}
const InfoContainer = (props:props)=>{
    const {ingredients,crockery,type,prepData} = props;
    return (
        <div className="infoContainer viewWidth1">
            <InfoContainerDouble title="Ingredients" items={ingredients}/>
            <div className="midSpacing"></div>
            {type !== "prep" ? 
                <InfoContainerSingle title="Crockery" items={crockery}/> : 
                <PrepYield multiply={prepData.multiply} yieldTotal={prepData.yieldTotal}/>}
            
        </div>
    )
}

const ItemSingle = (props:{text : string})=>{
    return (
        <div className="itemContainer">
            <span>{props.text}</span>
        </div>
    )
}
const ItemDouble = (props:{item:ingredient},)=>{
    return (
        <div className="itemContainer itemDouble">
            <span >{props.item.name}</span>
            <span >{props.item.amount}</span>
        </div>
    )
}


const InfoContainerSingle = (props:{title:string,items:string[]})=>{
    const {title,items} = props;
    const List = items.map((elm,index) => {return <ItemSingle key={index} text={elm}/>})
    return (
        <div className="infoContainerSingle infoContainerContent bColor5 color2 font3">
            <h5 className="color1 font3">{title}</h5>
            {List}
        </div>
    )
}

const InfoContainerDouble = (props:{title:string,items:ingredient[]})=>{
    const {title,items} = props;
    const List = items.map((elm,index)=>{return <ItemDouble key={index} item={elm}/> })
    return (
        <div className="infoContainerDouble infoContainerContent bColor5 color2 font3">
            <h5 className="color1 font3">{title}</h5>
            {List}
        </div>
    )
}
export default InfoContainer;