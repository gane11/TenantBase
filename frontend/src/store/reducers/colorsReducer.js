import merge from 'lodash/merge';
export const LOAD_COLORS = 'LOAD_COLORS';

export default function reducer(state = {}, action) {
    switch(action.type) {

        case LOAD_COLORS: {
            return merge({}, state, action.colors);
        }

        default: 
            return state;
    };
};

