import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const style = {
  p: 'text-red-300'
}

const Footer = () => {
  return (
    <footer className='bg-[#111111] w-full text-white flex flex-col pt-10 pb-5 gap-5 md:px-5 lg:justify-center'>
      {/* section 01 */}
      <div className='flex justify-between mb-10'>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] font-mono font-bold'>GIFT CARDS</p>
          <p className='text-[14px] font-mono font-bold'>FIND A STORE</p>
          <p className='text-[14px] font-mono font-bold'>BECOME A MEMEBER</p>
          <p className='text-[14px] font-mono font-bold'>NIKE X NBA</p>
          <p className='text-[14px] font-mono font-bold'>NIKE JOURNAL</p>
          <p className='text-[14px] font-mono font-bold'>SEND US FEEDBACK</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] font-mono font-bold'>GET HELP</p>
          <p className='text-sm text-gray-400'>Order Status</p>
          <p className='text-sm text-gray-400'>Shipping and Delivary</p>
          <p className='text-sm text-gray-400'>Returns</p>
          <p className='text-sm text-gray-400'>Order Cancellation</p>
          <p className='text-sm text-gray-400'>Payment Options</p>
          <p className='text-sm text-gray-400'>Gift Card Balance</p>
          <p className='text-sm text-gray-400'>Contact Us</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] font-mono font-bold'>ABOUT NIKE</p>
          <p className='text-sm text-gray-400'>News</p>
          <p className='text-sm text-gray-400'>Careers</p>
          <p className='text-sm text-gray-400'>Investors</p>
          <p className='text-sm text-gray-400'>Purpose</p>
          <p className='text-sm text-gray-400'>Sustainability</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[14px] font-mono font-bold'>PROMOTIONS & DISCOUNTS</p>
          <p className='text-sm text-gray-400'>Student</p>
          <p className='text-sm text-gray-400'>Military</p>
          <p className='text-sm text-gray-400'>Teacher</p>
          <p className='text-sm text-gray-400'>First Responders & Medical Professionals</p>
          <p className='text-sm text-gray-400'>Birthdy</p>
        </div>
        <div className='flex gap-5'>
          <Twitter className='text-gray-400'/>
          <Facebook className='text-gray-400'/>
          <Youtube className='text-gray-400'/>
          <Instagram className='text-gray-400'/>
        </div>
      </div>
      <div className='flex flex-col gap-2 lg:hidden'>
          <p className='text-[14px] font-mono font-bold'>PROMOTIONS & DISCOUNTS</p>
          <p className='text-sm text-gray-400'>Student</p>
          <p className='text-sm text-gray-400'>Military</p>
          <p className='text-sm text-gray-400'>Teacher</p>
          <p className='text-sm text-gray-400'>First Responders & Medical Professionals</p>
          <p className='text-sm text-gray-400'>Birthdy</p>
      </div>

      {/* section 02 */}
      <div className='flex justify-end gap-5'>
        <p className='text-sm text-gray-400'>Guides</p>
        <p className='text-sm text-gray-400'>Terms of Sale</p>
        <p className='text-sm text-gray-400'>Terms of Use</p>
        <p className='text-sm text-gray-400'>Nike Privacy Ploicy</p>
        <p className='text-sm text-gray-400'>Your Privacy Choices</p>
      </div>

      {/* section 03 */}
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>
          <span className='text-sm font-bold'>United States</span>    
          <span className='text-sm text-gray-400'>©2023 Nike, Inc. All Rights Reserved</span>
        </div>
        <div className='text-sm text-gray-400'>CA Suplly Chanins Act</div>
      </div>
    </footer>
  )
}

export default Footer