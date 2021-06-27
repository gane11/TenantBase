import {LOAD_COLORS} from '../reducers/colorsReducer';


export const load = (colors) => ({type: LOAD_COLORS, colors});

export const getAllColors = () => async (dispatch) => {
    try {

        
         const res = await fetch("http://localhost:3030");
         if (res.ok) {
           const colors= await res.json();
           if (colors) {
             console.log(colors)
             dispatch(load(colors));
           }
         }
    } catch(e) {
        console.log('ALEX')
        console.log(e);
    };
};