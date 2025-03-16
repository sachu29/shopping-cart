import React from 'react';
import Image from 'next/image';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, GoogleCircleFilled, GithubFilled, AppleFilled, AndroidFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="container mx-auto my-8 p-4 text-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className='text-base font-medium mb-3 text-black'>Company Info</h4>
              <ul className='text-sm space-y-1'>
                <li>About</li>
                <li>Social Responsibility</li>
                <li>Affiliate</li>
                <li>Fashion Blogger</li>
              </ul>
            </div>
            <div>
              <h4 className='text-base font-medium mb-3 text-black'>Help & Support</h4>
              <ul className='text-sm space-y-1'>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>How to Order</li>
                <li>How to Track</li>
                <li>Size Chart</li>
              </ul>
            </div>
            <div>
              <h4 className='text-base font-medium mb-3 text-black'>Customer Info</h4>
              <ul className='text-sm space-y-1'>
                <li>Contact Us</li>
                <li>Payment</li>
                <li>Bonus Point</li>
                <li>Notices</li>
              </ul>
            </div>
          </div>

          <div className='mt-17 text-center md:text-left'>
            <p className='text-xs font-medium mb-4'>&copy; 2010 - 2022 All Rights Reserved</p>
            <ul className='flex flex-wrap justify-center md:justify-start gap-2 text-sm font-medium underline'>
              <li>Privacy Center |</li>
              <li>Privacy & Cookie Policy |</li>
              <li>Manage Cookies</li>
            </ul>
            <ul className='flex flex-wrap justify-center md:justify-start gap-2 text-sm font-medium underline mt-2'>
              <li>Terms & Conditions |</li>
              <li>Copyright Notice |</li>
              <li>Imprint</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h3 className='text-sm font-medium mb-3 text-black'>SOCIALS</h3>
              <ul className='flex gap-3 text-black text-xl'>
                <li><FacebookFilled /></li>
                <li><TwitterCircleFilled /></li>
                <li><InstagramFilled /></li>
                <li><GoogleCircleFilled /></li>
                <li><GithubFilled /></li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-medium mb-3 text-black'>PLATFORM</h3>
              <ul className='flex gap-3 text-black text-xl'>
                <li><AndroidFilled /></li>
                <li><AppleFilled /></li>
              </ul>
            </div>
          </div>

          <div className='mb-8'>
            <label className='text-sm font-medium block mb-2'>SIGN UP</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" className='p-2 border border-gray-500 w-full sm:w-auto' placeholder='Your email' />
              <button className='p-2 bg-black text-white w-full sm:w-auto'>SUBSCRIBE</button>
            </div>
            <p className='text-xs mt-2'>By clicking the SUBSCRIBE button, you are agreeing to our <span className='underline text-blue-600'>Privacy & Cookie Policy</span></p>
          </div>

          <div className='mt-8'>
            <h4 className='mb-4 text-sm font-bold text-black'>WE ACCEPT</h4>
            <div className='grid grid-cols-4 sm:grid-cols-8 gap-2'>
              <Image src='/images/Master Visa.jpg' alt='master-card' width={60} height={30} />
              <Image src='/images/Paypal.jpg' alt='paypal' width={60} height={30} />
              <Image src='/images/ebay_blue_card.jpg' alt='ebay' width={60} height={30} />
              <Image src='/images/Gpay.jpg' alt='google-pay' width={68} height={30} />
              <Image src='/images/MonoBank.jpeg' alt='monobank' width={60} height={30} />
              <Image src='/images/Discover.png' alt='discover' width={60} height={30} />
              <Image src='/images/WesternUnion.png' alt='western-union' width={60} height={30} />
              <Image src='/images/payoneer.png' alt='payoneer' width={73} height={40} />
              <Image src='/images/Apple pay.jpg' alt='apple-pay' width={60} height={40} />
              <Image src='/images/American express.jpg' alt='american-express' width={60} height={30} />
              <Image src='/images/Amazon Pay.jpg' alt='amazon-pay' width={60} height={30} />
              <Image src='/images/Alipay.jpg' alt='alipay' width={68} height={30} />
              <Image src='/images/Bitpay.jpeg' alt='bitpay' width={60} height={30} />
              <Image src='/images/Bitcoin.jpg' alt='bitcoin' width={60} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
