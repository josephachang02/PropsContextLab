const ProductsDisplay = ({ products, setProducts }) => {
    const handleProductClick = (id) => {
      // Make a new products array (copy the old state)
      const newProducts = products.map((product) => {
        if (product.id === id) {
          // Toggle the 'inCart' property
          return { ...product, inCart: !product.inCart };
        }
        return product;
      });
    
      // Update the state using setProducts
      setProducts(newProducts);
    };
  
    return (
      <div>
        {/* Map through the products array */}
        {products.map((product) => (
          <div key={product.name} onClick={() => handleProductClick(product.id)}>{product.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsDisplay;