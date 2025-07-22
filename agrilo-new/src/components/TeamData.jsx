// // src/teamData.js

// import Robert from "../assets/robert.png";
// import Maria from "../assets/maria.png";
// import David from "../assets/david.png";
// import Queensland from "../assets/queensland.png";
// import Steven from "../assets/steven.png";

// const teamData = [
//   { name: "Robert Smith", role: "Harvester", img: Robert, link: "/team/robert-smith" },
//   { name: "Alena Maria", role: "Planter", img: Maria, link: "/team/alena-maria" },
//   { name: "David Lee", role: "Harvester", img: David, link: "/team/david-lee" },
//   { name: "Erina Lee", role: "Planter", img: Maria, link: "/team/erina-lee" },
//   { name: "Cali Kim", role: "Gardener", img: David, link: "/team/cali-kim" },
//   { name: "Miss Queensland", role: "Gardener", img: Queensland, link: "/team/miss-queensland" },
//   { name: "Tomas Mullar", role: "Harvester", img: Robert, link: "/team/tomas-mullar" },
//   { name: "Mark Steven", role: "Gardener", img: Steven, link: "/team/mark-steven" }
// ];

// export default teamData;
// Import images
import Robert from "../assets/robert.png";
import Maria from "../assets/maria.png";
import David from "../assets/david.png";
import Queensland from "../assets/queensland.png";
import Steven from "../assets/steven.png";

// Role descriptions
const roleDescriptions = {
  Harvester: "As a dedicated Harvester, [Name] plays a vital role in ensuring the efficient collection of crops from the fields. Their expertise involves meticulous attention to detail, precision in timing, and a deep understanding of crop maturity. They work tirelessly to maximize yield while maintaining the highest quality standards, often assessing the ripeness and readiness of produce to harvest at the optimal moment. Their experience allows them to navigate various weather conditions and field complexities, ensuring that each harvest is done swiftly, safely, and sustainably. Beyond just gathering crops, they are responsible for sorting, packaging, and sometimes even preparing the produce for transportation, all while adhering to safety and quality protocols. Their dedication directly impacts the farm's productivity, profitability, and reputation in the market, making them an indispensable part of the agricultural team.",
  
  Planter: "Our skilled Planter, [Name], brings a wealth of knowledge and precision to the planting process. They are responsible for selecting the right seeds, preparing the soil, and ensuring that each seed is planted at the correct depth and spacing to promote healthy growth. With an eye for detail and a methodical approach, they meticulously follow planting schedules that align with seasonal cycles and weather forecasts. Their work involves not only planting but also inspecting the soil conditions, managing fertilizers, and implementing pest control measures to create an ideal environment for germination. Their dedication extends to monitoring the growth stages of plants, adjusting care routines as necessary, and ensuring that every seedling develops into a healthy plant. They take pride in their work, understanding that proper planting techniques are the foundation for a successful harvest. Their expertise helps optimize resource use, reduce waste, and ensure the sustainability of farming practices, ultimately contributing to a bountiful and high-quality crop yield.",
  
  Gardener: "The experienced Gardener, [Name], is passionate about cultivating lush, vibrant gardens that enhance the farm's aesthetic appeal and productivity. Their knowledge encompasses a broad range of horticultural practices, including soil enrichment, pest management, pruning, watering, and crop rotation. They are dedicated to creating an environment where plants can thrive, which involves understanding the specific needs of each species, managing pests organically, and maintaining soil health through composting and fertilization. Their day-to-day responsibilities include planting new beds, nurturing young plants, pruning overgrown branches, and removing weeds to prevent competition for nutrients. They also implement sustainable practices to conserve water and reduce chemical use, aligning with eco-friendly farming principles. Their keen eye for detail and patience ensures that every garden bed looks pristine and is optimized for maximum growth. Beyond their technical skills, they foster a deep respect for nature and a commitment to biodiversity, ensuring that the farm remains a healthy, balanced ecosystem. Their work not only beautifies the farm but also supports the ecological sustainability of the entire operation."
};
const teamData = [
  {
    name: "Robert Smith",
    role: "Harvester",
    img: Robert,
    link: "/team/robert-smith",
    description: roleDescriptions["Harvester"].replace("[Name]", "Robert Smith")
  },
  {
    name: "Alena Maria",
    role: "Planter",
    img: Maria,
    link: "/team/alena-maria",
    description: roleDescriptions["Planter"].replace("[Name]", "Alena Maria")
  },
  {
    name: "David Lee",
    role: "Harvester",
    img: David,
    link: "/team/david-lee",
    description: roleDescriptions["Harvester"].replace("[Name]", "David Lee")
  },
  {
    name: "Erina Lee",
    role: "Planter",
    img: Maria,
    link: "/team/erina-lee",
    description: roleDescriptions["Planter"].replace("[Name]", "Erina Lee")
  },
  {
    name: "Cali Kim",
    role: "Gardener",
    img: David,
    link: "/team/cali-kim",
    description: roleDescriptions["Gardener"].replace("[Name]", "Cali Kim")
  },
  {
    name: "Miss Queensland",
    role: "Gardener",
    img: Queensland,
    link: "/team/miss-queensland",
    description: roleDescriptions["Gardener"].replace("[Name]", "Miss Queensland")
  },
  {
    name: "Tomas Mullar",
    role: "Harvester",
    img: Robert,
    link: "/team/tomas-mullar",
    description: roleDescriptions["Harvester"].replace("[Name]", "Tomas Mullar")
  },
  {
    name: "Mark Steven",
    role: "Gardener",
    img: Steven,
    link: "/team/mark-steven",
    description: roleDescriptions["Gardener"].replace("[Name]", "Mark Steven")
  }
];

export default teamData;