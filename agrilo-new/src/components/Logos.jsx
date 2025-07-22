const partners = [
  { name: "Logo 1", color: "/2021-12-jmsf1.jpg" },
  { name: "Logo 2", color: "/2021-12-jmsf2.jpg" },
  // { name: "Logo 3", color: "/2021-12-jmsf3.jpg" },
  { name: "Logo 4", color: "/2021-12-jmsf4.jpg" },
  { name: "Logo 5", color: "/2018-05-jmsf5.jpg" },
  { name: "Logo 6", color: "/2018-05-jmsf6.jpg" },
  { name: "Logo 7", color: "/2021-12-jmsf7.jpg" },
  { name: "Logo 8", color: "/2021-12-jmsf8.jpg" },
  { name: "Logo 9", color: "/2021-12-jmsf10.jpg" },
];

export default function LogoGrid() {
  return (
    <section className="bg-white pb-15">
      <h1 className="text-center font-bold text-4xl font-[Poppins] mb-10">Our Patners</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-32 h-20 flex items-center justify-center transition duration-300 hover:filter-none filter grayscale hover:scale-105"
          >
            <img
              src={partner.color}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
