export default function Footer() {
    return (
      <footer className="bg-textcolor text-white py-10">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row sm:justify-center md:justify-around lg:justify-between items-center px-6 space-y-6 md:space-y-0">
          {/* Left Section - Restaurant Name & Type */}
          <div className="text-center md:text-left">
            <p className="font-bold text-xl md:text-xl lg:text-2xl">Perth Retreat</p>
            <p className="text-sm md:text-md lg:text-lg italic">Fast Food Restaurant</p>
            <p className="text-xs lg:text-sm md:w-64 lg:w-full">Serving delicious meals since September 2016</p>
          </div>
  
          {/* Center Section - Navigation Links */}
          <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <a href="/menu" className="link link-hover text-sm md:text-sm lg:text-lg">
              Menu
            </a>
            <a href="/about" className="link link-hover text-sm md:text-sm lg:text-lg">
              About
            </a>
            <a href="/contact" className="link link-hover text-sm md:text-sm lg:text-lg">
              Contact
            </a>
          </nav>
  
          {/* Right Section - Contact & Social Media */}
          <div className="text-center md:text-left">
            <div className="text-sm md:text-md lg:text-md space-y-3">
              <div className="flex items-center justify-center md:justify-start">
              <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 mr-2 fill-current text-white"
               viewBox="0 0 24 24"
             >
               <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
             </svg>
                <p>0141 611 3159</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-12l10 8.107 10-8.107v12h-20z" />
                </svg>
                <p className="md:w-52 lg:w-full">clearbusinessbyadrian@gmail.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <p className="md:w-52 lg:w-full">Stirling Arcade, Stirling, Stirlingshire, FK8 1AX</p>
              </div>
            </div>
  
            {/* Social Media Icons */}
            {/* <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://facebook.com/delishdine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-white hover:text-gray-300"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/delishdine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-white hover:text-gray-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
  {/* <hr className="w-96 text-white mt-4"/> */}
        {/* Copyright */}
        <p className="text-center text-sm mt-6  pt-6">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    );
  }