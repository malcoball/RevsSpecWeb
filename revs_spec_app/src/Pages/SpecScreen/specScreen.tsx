import { useContext, useState,useEffect } from "react";
import SpecTitle from "../../Components/Titles/specTitle";
import { specItemCont } from "../../Data/SpecDatabase/DatabaseCompile"
import VariantIconContainer from "../../Components/Nav/VariantIcons/variantIconContainer";
import { variantType, allergenIcon } from "../../Data/@types/types";
import InfoContainer from "../../Components/InfoContainer/infoContainer";
import SpecBuild from "../../Components/SpecBuild/SpecBuild";
import './specScreen.css';
import { AppContext } from "../../Data/Context/AppContext";
import Header from "../../Components/Header/header";
import useSwipeHandler from "../../Components/SwipeHandler/swipeHandle";
import { NavMenuScrollHelp } from "../../Components/Other/UiGuides";
import { firstLoad } from "../../Data/LocalData/LocalData";


const SpecScreen = ()=>{
    const pageSwipe = firstLoad("pageSwipe");
    const [showPageSwipe,setShowPageSwipe] = useState(pageSwipe);
    useEffect(()=>{
        setTimeout(()=>{
            setShowPageSwipe(false);
        },3000);    
    })
    const context = useContext(AppContext);
    const [title,setTitle] = useState(context.data.specTitle);
    const data = specItemCont.getItem.byName(title);
    const [yieldData,setYield] = useState("1");
    const [yieldAmount,setYieldAmount] = useState(data.yieldAmount);

    const changePage = (next:boolean)=>{
        const newTitle = next ? specItemCont.getItem.byNext(data,true) : specItemCont.getItem.byPrevious(data,true)
        setTitle(newTitle.title);
    }
    const handlers = useSwipeHandler(changePage);


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
    useEffect(()=>{
        setYield("1");
    },[title])
    useEffect(()=>{
        let yieldNew = yieldData === "1" ? data.yieldAmount : specItemCont.multiply.ingredients.multiplyIngredient(data.yieldAmount+"",parseInt(yieldData)).amount;
        setYieldAmount(yieldNew.toString());
    },[title,yieldData])
    return (
        <>
        <Header backButton/>
        <div className="specScreen bColor1 maxWidthContainerMain" {...handlers}>
            <div className="spacing topSpacing"></div>
            <SpecTitle title={data.title} leftArrowFunc={()=>{changePage(false)}} rightArrowFunc={()=>{changePage(true)}}/>
            <div className="spacing titleSpacing"></div>
            {showPageSwipe && <NavMenuScrollHelp/>}
            <VariantIconContainer allergens={variants}/>
            <div className="spacing variantSpacing"></div>
            <InfoContainer ingredients={ingredients} crockery={data.crockery} type={data.type} 
                prepData={{multiply:{data : yieldData, setData : setYield},yieldTotal:yieldAmount}}/>
            <div className="spacing infoSpacing"></div>
            <SpecBuild imageSrc={data.image} builds={data.builds}/>
        </div>
        </>

    )
}

export default SpecScreen