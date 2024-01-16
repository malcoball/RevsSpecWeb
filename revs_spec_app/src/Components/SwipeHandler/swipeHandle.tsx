import { useSwipeable } from "react-swipeable";
const useSwipeHandler = (changePage:any)=>{
    const swipeDistance = 160;
    let enableSwipe = true;
    const handlers = useSwipeable({
        onSwiped : (eventData:any) =>{
            // Sorry for the messy code, I couldn't figure out the correct types
            const classes:[] = eventData.event.target.classList;
            enableSwipe = true; // Reset
            classes.forEach(item => {
                if (item === "noSwipe") enableSwipe = false;
            });
        },
        onSwipedLeft : (eventData) => {
            if (enableSwipe){
                if (eventData.absX > swipeDistance) changePage(true);
            }
        },
        onSwipedRight : (eventData) => {
            if (enableSwipe){
                if (eventData.absX > swipeDistance) changePage(false);
            }
        }
    })
    return handlers;
}
export default useSwipeHandler;