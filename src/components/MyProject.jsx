import React from 'react';

const MyProject = () => {
    const projects = [
        {
            id: 1,
            title: "Employee MS",
            category: "MERN Stack",
            techStack: "React + Node + MySQL",
            image: "../assets/employee.png", // Update with your actual image paths
            githubLink: "https://github.com/Abdullahi-Bashir/"
        },
        {
            id: 2,
            title: "Blog App",
            category: "MERN Stack",
            techStack: "React + Node + MySQL",
            image: "../assets/blog.png",
            githubLink: "https://github.com/Abdullahi-Bashir/"
        },
        {
            id: 3,
            title: "Project Management",
            category: "MERN Stack",
            techStack: "React + Node + MySQL",
            image: "../assets/project.png",
            githubLink: "https://github.com/Abdullahi-Bashir/"
        },
    ];

    return (
        <div className="bg-black text-white py-20" id="projects">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-[#1f2937] rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-[200px] overflow-hidden">
                                {/* Tech Stack Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-[#00ffff] text-black px-3 py-1 rounded text-sm font-medium">
                                        {project.techStack}
                                    </span>
                                </div>
                                
                                {/* Project Image */}
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.category}
                                </p>
                                
                                {/* GitHub Button */}
                                <a 
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#4ade80] text-black px-6 py-2 rounded-md font-medium 
                                             hover:bg-opacity-90 transition-all duration-300"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProject;
