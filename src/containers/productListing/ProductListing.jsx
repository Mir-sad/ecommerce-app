import "./productListing.scss";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductComponent from "../productComponent/ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    },[])
    console.log("Products", products)

  return (
    <div className="listing">
        <ProductComponent />
    </div>
  )
}

export default ProductListing