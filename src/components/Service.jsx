import React from 'react';

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web designs.",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side logic and databases.",
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description: "Combining both frontend and backend development skills.",
    },
    {
      id: 5,
      title: "Content Writing",
      description: "Writing content for your business and companies.",
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Promote your business with our digital marketing team.",
    },
  ];

  return (
    <div className='bg-black text-white py-20' id="services">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id} className='bg-[#1f2937] rounded-lg p-6 relative'>
              <span className='absolute top-4 right-4 text-blue-400'>{service.id}</span>
              <h3 className='text-2xl font-semibold text-[#4ade80] mb-4'>{service.title}</h3>
              <p className='text-gray-300 mb-4'>{service.description}</p>
              <button className='text-[#4ade80] hover:underline'>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
