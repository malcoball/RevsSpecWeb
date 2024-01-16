import './searchBarStyle.css';
import Images from '../../../Data/Images';
type props = {
    text : string,
    textUpdate : React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = (props:props)=>{
    const {text,textUpdate} = props;
    const clearText = ()=>{
        textUpdate("");
    }
    return (
        <div className="searchBar viewWidth1 bColor3">
            <img src={Images.other.search} alt="not loaded" className='ico1'/>
            <div className="verticleDivider borderColor1"></div>
            <input className='color1' type="text" placeholder="search" name="" id="" value={text} onChange={(event)=>{textUpdate(event.target.value)}}/>
            {text.length > 0 && <div onClick={clearText} className='font2 color3 clickable'>X</div>}
            
        </div>
    )
}
export default SearchBar;