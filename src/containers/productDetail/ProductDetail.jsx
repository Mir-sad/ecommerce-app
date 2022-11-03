import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../../redux/actions/productAction";
import "./productDetail.scss";


const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product
    const {productId} = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
            console.log("Err", err);
        });

        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    },[productId])
  return (
    <div className="detail">
        {Object.keys(product).length === 0 ? (
            <div>... Loading</div>
        ) : (
            <div className="product-detail">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="and">
                    </div>
                    <h2>AND</h2>
                    <div className="h2">
                    </div>
                    
               
                <div className="details">
                    <div className="title"> 
                    <h1>{title}</h1>
                    </div>
                    <div className="price"><p>${price}</p></div>
                    <div className="category"><h3>{category}</h3></div>
                    <div className="desc">{description}</div>
                    <button>Add to Cart</button>
                </div>
            </div>
           
        )}
    </div>
  )
}

export default ProductDetail