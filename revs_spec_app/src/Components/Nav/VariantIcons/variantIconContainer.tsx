import { allergenIcon } from "../../../Data/@types/types"
import VariantIcon from "./variantIcon"
import './variantIconContainer.css';

type props = {
    allergens:allergenIcon[],
}
const VariantIconContainer = (props:props)=>{
    const Icons = props.allergens.map((item,index) =>{
        return <VariantIcon key={index} type={item.type} active={item.active} pressFunc={item.pressFunc}/>
    })
    return (
        <div className="allergenIcons maxWidthContainer">
            {Icons}
        </div>
    )
}
export default VariantIconContainer;