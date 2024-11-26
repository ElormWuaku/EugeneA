import { review1 } from "../../../assets";

const Reviews = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">2100+ Reviews For A Reason</h2>
        <div className="flex gap-8">
         
              <img
                src={review1}
                alt= "first review"
                className=" object-cover mb-2"
                height={500}
                width={800}
              />
            </div>
      
        </div>

        <div className="text-center mt-8 mb-8">
          <button className="bg-[#71F0C6] text-black px-14 py-2 text-lg font-thin hover:bg-white transition-colors">
            READ ALL REVIEWS
          </button>
        </div>
  
    </section>
  );
};

export default Reviews