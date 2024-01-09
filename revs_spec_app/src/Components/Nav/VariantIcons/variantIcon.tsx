import { variant, variantType } from "../../../Data/@types/types";
import Images from "../../../Data/Images";
import './variantIcon.css';

type props = {
    active : variant,
    type : variantType,
    pressFunc :(vartiantType:variantType,add:boolean)=>void
}
const VariantIcon = (props:props)=>{
    const {active,type,pressFunc} = props;
    const info = {text: 'Null', image:Images.allergen.null};
    switch(props.type){
        case "vegan" : info.text = 'Vegan';info.image = Images.allergen.vegan; break;
        case "vegetarian" : info.text = 'Veg';info.image = Images.allergen.veget; break;
        case "glutenFree" : info.text = 'Gluten Free';info.image = Images.allergen.gluten; break;
        case "skinny" : info.text = 'Skinny';info.image = Images.allergen.null; break;
        case "chilli" : info.text = 'Chilli';info.image = Images.allergen.null; break;
        case "veggieChilli" : info.text = 'ChilliVeg';info.image = Images.allergen.null; break;
        case "egg" : info.text = 'Egg';info.image = Images.allergen.null; break;
        default : console.log(props.type, " not recognised");
    }
    const opacityClass = active !== "active" ? "opacity1" : "";
    const hideClass = active === "hide" ? "hide" : "";
    const clickAdd = active === "active" ? false : true;
    return (
        <div className={hideClass}>
            {active !== "hide" ? 
                <div className={"variantIcon "+opacityClass} onClick={()=>{pressFunc(type,clickAdd)}}>
                    <img className="ico1" src={info.image} alt="" />
                    <span className="color1">{info.text}</span>
                </div> 
            : ""}
        </div>
    )
}
export default VariantIcon;