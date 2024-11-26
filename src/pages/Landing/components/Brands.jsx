// 

import { cosmopolitan, elle2, forbes2, goop, oprah, people, vogue2, womenshealth } from "../../../assets";

const Brands = () => {
  const logos = [
    { name: "Forbes", src: forbes2, alt: "Forbes Logo" },
    { name: "Oprah", src: oprah, alt: "The Oprah Magazine Logo" },
    { name: "Cosmopolitan", src: cosmopolitan, alt: "Cosmopolitan Logo" },
    { name: "Women's Health", src: womenshealth, alt: "Women's Health Logo" },
    { name: "Vogue", src: vogue2, alt: "Vogue Logo" },
    { name: "Goop", src: goop, alt: "Goop Logo" },
    { name: "Elle", src: elle2, alt: "Elle Logo" },
    { name: "People", src: people, alt: "People Logo" },
  ];

  return (
    <section className="w-full py-8 border-t border-b border-black">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-black uppercase whitespace-nowrap mr-12">As seen in</span>
          <div className="flex-1 flex justify-between items-center">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                className="h-5 object-contain grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;