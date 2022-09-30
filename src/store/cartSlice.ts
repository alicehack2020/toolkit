const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state:any, action:any) {
            state.push(action.payload);
        },
        remove(state:any, action:any) {
            alert("hello")
            return state.filter((item:any) => item._id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
