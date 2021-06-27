import {LOAD_COLORS} from '../reducers/colorsReducer';
import fetchJsonp from 'fetch-jsonp';


export const load = (colors) => ({type: LOAD_COLORS, colors});

export const getAllColors = () => async (dispatch) => {
    // fetchJsonp("http://www.colourlovers.com/api/palettes/new?format=json")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (json) {
    //     console.log("parsed json", json);
    //   })
    //   .catch(function (ex) {
    //     console.log("parsing failed", ex);
    //   });
    // }
    try {

        
         const res = await fetch("http://www.colourlovers.com/api/colors/new");

            console.log(res);
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