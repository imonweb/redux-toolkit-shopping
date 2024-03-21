import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  data: []
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  }
})

export const {} = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState){
    const data = await fetch('https://fakestoreapi.com/products')
    const result =  data.json()
  }
}