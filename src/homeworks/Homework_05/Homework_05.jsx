import { v4 } from "uuid";

import "./styles.css";
import Product from "../../components/Product/Product";
import { products } from "./data";

function Homework05() {
  const productCards = products.map((product) => {
    return (
      <div key={v4()}>
        <Product
          productID={product.id}
          productName={product.name}
          productPrice={product.price}
          productImg={product.image}
        />
      </div>
    );
  });

//   console.log(products);

  return <div className="homework05-wrapper">{productCards}</div>;
}

export default Homework05;