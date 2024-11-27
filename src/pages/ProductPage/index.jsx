import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import products from '../../components/Products';


const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [priceFilter, setPriceFilter] = useState({ 
    min: 0, 
    max: Infinity // Start with no upper limit
  });
  
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      // Search filter
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      // Price filter  
      product.price >= priceFilter.min && 
      (priceFilter.max === Infinity || product.price <= priceFilter.max) &&
      // Category filter
      (categoryFilter === 'All' || product.category === categoryFilter)
    );
  }, [searchTerm, priceFilter, categoryFilter]);

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-wrap gap-4">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-2 border rounded"
          />

          {/* Price Range Filter */}
          <div className="flex items-center gap-2">
            <label>Price Range:</label>
            <input 
              type="number" 
              placeholder="Min" 
              value={priceFilter.min}
              onChange={(e) => setPriceFilter(prev => ({ 
                ...prev, 
                min: parseFloat(e.target.value) || 0 
              }))}
              className="w-20 p-2 border rounded"
            />
            <input 
              type="number" 
              placeholder="Max" 
              value={priceFilter.max === Infinity ? '' : priceFilter.max} // Display blank for Infinity
              onChange={(e) => setPriceFilter(prev => ({ 
                ...prev, 
                max: parseFloat(e.target.value) || Infinity // Set to Infinity if blank
              }))}
              className="w-20 p-2 border rounded"
            />
          </div>

          {/* Category Filter */}
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border rounded"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-[#EABC5E]">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}/lb</p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <Link 
                  to={`/product-details/${product.id}`} 
                  className="bg-[#244521] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-block"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No products found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
