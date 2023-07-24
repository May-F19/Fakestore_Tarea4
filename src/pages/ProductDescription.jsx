const ProductDescription = ({product}) => {
	
	return (
		<div>

			<img
			    src={product.image}
			    className="w-24 h-24 object-cover"
			    alt={product.title}
	        />
		    <h1>{product.title}</h1>
		    <span>${product.price}</span>
		    
		</div>
	);
};

export default ProductDescription;