import {LOAD_COLORS} from '../reducers/colorsReducer';

export const load = (colors) => ({type: LOAD_COLORS, colors});

export const getAllColors = () => async (dispatch) => {
    try {
       const res = await fetch(
         "http://www.colourlovers.com/api/palettes/new?format=json", 
         {
             mode: 'no-cors'
         } 
       );
       if (res.ok) {
           console.log('HIII')
         const places = await res.json();
         if (places) {
           dispatch(load(places));
         }
       }
    } catch(e) {
        console.log(e);
    };
};