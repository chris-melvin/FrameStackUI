export const ImageGrid = () => {
  const images = [
    {
      title: "Burger",
      src: "https://images.unsplash.com/photo-1491960693564-421771d727d6?q=80&w=2863&auto=format&fit=crop",
    },
    {
      title: "Fries",
      src: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=2787&auto=format&fit=crop",
    },
    {
      title: "Steak",
      src: "https://images.unsplash.com/photo-1683315445782-48b2459c234d?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Blueberry",
      src: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=2938&auto=format&fit=crop",
    },
    {
      title: "Pizza",
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Cupcake",
      src: "https://images.unsplash.com/photo-1426869884541-df7117556757?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto grid grid-cols-1 @md:grid-cols-3 gap-5 p-4 @md:p-0">
      {/* First tall image */}
      <div className="relative h-[200px] @md:h-[400px] group overflow-hidden rounded-lg bg-gray-600">
        <img
          src={images[0].src}
          alt={images[0].title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {images[0].title}
        </a>
      </div>

      {/* Second tall image */}
      <div className="relative h-[200px] @md:h-[400px] group overflow-hidden rounded-lg bg-sky-500">
        <img
          src={images[1].src}
          alt={images[1].title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {images[1].title}
        </a>
      </div>

      {/* Third column split images */}
      <div className="space-y-5">
        {[images[2], images[3]].map((image, index) => (
          <div
            key={index}
            className="relative h-[200px] group overflow-hidden rounded-lg bg-green-500"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="#"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {image.title}
            </a>
          </div>
        ))}
      </div>

      {/* Bottom wide image */}
      <div className="relative h-[200px] @md:col-span-2 group overflow-hidden rounded-lg bg-red-500">
        <img
          src={images[4].src}
          alt={images[4].title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {images[4].title}
        </a>
      </div>

      {/* Bottom right image */}
      <div className="relative h-[200px] group overflow-hidden rounded-lg bg-purple-600">
        <img
          src={images[5].src}
          alt={images[5].title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {images[5].title}
        </a>
      </div>
    </div>
  );
};

export const ImageGridCode = `
   <div className="max-w-[1000px] mx-auto grid grid-cols-1 @md:grid-cols-3 gap-5 p-4 @md:p-0">
      {/* First tall image */}
      <div className="relative h-[200px] @md:h-[400px] group overflow-hidden rounded-lg bg-gray-600">
        <img 
          src="https://images.unsplash.com/photo-1491960693564-421771d727d6?q=80&w=2863&auto=format&fit=crop"
          alt="Burger"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a
          href="#"  
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Burger
        </a>
      </div>

      {/* Second tall image */}
      <div className="relative h-[200px] @md:h-[400px] group overflow-hidden rounded-lg bg-sky-500">
        <img 
          src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=2787&auto=format&fit=crop"
          alt="Fries"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a 
          href="#" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Fries
        </a>
      </div>

      {/* Third column split images */}
      <div className="space-y-5">
        {[images[2], images[3]].map((image, index) => (
          <div
            key={index}
            className="relative h-[200px] group overflow-hidden rounded-lg bg-green-500"
          >
            <img
              src="https://images.unsplash.com/photo-1683315445782-48b2459c234d?q=80&w=2940&auto=format&fit=crop"
              alt="Steak"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a 
              href="#" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Steak
            </a>
          </div>
        ))}
      </div>

      {/* Bottom wide image */}
      <div className="relative h-[200px] @md:col-span-2 group overflow-hidden rounded-lg bg-red-500">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop"
          alt="Pizza"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a 
          href="#" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Pizza
        </a>
      </div>

      {/* Bottom right image */}
      <div className="relative h-[200px] group overflow-hidden rounded-lg bg-purple-600">
        <img 
          src="https://images.unsplash.com/photo-1426869884541-df7117556757?q=80&w=2940&auto=format&fit=crop"
          alt="Cupcake"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <a 
          href="#" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#f3c776] text-[#333c09] px-5 py-2.5 rounded font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Cupcake
        </a>
      </div>
    </div>

`;
