export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI = 'https://api.myjson.com/bins/i846g'

//'https://api.myjson.com/bins/7g64o'; //with all 20
//'https://api.myjson.com/bins/188rbc'; //dont delete

// 'https://react-shopping-cart-67954.firebaseio.com/products.json';
//'https://github.com/sonusandeep/React_shopping_demo/blob/master/products.json';
//   // 'https://github.com/sonusandeep/repo2/blob/master/products.json';
// export const productsAPI = "localhost:3000/products.json";
