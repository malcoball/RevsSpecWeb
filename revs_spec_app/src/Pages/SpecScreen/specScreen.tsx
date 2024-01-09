import { useState } from "react";
import SpecTitle from "../../Components/Titles/specTitle";
import { specItemCont } from "../../Data/SpecDatabase/DatabaseCompile"
import VariantIconContainer from "../../Components/Nav/VariantIcons/variantIconContainer";
import { variantType, allergenIcon } from "../../Data/@types/types";
import InfoContainer from "../../Components/InfoContainer/infoContainer";
import SpecBuild from "../../Components/SpecBuild/SpecBuild";
import './specScreen.css';

type props = {
    title : string
}
const SpecScreen = (props:props)=>{
    const [title,setTitle] = useState(props.title);
    const data = specItemCont.getItem.byName(title);
    const [yieldData,setYield] = useState("1")

    const changePage = (next:boolean)=>{
        const newTitle = next ? specItemCont.getItem.byNext(data,true) : specItemCont.getItem.byPrevious(data,true)
        setTitle(newTitle.title);
    }

    const variantFunc = (vartiantType:variantType,add:boolean)=>{
        const newItem = specItemCont.getItem.byVariant(data,vartiantType,add);
        setTitle(newItem.title);
    }

    const ingredients = specItemCont.multiply.ingredients.multiplyIngredients(data.ingredients,yieldData);

    const variants :allergenIcon[] = [
        {type:'vegan',pressFunc:variantFunc,active:data.variants.vegan},
        {type:'vegetarian',pressFunc:variantFunc,active:data.variants.vegetarian},
        {type:'glutenFree',pressFunc:variantFunc,active:data.variants.glutenFree},
        {type:'skinny',pressFunc:variantFunc,active:data.variants.skinny},
        {type:'chilli',pressFunc:variantFunc,active:data.variants.chilli},
        {type:'veggieChilli',pressFunc:variantFunc,active:data.variants.veggieChilli},
        {type:'egg',pressFunc:variantFunc,active:data.variants.egg},
    ]
    return (
        <div className="specScreen bColor1">
            <div className="spacing topSpacing"></div>
            <SpecTitle title={data.title} leftArrowFunc={()=>{changePage(false)}} rightArrowFunc={()=>{changePage(true)}}/>
            <div className="spacing titleSpacing"></div>
            <VariantIconContainer allergens={variants}/>
            <div className="spacing variantSpacing"></div>
            <InfoContainer ingredients={ingredients} crockery={data.crockery}/>
            <div className="spacing infoSpacing"></div>
            <SpecBuild imageSrc={data.image} builds={data.builds}/>
        </div>
    )
}

export default SpecScreen