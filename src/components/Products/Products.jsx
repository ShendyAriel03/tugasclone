import './Products.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const Products = ({title,price,image}) => {
   
    return(
    <>
    <div className="Products">
        <img src={image}
        alt={title} />
        <div className="ProductInfo">
            <p>
                {title}
            </p>
            <div className="ProductGroup">
                <p className="ProductPrice">
                    <small>$.</small>
                    <strong>{price}</strong>
                </p>
                <div className="ProductRating">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarHalfIcon/>
                </div>
            </div>
        </div>
        <button>Add To Cart</button>
    </div>
    
    
    </>
)
}
export default Products