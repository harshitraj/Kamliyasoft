"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Ensure Shadcn Button is imported
import { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Shadcn Dropdown

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      <nav
        className={`fixed w-full bg-violet-800 text-white transition-transform duration-500 z-50 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/l3.png"
              alt="InnoApps Logo"
              width={50}
              height={40}
            />
            <span className="text-sm bg-violet-500 text-white px-2 py-1 rounded">
              We're Hiring
            </span>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsNavVisible(!isNavVisible)}
          >
            <Menu />
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                <DropdownMenuItem>Blockchain Development</DropdownMenuItem>
                <DropdownMenuItem>AI & Machine Learning</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/Industry" prefetch={false}>
              Industry
            </Link>
            <Link href="/Work" prefetch={false}>
              Work
            </Link>
            <Link href="/About" prefetch={false}>
              About Us
            </Link>
            <Link href="/Blogs" prefetch={false}>
              Blogs
            </Link>
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-violet-300 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
