import React from 'react' 
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, GoogleCircleFilled, GithubFilled, AppleFilled, AndroidFilled } from '@ant-design/icons'
const Footer = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-2">
        <div className="row">
          <div className="grid grid-cols-2 gap-8">
            {/* Left */}
            <div className='row'>

              <div className="grid grid-cols-4">
                <div>
                  <h4>Company Info</h4>
                  <ul className=''>

                    <li>About</li>
                    <li>Social Responsibility</li>
                    <li>Affiliate</li>
                    <li>Fashion Blogger</li>
                  </ul>
                </div>
                <div>
                  <h4>Company Info</h4>
                  <ul>

                    <li>About</li>
                    <li>Social Responsibility</li>
                    <li>Affiliate</li>
                    <li>Fashion Blogger</li>
                  </ul>
                </div>
                <div>
                  <h4>Company Info</h4>
                  <ul>

                    <li>About</li>
                    <li>Social Responsibility</li>
                    <li>Affiliate</li>
                    <li>Fashion Blogger</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="row">
              <div className="flex justify-between">
                <div>
                  <h3>SOCIALS</h3>
                  <ul className='flex gap-2'>
                    <li><FacebookFilled /></li>
                    <li><TwitterCircleFilled /></li>
                    <li><InstagramFilled /></li>
                    <li><GoogleCircleFilled /></li>
                    <li><GithubFilled /></li>
                  </ul>
                </div>
                <div>
                  <h3>PLATFORM</h3>
                  <ul className='flex gap-2'>
                    <li><AndroidFilled /></li>
                    <li><AppleFilled /></li>
                  </ul>
                </div>
              </div>

              <div>
                <label htmlFor="">SIGN UP</label><br />
                <input type="text" className='text-gray p-2 border-2 border-gray-500 w-lg ' placeholder='Your email' /> <button className='btn p-2 bg-black text-white'>SUBSCRIBE</button>
                <p>By clicking the SUBSCRIBE button, you are agreeing to our <span>Privacy & Cookie Policy</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer