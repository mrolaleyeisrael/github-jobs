import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image'
import { CiClock2 } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import samplePicture from '@/public/samplePicture.webp'
import { FaGlobeAfrica } from "react-icons/fa";




const DetailsPage = () => {
  return (
    <div className=' pt-4 md:pt-10 grid grid-cols-1 md:grid-cols-4 pb-10 '>

      <div className=' md:w-[300px] '>

        <div className=' flex items-center gap-2'>
          <FaLongArrowAltLeft className=' inline-block w-5 h-5 text-[#1e86ff] text-2xl' />
          <p className=' text-[#1e86ff] font-medium text-sm '>Back to search</p>
        </div>

        <div>
          <p className=' uppercase font-bold text-sm text-[#B9BDCF] mt-9 mb-4 '>How to apply</p>

          <p className=' font-medium text-sm'>Please email a copy of your resume and online portfolio to  <Link className=' text-[#1e86ff]' href={'mailto:wes@kasisto.com'} >wes@kasisto.com</Link> & CC <Link className=' text-[#1e86ff]' href={'mailto:eric@kasisto.com'} >eric@kasisto.com</Link></p>
        </div>
      </div>

      <div className=' col-span-3'>


        <div>
          <div className=' flex gap-4 items-center'>

            <p className=' text-[#334680] font-bold text-2xl font-bold '>Front End Developer</p>
            <p className=' text-[#334680] border border-[#334680] rounded-md px-2 py-[6px] ' >Full time</p>
          </div>

          <div className=' flex gap-[6px] items-center mt-2 '>
            <CiClock2 className='  text-[#b9bdcf] h-5 w-5  ' />
            <p className=' text-[#B9BDCF] text-xs'>5 days ago</p>
          </div>
        </div>
        <div className=' flex items-center gap-4 mt-4'>

          <Image src={samplePicture} alt="sample picture" className=' object-cover h-[60px] w-[60px] rounded-md ' />
          <div >
            <h1 className=' text-[#334680] font-bold text-lg mb-2 '>Kasisto</h1>
            <div className=' flex gap-[6px]  items-center '>
              < FaGlobeAfrica className='  text-[#b9bdcf] h-4 w-4  ' />
              <p className=' text-[#B9BDCF] text-sm '>Job Location</p>
            </div>
          </div>


        </div>

        <div className=' mt-4'>
          <p className=' text-[#334680] font-bold text-lg mb-2 '>Job Description</p>
          <p className=' text-[#334680] font-normal text-sm leading-[150%]  '>

            Lorem ipsum dolor sit
            amet co
            nsectetur adipisicing elit. Quisquam, quod

          </p>
        </div>
        <div className=' font-normal text-[16px] leading-[150%]  ' >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nobis hic a ea voluptatibus nam quidem eaque iste, ipsa atque architecto enim maxime similique quaerat sed corrupti tempore est id omnis sint quisquam. Ducimus maiores molestiae nulla veniam tempora, atque debitis in amet dolorum molestias! Deserunt harum recusandae voluptatem officia voluptatibus iste architecto commodi doloremque, maxime quod dicta velit id debitis corrupti temporibus nostrum itaque at. Corporis necessitatibus quas optio laborum quasi quod similique odio eius perspiciatis harum dicta nulla minima, exercitationem culpa animi modi quam aut natus saepe neque cum expedita laboriosam! Quam eum autem eius sint error illum dignissimos voluptatem minus ratione vero ipsa rerum nobis ab dolores iste, hic maxime quisquam! Adipisci dolorem laborum velit eaque repudiandae provident iusto, illum numquam vero inventore nisi nulla odit libero deserunt accusamus dicta! Corporis necessitatibus voluptate laudantium at itaque illo incidunt alias, dignissimos nulla a harum similique impedit repellendus magnam corrupti expedita ex sint! Laboriosam cum velit dolores est dolor beatae aspernatur obcaecati impedit suscipit voluptate natus vero ipsam fugiat necessitatibus, repellendus iure explicabo quis tenetur repellat iusto sequi vel aliquid magni assumenda? Quam illum ea est? Dignissimos, amet dicta. Quo magni culpa eos officia voluptatum quos sunt rem quisquam aspernatur eaque dolores quae maiores sed ratione error quas recusandae, inventore, laudantium, doloremque delectus quasi deserunt quibusdam molestias. Eius, eligendi! Sapiente esse laboriosam molestias, provident consectetur repudiandae doloremque ut! Expedita asperiores quia quod earum, necessitatibus, architecto commodi, suscipit nisi neque sapiente saepe. Omnis consectetur suscipit aut ratione dolores dolore, eligendi, obcaecati voluptates quia labore iusto temporibus. Vero labore perferendis temporibus dolore totam alias deserunt. Beatae quam doloremque voluptates quos officiis autem voluptatibus voluptatum, error aut ex atque, pariatur officia facilis quod sint asperiores repellendus quidem! Quaerat doloremque aliquid, vitae repellat eaque et laboriosam nemo alias voluptates sapiente! Vel vitae minima aspernatur! Magnam ex recusandae sit eveniet veniam reiciendis perferendis officia magni, error voluptas optio, officiis dolores velit! Laborum illo quaerat, facilis sequi eligendi eaque enim modi doloremque natus, corrupti, soluta unde vel impedit optio at est? Minus nemo harum voluptatibus dolor! Animi temporibus, numquam dolorum, corrupti dolore quisquam culpa magnam ducimus beatae tenetur nemo. Possimus ullam incidunt sapiente, debitis aspernatur officia beatae iusto. Vero necessitatibus, cupiditate sed esse voluptatem tempore neque natus voluptatum hic cum recusandae aspernatur, unde distinctio praesentium iusto! In vel, ipsam ullam odit iusto, temporibus repellat corporis reprehenderit rem, voluptates harum? Cupiditate quas aliquid quae deserunt eveniet sapiente et voluptatum praesentium corporis libero! Voluptatum, possimus earum sint id qui a quia, omnis odio, atque nulla officia? Beatae magnam, quidem laboriosam distinctio delectus facere saepe veritatis quos rerum obcaecati praesentium rem sit, excepturi nostrum ut perspiciatis ab cum quod placeat ea, nulla non iste. Maxime ullam facilis laudantium nesciunt molestias eaque aspernatur repellat expedita nobis culpa reiciendis cupiditate soluta, dolore voluptates totam deserunt. Mollitia, suscipit cumque veniam earum esse commodi ab, totam eaque odit, nihil optio facilis corporis! Necessitatibus, libero! Perspiciatis, ad consequuntur. Repellendus, magni expedita. Maiores nisi perspiciatis voluptatem maxime commodi dolore! In non officia voluptates mollitia?
        </div>
      </div>
    </div>
  )
}

export default DetailsPage