import { ingredient } from "../../Data/@types/types";
import './infoContainer.css';
type props = {
    ingredients : ingredient[]
    crockery : string[],

}
const InfoContainer = (props:props)=>{
    const {ingredients,crockery} = props;
    return (
        <div className="infoContainer viewWidth1">
            <InfoContainerDouble title="Ingredients" items={ingredients}/>
            <div className="midSpacing"></div>
            <InfoContainerSingle title="Crockery" items={crockery}/>
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
    const List = items.map((elm,index) => {return <ItemSingle text={elm}/>})
    return (
        <div className="infoContainerSingle infoContainerContent bColor5 color2 font3">
            <h5 className="color1 font3">{title}</h5>
            {List}
        </div>
    )
}

const InfoContainerDouble = (props:{title:string,items:ingredient[]})=>{
    const {title,items} = props;
    const List = items.map((elm,index)=>{return <ItemDouble item={elm}/> })
    return (
        <div className="infoContainerDouble infoContainerContent bColor5 color2 font3">
            <h5 className="color1 font3">{title}</h5>
            {List}
        </div>
    )
}
export default InfoContainer;