import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState ={
    products : [],
    loading : false ,
    error : ""
}

export const fetchProduct = createAsyncThunk('product/all', async() =>{
    try{
        const repsonse = await axios.get(`https://fakestoreapi.com/products`)
        return repsonse.data
    } catch(error){
        console.log(error);
        return error.repsonse
    }
})



const productSlice = createSlice({
    name : 'productsall',
    initialState,
    reducers: {
        addProductStock : (state, action)=>{
            state.products[action.payload.id - 1].item.rating.count = action.payload.datacrement
        },
        addtoChart : (state, action) => {
            state.products[action.payload.id - 1].cart += action.payload.cart
        },
        updateCountCart : (state, action) =>{
            state.products[action.payload.id -1].cart = action.payload.cart
        },
        chekcoutPorduct : (state, action) =>{
            console.log("mantab jiwa");
            
            action.payload.map((item)=>{
                state.products[item.item.id - 1].item.rating.count -= item.cart;
                state.products[item.item.id - 1].cart  = 0;
                state.products[item.item.id - 1].checkout = item.cart;


                // state.products[item.id -1].item.rating.count = state.products[item.id -1].item.rating.count - item.cart;
                // state.products[item.id -1].cart = 0;
                console.log(item, "item");
            })
        }

    },
    extraReducers(builder){
        builder.addCase(fetchProduct.pending, (state)=>{
            return{...state, loading : true};
        });
        builder
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            if(state.products.length === 0){
                const data = [];
                action.payload.map((item)=>{
                    data.push({item, cart: 0, checkout: 0})
                })
                return {...state, products: data, loading: false}
            } else {
                return {...state, loading : false}
            }
        })
        .addCase(fetchProduct.rejected, (state, action)=>{
            console.log("rejected");
            return {...state, loading: false , error: action.error.message}
        })
    }
})

export const {addProductStock, addtoChart, updateCountCart, chekcoutPorduct} = productSlice.actions
export const getAllProduct = (state) => state.productsall
export default productSlice.reducer