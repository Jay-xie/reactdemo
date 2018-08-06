import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    // dispatch({
    //   type: 'products/delete',
    //   payload: id,
    // });
    debugger;
    dispatch({
      type: 'detailed/delete',
    });
  }
  function show(){
    alert("success");
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} onDelete2={show}/>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
