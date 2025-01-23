import "./styles.css";

function Product({ productID, productName, productPrice, productImg }) {
  return (
    <div className="product-card-wrapper" key={productID}>
      <img src={productImg} className="product-img" alt="Product image" />
      <h3>{productName}</h3>
      <div>Price: {productPrice} Euro</div>
    </div>
  );
}

export default Product;