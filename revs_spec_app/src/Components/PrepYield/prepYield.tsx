import './prepYield.css';

type props = {
    multiply : {
        data : string,
        setData: React.Dispatch<React.SetStateAction<string>>
    },
    yieldTotal:number|string
}
const PrepYield = (props:props)=>{
    const {multiply,yieldTotal} = props;
    const onChange = (valueIn : string|number)=>{
        const output = valueIn.toString();
        multiply.setData(output);
    }
    
    return (
        <div className="infoContainer prepYield color2 bColor5">
            <h5 className='color1 font3'>Yield</h5>
            <div className="inputContainer">
                <input className='bColor1 color2' onChange={(event)=>{onChange(event.target.value)}} value={multiply.data} type="text" name="" id="" placeholder="0"/>
                <br />
                <span>x</span>
            </div>
            <span>{yieldTotal}</span>
        </div>
    )
}

export default PrepYield;