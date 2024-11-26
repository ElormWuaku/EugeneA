import { step1, step2, step3 } from "../../../assets";

const HowToUse = () => {
  const steps = [
    {
      title: "Take a single toothpaste bit.",
      description: "A single Bit is all you need each time.",
      image: step1
    },
    {
      title: "Chew the bit to form a paste.",
      description: "Chew thoroughly to activate the paste.",
      image: step2
    },
    {
      title: "Brush with a wet toothbrush as usual.",
      description: "Use your wet toothbrush for a clean, fresh brush.",
      image: step3
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How To Use</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Step Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-100 object-cover mb-4"
              />

              {/* Step Number and Text */}
              <div className="flex space-x-4 mt-0 py-2">
                {/* Circle with number */}
                <div className="w-6 h-6 flex justify-center items-center border border-gray-500 rounded-full text-base font-semibold">
                  {index + 1}
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-40 py-2 text-lg font-semibold hover:bg-[#71F0C6] hover:text-black transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
