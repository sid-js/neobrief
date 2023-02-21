import React from 'react'
import { Interweave } from 'interweave';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Background from '../../public/bg.jpg'
import { polyfill } from 'interweave-ssr';

polyfill();

const BriefPage = () => {

    const Brief = 
        {
          title: "Johnson's Pet Store",
          description: "Our current website is outdated and does not reflect the high-quality products and services that we offer. We want a new website that is user-friendly and showcases our products and services.",
          industry: "Retail Business",
          content:`<h1>Johnson's Pet Store - Website Redesign</h1>

          <h2>Objective:</h2>
          <p>Johnson's Pet Store is a family-owned pet store that has been in business for over 25 years. Our current website is outdated and does not reflect the high-quality products and services that we offer. We want a new website that is user-friendly, visually appealing, and showcases our products and services. Our primary objective is to increase online sales and attract more customers to our physical store.</p>
          
          <h2>Target Audience:</h2>
          <p>Our target audience is pet owners who are looking for high-quality products and services for their pets. They are likely to be aged between 25-55 and are willing to pay a premium for high-quality products and services for their pets.</p>
          
          <h2>Design Requirements:</h2>
          <ol>
            <li>The new website should be easy to navigate and use, with a clean and modern design.</li>
            <li>The website should be optimized for mobile devices and should have a responsive design.</li>
            <li>The website should have an online store that is easy to use and allows customers to browse and purchase products easily.</li>
            <li>The website should have a section for pet care tips and advice.</li>
            <li>The website should have a contact form and a live chat feature to allow customers to get in touch easily.</li>
            <li>The website should have a section for customer reviews and testimonials.</li>
          </ol>
          
          <h2>Content Requirements:</h2>
          <ol>
            <li>The website should have high-quality images of our products and store.</li>
            <li>The website should have clear and concise product descriptions.</li>
            <li>The website should have detailed information about our services, including grooming, boarding, and training.</li>
            <li>The website should have an About Us page that provides information about our history and values.</li>
            <li>The website should have a blog section where we can post pet care tips and advice.</li>
          </ol>
          `
        }

  return (
    <main className="px-6 lg:px-32 py-2 font-urbanist overflow-hidden relative">

      <Image src={Background} fill className='object-cover -z-50' />

      <Navbar/>
      <div className='px-48 py-14 w-full flex flex-row justify-center items-start'>
        <article className="prose font-urbanist p-8 bg-white max-w-max drop-shadow-lg rounded-lg">
            <Interweave content={Brief.content}/>
        </article>
    </div>
    </main>
    
  )
}

export default BriefPage