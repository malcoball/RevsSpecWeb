import { useSwipeable } from "react-swipeable";
const useSwipeHandler = (changePage:any)=>{
    const swipeDistance = 160;
    const handlers = useSwipeable({
        onSwipedLeft : (eventData) => {
            if (eventData.absX > swipeDistance) changePage(true);
        },
        onSwipedRight : (eventData) => {
            if (eventData.absX > swipeDistance) changePage(false);
        }
    })
    return handlers;
}
export default useSwipeHandler;