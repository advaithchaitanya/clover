import Button from "@/components/ui/button";
export function Footer() {
  return <footer className="flex w-full flex-col overflow-hidden items-stretch justify-center px-16 max-md:px-5 py-[50px]">
      <div className="w-full rounded-3xl bg-[#9023f0]">
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mx-0 py-0 px-[47px]">
          <div className="min-w-60 text-white w-[500px]">
            <h3 className="text-lg font-semibold">Subscribe to Updates</h3>
            <p className="text-base">
              Stay informed about our latest news and offers.
            </p>
          </div>

          <form className="min-w-60 w-[400px]" onSubmit={e => e.preventDefault()}>
            
            <p className="text-xs text-white mt-3">
              By subscribing you agree to our Privacy Policy.
            </p>
          </form>
        </div>

        <div className="flex w-full gap-10 flex-wrap mt-20">
          {/* Footer Links */}
          <div className="flex-1">
            <img alt="Logo" src="/lovable-uploads/f3858b44-f076-4fa6-8d7f-cdbddd7defff.png" className="w-[180px] h-[130px]" />
          </div>

          {/* Quick Links Column */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="text-sm text-white">
              <ul>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Support Center
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-4">
              Resources
            </h4>
            <nav className="text-sm text-white">
              <ul>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    E-books
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Webinars
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Case Studies
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    White Papers
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Templates
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links Column */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-4">
              Follow Us
            </h4>
            <nav className="text-sm text-white">
              <ul>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    YouTube
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-4">Legal</h4>
            <nav className="text-sm text-white">
              <ul>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Cookies Policy
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Accessibility
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-20">
          <hr className="border-white" />
          <div className="flex justify-between items-center mt-8 text-sm text-white">
            <div className="flex gap-6">
              <span>© 2024 Your Company. All rights reserved.</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Cookie Settings
              </a>
            </div>
            
            <div className="flex gap-3">
              <a href="https://www.instagram.com/advaith_chaitanya" target="_blank" rel="noopener noreferrer" aria-label="Advaith Chaitanya on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/vamshi_krishna_84nxt" target="_blank" rel="noopener noreferrer" aria-label="Vamshi Krishna on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/a.karthik06" target="_blank" rel="noopener noreferrer" aria-label="Karthik on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-20">
          <hr className="border-white" />
          
        </div>
      </div>
    </footer>;
}