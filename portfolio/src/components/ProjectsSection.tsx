import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {id: 1, title: "MoHeaven", description: "Search Your Favorite Movies Here!", image: '/projects/project1.png', tags: ["React", "TailwindCSS"], demoUrl: "#", githubUrl: "#"},
    {id: 2, title: "Awwwards Demo", description: "Refine Gaming", image: '/projects/project2.png', tags: ["React", "TailwindCSS"], demoUrl: "#", githubUrl: "#"},
    {id: 3, title: "AiFit", description: "Create You Personal Health Plan With AI Coach", image: '/projects/project3.png', tags: ["React", "TailwindCSS"], demoUrl: "#", githubUrl: "#"},
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured <span className='text-primary'> Projects</span>
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                The description of my projects
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key) => (
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='size-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>

                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag, key) => (
                                    <span key={key} className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/30'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-1'>
                                {project.title}
                            </h3>

                            <p className='text-muted-foreground text-xm mb-4'>
                                {project.description}
                            </p>

                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <a target='_blank' href='#' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection