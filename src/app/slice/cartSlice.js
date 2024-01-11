const { createSlice } = require('@reduxjs/toolkit');

const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    // products: [{product:{},quantity:1}],
    products: [],
    count: 0,
    total: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const { product, quantity } = action.payload;
      console.log('action', action.payload);
      const indexProductInCart =
        state.products.length > 0 ? state.products.findIndex((v) => v.product.id === product.id) : -1;

      indexProductInCart !== -1
        ? (state.products[indexProductInCart].quantity += quantity)
        : state.products.push({ product, quantity });

      // if (indexProductInCart !== -1)
      //   state.products[indexProductInCart].quantity
      //     ? (state.products[indexProductInCart].quantity += quantity)
      //     : (state.products[indexProductInCart].quantity = quantity);
      // else state.products.push({ product, quantity });

      autoMathCart(state);
    },
  },
});

const autoMathCart = (state) => {
  const { a, b } = state.products.reduce(
    (count, v) => ({
      a: count.a + v.quantity,
      b: count.b + v.quantity * v.product.price,
    }),
    { a: 0, b: 0 },
  );

  state.count = a;
  state.total = b;
  return {
    ...state,
    count: a,
    total: b,
  };
};
const cartsReducer = cartsSlice.reducer;

// export action
export const cartsAction = cartsSlice.actions;
// eport default reducer
export default cartsReducer;
