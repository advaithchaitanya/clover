import Button from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="flex w-full flex-col overflow-hidden items-stretch justify-center px-16 py-20 max-md:px-5">
      <div className="w-full">
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap">
          <div className="min-w-60 text-white w-[500px]">
            <h3 className="text-lg font-semibold">Subscribe to Updates</h3>
            <p className="text-base">
              Stay informed about our latest news and offers.
            </p>
          </div>

          <form
            className="min-w-60 w-[400px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex w-full gap-4 text-base text-white">
              <input
                type="email"
                placeholder="Your Email Here"
                className="flex-1 min-w-60 border border-white bg-transparent p-3"
                required
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-white mt-3">
              By subscribing you agree to our Privacy Policy.
            </p>
          </form>
        </div>

        <div className="flex w-full gap-10 flex-wrap mt-20">
          {/* Footer Links */}
          <div className="flex-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/54c385378e47473f2330d5b2c6939a222795e20fb94511700b52ecdd030c3c03"
              alt="Logo"
              className="w-[84px]"
            />
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
              {/* Social Icons */}
              <a href="#" aria-label="Facebook">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/db58949b72125426f4751d95c3322c3b4e0b1e31ae5e935131a06a27e13040b3"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/816333894edc3f45a0e698ed7b8dbff084d964cf958ddb0ea95a71e54a68c272"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/b51b02a431cdcc36a4970e132d36f49ece0f28840668e86cd199b0ae2344b01d"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/61964e3988d9dff60ef5a96a28694d80050554ff2bb1c1f718725342457f1b0b"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/41697d42ae148918a512ea77a093ecc77d98ca2636a3d942e9762cae26bd1c7d"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
