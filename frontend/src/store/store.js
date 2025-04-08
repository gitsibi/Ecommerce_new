import { configureStore } from '@reduxjs/toolkit';

const initialUserState = {
    email: '',
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});


// dispatch({
//   type: 'SET_EMAIL',
//   payload: 'sibishree@example.com'
// });


// Example 1: When action is SET_EMAIL
// action = {
//   type: 'SET_EMAIL',
//   payload: 'sibishree@example.com'
// }
// This matches case 'SET_EMAIL', so the reducer returns


// {
//   email: 'sibishree@example.com'
// }

// Example 2: When action is UNKNOWN_ACTION

// action = {
//   type: 'UNKNOWN_ACTION',
//   payload: 'something'
// }
// This doesn't match any case, so the default part runs


// return state;

// {
//   email: ''
// } // returns the current state
