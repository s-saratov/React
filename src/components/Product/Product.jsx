import "./styles.css";

function Product({ productID, productName = "Unknown", productPrice, productImg }) {
  return (
    <div className="product-card-wrapper">
      <img src={productImg} className="product-img" alt="Product image" />
      <h3>{productName}</h3>
      {/* Пример тернарного оператора для скрытия элемента div, если цена не была передана */}
      {/* {productPrice !== undefined ? <div>Price: {productPrice} Euro</div> : null} */}
      {/* Пример использования оператора условного рендеринга - %% */}
      {productPrice !== undefined && <div>Price: {productPrice} Euro</div>}
    </div>
  );
}

export default Product;