import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: {
            petType: '',
            petAge: '',
            characteristics: [] as string[],
            price: 30,
        }
    },
    reducers: {
        setPetType: (state, action) => {
            state.search.petType = action.payload;
        },
        setPetAge: (state, action) => {
            state.search.petAge = action.payload;
        },
        toggleFoodType: (state, action) => {
            state.search.characteristics = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.search.price = action.payload;
        },
        clearSearch: (state) => {
            state.search.characteristics = [];
            state.search.petType = '';
            state.search.petAge = '';
            state.search.price = 30;
        }
    },
});

const { actions, reducer } = searchSlice;

export const { setPetType, setPetAge, toggleFoodType, setMaxPrice, clearSearch } = actions;

export default reducer;