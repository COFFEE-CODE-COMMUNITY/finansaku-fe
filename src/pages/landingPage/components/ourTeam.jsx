import React from 'react'
import Image from '../../assets/person-img.svg'
import EllipseBottom from '../../assets/Ellipse-bottom.svg'
import EllipsetTop2 from '../../assets/EllipseTop2.svg'

function OurTeam() {
  const member = [
    { name: "Maudina Apriliani", role: "Frontend" },
    { name: "Rifky Al Mukmin R", role: "Frontend" },
    { name: "Ulfi Rohadatul W", role: "UI/UX" },
    { name: "Serena Luthfiana M", role: "Backend" },
    { name: "Hanna Hanifa M", role: "Backend" },
  ]

  return (
    <div id='OurTeam' className='relative h-screen overflow-hidden'>
      <img src={EllipseBottom} alt="Elemen Bottom" className='absolute top-0 right-0 h-[81vh] w-auto z-0' />
      <img src={EllipsetTop2} alt="Elemen Top" className='absolute top-36 left-0 h-[81vh] w-auto z-0' />

      <div className='relative z-20 flex flex-col items-center pt-16 pb-20'>
        <h1 className='text-5xl font-bold text-white mb-9'>Our Team</h1>

        <div className='flex flex-wrap justify-center gap-x-25 gap-y-5 max-w-[50rem]'>
          {member.map((person, index) => (
            <div key={index} className='w-[200px] rounded-xl overflow-hidden bg-white shadow-md'>
              <img src={Image} alt="Image Member" className='w-full h-auto object-cover' />
              <div className='p-4 text-center'>
                <p className='text-black font-bold mb-1'>{person.name}</p>
                <p className='text-sm text-black'>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
