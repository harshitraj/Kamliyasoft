"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-violet-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <Image
            src="/images/l3.png"
            alt="InnoApps Logo"
            width={50}
            height={40}
            className="mb-4 lg:mb-0"
          />
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-violet-300 bg-gray-500 rounded-full px-4 py-4 text-blue-700">
              <FaLinkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-violet-300 bg-gray-500 rounded-full px-4 py-4 text-blue-700">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-violet-300 bg-gray-500 rounded-full px-4 py-4 text-red-700">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-violet-300 bg-gray-500 rounded-full px-4 py-4 text-blue-700">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="hover:text-violet-300 bg-gray-500 rounded-full px-4 py-4 text-blue-700">
              <FaDribbble size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-violet-800 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-1xl font-bold mb-4">RECOGNITION</h3>
            <div>
              <div className="flex space-x-8">
                <div className="flex">
                  <p className="text-2xl font-bold">4.9/5</p>
                  <p className="text-violet-400 text-2xl">Clutch</p>
                </div>
                <div className="flex">
                  <p className="text-2xl font-bold">4.8/5</p>
                  <p className="text-violet-400 text-2xl">Google</p>
                </div>
              </div>
              <div className="bg-violet-800 rounded-lg p-6 mb-8 flex gap-1 p-4 mt-8">
                <div>
                  <h3 className="text-sm font-bold mb-2">Estimate Your Project</h3>
                  <p className="mb-2 text-violet-300 text-sm">
                    You'll be pleasantly surprised
                  </p>
                </div>
                <div>
                  <Button className="bg-gradient-to-r from-violet-300 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white rounded-full">
                    Get Your Estimate
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-1xl font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  BlockChain Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-1xl font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-violet-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Careers{" "}
                  <span className="bg-violet-600 text-violet-100 text-xs px-2 py-1 rounded ml-2">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Industry
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-1xl font-semibold mb-4">OFFICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-violet-300">
                  India
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-violet-300">
                  Dubai
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-violet-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright&copy; InnoApps2024</p>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:text-violet-300">
              Terms & Condition
            </Link>
            <Link href="#" className="hover:text-violet-300">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-violet-300">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-violet-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
