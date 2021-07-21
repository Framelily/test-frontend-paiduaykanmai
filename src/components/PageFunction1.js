import React from 'react';
import Data from './exam-data.json';

function PageFunction1() {
  const productData = []
  for (let i = 0; i < Data.length; i++) {
    const product = {}
    if (Data[i].is_editable_price == false) {
      product.name = Data[i].name
      product.totalSubProductWeight = 0
      for (let z = 0; z < Data[i].products.length; z++) {
        product.totalSubProductWeight += Data[i].products[z].weight
      }
      productData.push(product);
    }
  }

  return (
    <div>
      <div className="boxcode">
        <div><pre>{JSON.stringify(productData, null, 2) }</pre></div>
      </div>
    </div>
  );
}

export default PageFunction1;