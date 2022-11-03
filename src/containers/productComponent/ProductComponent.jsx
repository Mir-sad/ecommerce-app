import "./productComponent.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);


    const renderList = products.map((product)=>{
        const {id, title, image, price, category} = product;
        return(
            <div className="product" key={id}>
                <Link to={`/product/${id}`}>
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <div className="content">
                            <div className="title">{title}</div>
                            <div className="price"> $ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
        })
  return (
    <>
        {renderList}
    </>
  )
}

export default ProductComponent