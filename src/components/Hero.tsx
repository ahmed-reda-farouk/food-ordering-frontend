import hero from "../assets/t2.jpg"; // Adjust path as needed

const Right = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">Food</span>
        </h1>
        <p className="text-lg mb-6">
          Food is the missing piece that makes every day complete<br />A simple yet delicious joy in life
        </p>
        <div className="flex flex-col md:flex-row gap-4 text-sm justify-center">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex justify-center bg-white uppercase items-center gap-2 text-primary px-4 py-2 rounded-full border border-primary">
            Learn more
            <Right />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;