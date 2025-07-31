import gardener from "../assets/gardener.png";

const coreValues = [
  {
    title: "Value Creation",
    description:
      "We deliberately analyse the value chain of the investment to identify gaps and provide smart solutions that strengthen the market system for both investors and beneficiaries.",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Economic Growth",
    description:
      "We explore every viable avenue within investments to fuel local economies, boosting services and opportunities within our business locations.",
    icon: "fa-solid fa-sack-dollar",
  },
  {
    title: "Integrity",
    description:
      "We fulfill every obligation with precision and protect all sensitive client information with unwavering discipline.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Fair Trade",
    description:
      "Objectivity, consistency, and fairness are non-negotiable in all client and stakeholder engagements throughout transactions.",
    icon: "fa-solid fa-scale-balanced",
  },
  {
    title: "Sustainability",
    description:
      "Every solution we offer is built to last — protecting current needs without screwing over future generations.",
    icon: "fa-solid fa-leaf",
  },
  {
    title: "Do No Harm",
    description:
      "If a project threatens the environment and we can't offer a safer alternative, we walk away. No compromise.",
    icon: "fa-solid fa-ban",
  },
  {
    title: "Innovation",
    description:
      "We deliver creative, strategic, and tech-savvy solutions that make a measurable impact.",
    icon: "fa-solid fa-lightbulb",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6 lg:px-40 font-['Roboto']">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Textual Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-extrabold mb-6">
            <span className="border-b-4 border-[#1fa12e] pb-2 inline-block">People</span> Choose Us
          </h2>
          <p className="text-gray-700 text-[19px] lg:text-[15px] opacity-80 mb-10">
            We've built a reputation for excellence, reliability, and customer satisfaction. Our team delivers decades of experience, tailored strategies, and award-winning service into every project.
          </p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="text-green-600 text-4xl">
                  <i className={val.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[#1fa12e]">{val.title}</h3>
                  <p className="text-sm text-gray-600">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img src={gardener} alt="Gardener" className="w-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
