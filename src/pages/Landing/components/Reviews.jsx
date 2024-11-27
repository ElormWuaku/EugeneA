import { useState } from 'react';
import { Star } from 'lucide-react';

// Sample review data with Ghanaian context
const initialReviews = [
  {
    id: 1,
    name: 'Ama Mensah',
    location: 'Accra, Greater Accra',
    rating: 5,
    date: '15 May, 2024',
    text: 'Guadzefie has made it so easy to get fresh produce directly from farmers in our local communities. The quality of the plantains and yams is exceptional!',
    productBought: 'Fresh Plantains'
  },
  {
    id: 2,
    name: 'Kwame Osei',
    location: 'Kumasi, Ashanti Region',
    rating: 4,
    date: '22 April, 2024',
    text: 'As a chef, I rely on fresh, high-quality ingredients. Guadzefie connects me directly with local farmers, ensuring I get the best cocoa, vegetables, and spices.',
    productBought: 'Organic Cocoa Beans'
  },
  {
    id: 3,
    name: 'Abena Poku',
    location: 'Cape Coast, Central Region',
    rating: 5,
    date: '3 June, 2024',
    text: 'Supporting local farmers has never been easier! I love how Guadzefie helps me buy fresh cassava, kontomire, and other local produce directly from farmers.',
    productBought: 'Mixed Local Vegetables Box'
  }
];

const CustomerReviews = () => {
  const [reviews] = useState(initialReviews);

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          What Our Customers Are Saying
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-gray-600 text-sm">
                  {review.date}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 italic">
              `&quot;`{review.text}`&quot;`
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-green-800">
                  {review.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {review.location}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  Purchased: {review.productBought}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            See More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;