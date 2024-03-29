export type appContextType = {
    data : {
        mainTitle : string,
        date : string,
        backButton : boolean,
        specTitle : string,
        searchQuery : string
    }
    updateSearchQuery : (newValue:string)=>void,
    updateTitle : (target : 'main' | 'spec',newValue : string)=>void,
    changeBack : (value : boolean)=>void
}
export type ingredient = {
    name : string,
    amount : string
}
export type variantType = "vegan" | "vegetarian" | "glutenFree" | "skinny" | "chilli" | "veggieChilli" | "egg";
export type specType = "burger" | "grazer" | "kids" | "dessert" | "brunch" | "pizza" | "party" | "prep" | "other" | "side" |"main" | "sharer"|"sandwich" | "wrap" |variantType;
type specInput = {
    title:string;
    builds: build[];
    image: any;
    crockery: string[];
    ingredients: ingredient[];
    type : specType | specType[];  
    variant : boolean;
}
type allergenIcon = {
    type : variantType,
    active : variant,
    pressFunc : (vartiantType:variantType,add:boolean)=>void,
}
export type specItem = {
    title : string;
    type : specType[] | specType;
    ingredients : ingredient[];
    crockery : string[];
    image : string;
    yieldAmount : number | string;
    builds : build[];
    index: number;
    variant:boolean;
    variants : {
        vegan : variant,
        vegetarian : variant, 
        glutenFree : variant, 
        skinny : variant, 
        chilli : variant, 
        veggieChilli : variant,
        egg : variant
    };
}
type variant = "active" | "show" | "hide"
export type variants ={
    vegan       : variant,
    vegetarian  : variant,
    glutenFree  : variant,
    skinny      : variant,
    chilli      : variant,
    veggieChilli: variant,
    egg: variant,
    truffle : variant,
    chicken : variant,
}
export type build = {
    title : buildTypes,
    items : string[] 
}
type buildTypes = "Burger Build" | "Prep"| "Pizza Build" | "Cooking"| "Plating" |"Error";


export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };