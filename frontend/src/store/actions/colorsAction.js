import {LOAD_COLORS} from '../reducers/colorsReducer';


export const load = (colors) => ({type: LOAD_COLORS, colors});

export const getAllColors = () => async (dispatch) => {
    try {

        
         const res = await fetch("http://localhost:3032");
         if (res.ok) {
           const colors= await res.json();
           if (colors) {
             console.log(colors)
             let eightColors = colors.slice(0,8)
             dispatch(load(eightColors));
           }
         }
    } catch(e) {
        console.log('ALEX')
        console.log(e);
    };
};