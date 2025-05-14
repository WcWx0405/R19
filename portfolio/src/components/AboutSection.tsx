import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Self Intro In Short like a title of current position</h3>

            <p className='text-muted-foreground'>
              Experience we had
            </p>

            <p className='text-muted-foreground'>
              Something We Do To Impress Others, something we already work on to make us looks different
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>

              {/* Download CV Here */}
              <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                Download CV
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='size-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>3 Soft Skills</h4>
                  <p className='text-muted-foreground'>Short Description of It</p>
                </div>
              </div>
            </div>

           <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='size-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>3 Soft Skills</h4>
                  <p className='text-muted-foreground'>Another Responsibilities</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='size-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>3 Soft Skills</h4>
                  <p className='text-muted-foreground'>Another Responsibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection