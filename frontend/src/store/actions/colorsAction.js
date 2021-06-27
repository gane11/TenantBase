import {LOAD_COLORS} from '../reducers/colorsReducer';


export const load = (colors) => ({type: LOAD_COLORS, colors});

export const getAllColors = () => async (dispatch) => {
    try {

        
         const res = await fetch("http://localhost:3030");

            console.log('HEYYY', res);
         if (res.ok) {
           const colors= await res.json();
           console.log(colors)
           if (colors) {
             dispatch(load(colors));
           }
         }
    } catch(e) {
        console.log('ALEX')
        console.log(e);
    };
};