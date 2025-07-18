import React from "react";

const blogPosts = [
  {
    title: "Business Elites Africa Magazine Unveils Africa’s 30 Most Influential Executives of 2023",
    description: "Business Elites Africa Magazine Unveils Africa’s 30 Most Influential Executives of 2023",
    date: "August 10, 2023",
    // extra: { heading: "FATIGATED BETWEEN US" },
    bgColor: "white",
    borderColor: "border-green-100",
    textColor: "black",
    image: "/blog1.jpeg", // Replace with your actual image path
  },
  {
    title: "Floods threaten Nigeria’s rice output",
    description: `Nigeria’s Minister for Agriculture and Rural Development, Audu Ogbeh says the country plans to stop the importation of rice by`,
    date: "August 8, 2023",
    image: "/blog2.png",
  },
  {
    title: "AGRICULTURE: Nigeria, Netherlands’ institution’s partner on crop cultivation techniques",
    description: `Nigeria and the Netherlands’ institutions have signed a memorandum of understanding to enhance the exchange of knowledge for protective vegetable`,
    date: "April 7, 2022",
    image: "/blog3.jpg",
  },
  {
    title: "Nigeria's journey to self-sufficiency in rice production",
    description: `Nigeria in recent times has made moves to attain self-sufficiency in rice production, Richard Ogundele, Founder and CEO JMSF Agribusiness`,
    date: "March 6, 2022",
    image: "/blog4.png",
  },
];

const BlogCard = ({
  title,
  date,
  description,
  extra,
  category,
  link = "#",
  bgColor = "bg-white",
  borderColor = "border-gray-100",
  textColor = "text-gray-800",
  image,
}) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm border ${borderColor} overflow-hidden`}>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        {title && (
          <h3 className={`font-bold text-2xl mb-3`}>{title}</h3>
        )}

        {Array.isArray(description) ? (
          <ul className="mt-2 space-y-1 italic text-green-700">
            {description.map((line, idx) => (
              <li key={idx}>"{line}"</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mb-4">{description}</p>
        )}

        {date && <div className="text-sm text-gray-500 mb-2">{date}</div>}

        {extra && (
          <>
            <h4 className="font-semibold text-green-700 mb-2">
              {extra.heading}
            </h4>
            <p className="text-gray-600">{extra.text}</p>
            {extra.date && (
              <div className="text-sm text-gray-500 mt-2">{extra.date}</div>
            )}
          </>
        )}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={link}
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
