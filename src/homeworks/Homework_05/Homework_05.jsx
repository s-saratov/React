import { v4 } from "uuid";

import "./styles.css";
import Product from "../../components/Product/Product";
import { products } from "./data";

function Homework05() {
  const productCards = products.map((product) => {
    return (
      <Product
      // key - внутреннее свойство элементов, передаётся внутри метода map (через props в компонент передавать не нужно!)
        key={product.id}
        productName={product.name}
        productPrice={product.price}
        productImg={product.image}
      />
    );
  });

  //   console.log(products);

  return <div className="homework05-wrapper">{productCards}</div>;
}

export default Homework05;
