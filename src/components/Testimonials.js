import React from 'react'
import anisha from '../img/avatar-anisha.png'
import ali from '../img/avatar-ali.png'
import watts from '../img/avatar-richard.png'

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
            What's Different About Manage?
        </h2>
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                <img className='w-16 -mt-14' src={anisha} alt='profile-img'/>
                <h5 className='text-lg font-bold'>Anisha Li</h5>
                <p className='text-sm text-darkGrayishBlue'>
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                </p>
            </div>
            
            <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                <img className='w-16 -mt-14' src={ali} alt='profile-img'/>
                <h5 className='text-lg font-bold'>Ali Bravo</h5>
                <p className='text-sm text-darkGrayishBlue'>
                    “We have been able to cancel so many other subscriptions since
                     Manage. There is no more cross-channel confusion and
                    everyone is much more focused.”
                </p>
            </div>
            
            <div className='hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                <img className='w-16 -mt-14' src={watts} alt='profile-img'/>
                <h5 className='text-lg font-bold'>Richard Watts</h5>
                <p className='text-sm text-darkGrayishBlue'>
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                </p>
            </div>
        </div>

        <div className='my-16'>
            <button>
            <a href='#' className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
