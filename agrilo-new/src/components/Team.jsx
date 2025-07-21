import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF,FaTwitter } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: "Tolu Kuku",
      position: "Project Manager",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      img: "/tolukuku.png" // Placeholder image URL
    },
    {
      name: "Richard Ogundele",
      position: "MD/CEO",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      img: "/richard.png" // Placeholder image URL
    },
    {
      name: "Abisola Grace Ilufoye",
      position: "Business Development and Corporate Communications Manager",
      linkedin: "#",
      facebook: "#",
      twitter: "#", 
      img: "/abisola.jpeg" // Placeholder image URL
    },
    {
      name: "John Lampam",
      position: "Technical Director",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
      img: "/john.png" // Placeholder image URL
    }
  ];

  return (
    <section className="py-16 px-10 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg md:text-lg font-bold text-green-500 mb-8">Our Dedicated Team</h2>
        
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8 font-[Poppins]">Our Leadership</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                    <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-56 h-56 rounded-full mb-4 object-cover border-10 border-white hover:border-green-500 hover:shadow-lg transition duration-600 shadow-sm"
                    />

                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-gray-600 text-sm mb-6 text-center">{member.position}</p>
                  {member.linkedin && (
                    <div className='flex gap-6 text-slate-600'>
                        <a 
                            href={member.linkedin} 
                            className="hover:text-green-500 bg-white transition-colors duration-300 p-4 rounded-full shadow-sm"
                            aria-label={`${member.name} LinkedIn`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a 
                            href={member.facebook} 
                            className=" hover:text-green-500 bg-white transition-colors duration-300 p-4 rounded-full shadow-sm"
                            aria-label={`${member.name} Facebook`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a 
                            href={member.twitter} 
                            className=" hover:text-green-500 bg-white  transition-colors duration-300 p-4 rounded-full shadow-sm"
                            aria-label={`${member.name} LinkedIn`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div
            onMouseEnter={() => console.log('Mouse Entered')}
        >
            <Link 
            to='/leadership'
            className="mt-4 px-8 py-3 bg-white border border-green-500 hover:bg-green-500 hover:text-white font-semibold rounded-full hover:text-white transition-colors duration-300"
            >
                SEE MORE
            </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Team;