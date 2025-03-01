import { Product } from '@prisma/client';

const groupByCollection = (selectedProducts) => {
  const map = new Map();
  const groupedProducts: Product[][] = [];

  for (let i = 0, j = 0; i < selectedProducts.length; i++) {
    const product = selectedProducts[i];

    if (!map.has(product.model)) {
      map.set(product.model, j++);

      groupedProducts.push([product]);
    } else {
      console.log(Array.from(map));
      console.log(map.get(product.model));
      groupedProducts[map.get(product.model)].push(product);
    }
  }

  return groupedProducts;
};

export default groupByCollection;
