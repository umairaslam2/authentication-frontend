import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
  <div
    className="relative bg-blue-900 text-white text-center py-24"
    style={{
      backgroundImage: "url('https://images.pexels.com/photos/7405392/pexels-photo-7405392.jpeg?auto=compress&cs=tinysrgb&w=600')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "350px", 
      width: "100%", 
    }}
  >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
    <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
      <h2 className="text-4xl font-bold">About Us</h2>
      <p className="mt-2 text-xl">
        Discover the essence of elegance with Mystrical Fragrances.
      </p>
    </div>
  </div>

      <div className="py-16 max-w-6xl mx-auto px-4 lg:px-0 grid lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2">
            <img
              src="https://images.pexels.com/photos/4735906/pexels-photo-4735906.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Luxury Perfume Bottle"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Perfume Collection"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Perfume Ingredients"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-blue-600 uppercase font-semibold text-sm">About Us</h3>
          <h2 className="text-3xl font-bold mt-2">
            Elevate your senses with Mystical Fragrances
          </h2>
          <p className="mt-4 text-gray-600">
            At Mystical Fragrances, we craft captivating scents that transport
            you to a world of elegance and sophistication.
          </p>
          <p className="mt-4 text-gray-600">
            From the finest ingredients to exquisite packaging, our perfumes
            are a blend of artistry and passion.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Exclusive Fragrance Collections
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Artisanally Crafted Scents
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Timeless Elegance
            </li>
          </ul>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className="text-blue-600 uppercase font-semibold text-sm">
            Why Choose Us
          </h3>
          <h2 className="text-3xl font-bold mt-2">
            Discover the Mystical Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:bg-[#0F2456] hover:text-white transition duration-300">
              <div className="text-blue-600 text-4xl mb-4 hover:text-white">
              </div>
              <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
              <p>
                Crafted with the finest ingredients for a luxurious experience.
              </p>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:bg-[#0F2456] hover:text-white transition duration-300">
              <div className="text-blue-600 text-4xl mb-4 hover:text-white">
              </div>
              <h4 className="text-xl font-bold mb-2">Sustainable Ingredients</h4>
              <p>
                Ethical sourcing ensures a product you can feel good about.
              </p>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:bg-[#0F2456] hover:text-white transition duration-300">
              <div className="text-blue-600 text-4xl mb-4 hover:text-white">
              </div>
              <h4 className="text-xl font-bold mb-2">Unforgettable Scents</h4>
              <p>
                Scents that captivate your senses and leave a lasting impression.
              </p>
            </div>
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 hover:bg-[#0F2456] hover:text-white transition duration-300">
              <div className="text-blue-600 text-4xl mb-4 hover:text-white">
              </div>
              <h4 className="text-xl font-bold mb-2">Elegant Design</h4>
              <p>
                Beautifully crafted bottles that complement your style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
