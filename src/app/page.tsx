"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  // ChevronDown,
  ChevronRight,
  // Menu,
  Star,
  ChevronLeft,
} from "lucide-react";

const reviews = [
  {
    text: "Beta feedback has been universally positive, and InnoApps Technologies Pvt Ltd consistently delivered high-quality results in a quick time frame. Their team is communicative, flexible, adaptable, knowledgable, and skilled, making them an excellent partner.",
    author: "Nick Kroger",
    position: "FOUNDER & CEO AT BECARDLESS",
    country: "US",
    avatar: "/images/girl2.jpg",
  },
  {
    text: "InnoApps has been instrumental in bringing our vision to life. Their expertise and dedication have resulted in a product that exceeds our expectations.",
    author: "Emma Thompson",
    position: "CTO AT TECHNOVATE",
    country: "UK",
    avatar: "/images/girl2.jpg",
  },
  {
    text: "The team at InnoApps is truly world-class. Their innovative solutions and attention to detail have significantly improved our business processes.",
    author: "Raj Patel",
    position: "DIRECTOR OF OPERATIONS AT GLOBALTECH",
    country: "IN",
    avatar: "/images/girl2.jpg",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
    );
  };
  return (
    <main>
      <section className="bg-gradient-to-r from-violet-700 to-purple-600 text-white py-32 relative overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          src="/images/v3.mp4" // Replace with your video file path
        />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-center animate-fade-in-down">
            Unlock
            <br />
            <span className="text-violet-200">Innovation</span>
            <br />
            with Next-Gen Software Architects
          </h1>
          <p className="text-md mb-8 animate-fade-in-up text-center">
            We provide you with a wide range of digital transformation solutions
            <br />
            using AI, blockchain, and more industry-transforming technologies.
          </p>
          <Button
            size="lg"
            className="animate-fade-in bg-violet-100 text-violet-900 hover:bg-violet-200 rounded-full"
          >
            Start Now <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 border-4 border-violet-200 rounded-full animate-spin-slow"></div>
          <div className="w-64 h-64 border-4 border-violet-200 rounded-full animate-spin-slow absolute"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="relative">
            <div className="w-16 h-8 bg-white rounded-t-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-violet-600 text-sm">
            QUALITY PROMISED
          </h1>
          <h2 className="text-3xl font-bold text-center mb-12">
            Why businesses turn to{" "}
            <span className="text-violet-600">InnoApps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-violet-100">
              <CardHeader>
                <CardTitle className="text-violet-800">Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-violet-700">
                  Efficient open communication. Prior documentation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-violet-100">
              <CardHeader>
                <CardTitle className="text-violet-800">
                  Safe and Secure Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-violet-700">
                  Your data is protected with encryption and other hardened
                  security measures.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-violet-100">
              <CardHeader>
                <CardTitle className="text-violet-800">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-violet-700">
                  We exceed your expectations in quality of work and in open,
                  friendly collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Empower your brand with our web development solutions.",
              },
              {
                title: "Mobile App Development",
                description:
                  "Transform your ideas into user-friendly, feature-rich applications.",
              },
              {
                title: "Blockchain Development",
                description:
                  "Unlock the potential of blockchain technology with InnoApps.",
              },
              {
                title: "Artificial Intelligence",
                description:
                  "Turn your AI dreams into reality with our intelligent solutions.",
              },
              {
                title: "Staff Augmentation",
                description:
                  "Get top-tier talent handpicked by InnoApps for your projects.",
              },
              {
                title: "Product Designing",
                description:
                  "We provide end-to-end product design services for innovative solutions.",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-violet-700">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-violet-600">{service.description}</p>
                  <Button
                    variant="outline"
                    className="mt-4 text-violet-700 border-violet-700 hover:bg-violet-100"
                  >
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">
            Our Deliveries
          </h2>
          <div className="relative">
            {[
              {
                title: "GYM Management System",
                description:
                  "Committed to providing updated fitness and tools for neuro-based programming via STIC.",
              },
              {
                title: "Purchase Eval Solution",
                description:
                  "Evaluate major, long-distance purchases from anywhere using insight from your third eye.",
              },
              {
                title: "Anti-Counterfeit Solution",
                description:
                  "Easy scan the Clarity code on the packaging to check that the item you have is authentic or not.",
              },
              {
                title: "Modern Currency & Inflation",
                description:
                  "Understanding the flaws and risks of currency in a volatile financial landscape.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${index === activeSlide
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
                  }`}
              >
                <Card className="bg-violet-100">
                  <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-4 text-violet-800">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-violet-700">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="text-violet-700 border-violet-700 hover:bg-violet-200"
                      >
                        Case Study <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src="/images/girl.jpg"
                        alt={project.title}
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-violet-600 text-sm font-semibold mb-4">
            REVIEWS
          </h2>
          <h3 className="text-center text-3xl md:text-5xl font-bold text-violet-900 mb-12">
            What our Happy
            <br />
            Clients Say
          </h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-violet-200">
              <div className="text-violet-500 text-6xl font-serif absolute top-4 left-4">
                &quot;
              </div>
              <div className="mb-6">
                <Image
                  src="/images/girl.jpg"
                  alt="Clutch Logo"
                  width={100}
                  height={40}
                />
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-violet-500 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-violet-800 text-lg mb-6">
                {reviews[currentReview].text}
              </p>
              <div className="flex items-center">
                <Image
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].author}
                  width={60}
                  height={60}
                  className="rounded-lg mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-violet-900">
                    {reviews[currentReview].author}
                  </p>
                  <p className="text-violet-600 text-sm">
                    {reviews[currentReview].position}
                  </p>
                </div>
                <Image
                  src={`/images/american-flag.jpg`}
                  alt={`${reviews[currentReview].country} flag`}
                  width={30}
                  height={20}
                  className="ml-4"
                />
              </div>
            </div>
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-violet-200 hover:bg-violet-100 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-violet-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-violet-200 hover:bg-violet-100 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-violet-600" />
            </button>
          </div>
          <div className="flex justify-center mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentReview ? "bg-violet-500" : "bg-violet-200"
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-violet-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Get the rapid growth
                <br /> you deserve
              </h2>
              <p className="mb-6">
                Get the cutting-edge solutions you need to accelerate your
                company&apos;s growth.
              </p>
              <ul className="bg-violet-500 opacity-80 p-4 rounded space-y-4">
                <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-blue-500">
                  Contact us using the form.
                </li>
                <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-blue-500">
                  We&apos;ll listen to your needs. Ask us anything.
                </li>
                <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-blue-500">
                  Come away with cutting-edge solutions that help scale your
                  company&apos;s growth rapidly.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-violet-800">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <Input
                        placeholder="First name"
                        className="bg-violet-100"
                      />
                      <Input
                        placeholder="Last name"
                        className="bg-violet-100"
                      />
                    </div>
                    <Input
                      placeholder="Business Email"
                      className="mb-4 bg-violet-100"
                    />
                    <Input
                      placeholder="Mobile (Optional)"
                      className="mb-4 bg-violet-100"
                    />
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="mb-4 bg-violet-100"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full"
                    >
                      Book Consultation
                    </Button>
                    <p className="text-sm p-2 text-gray-500">
                      your idea is 100% protected by our{" "}
                      <span className="text-violet-600">
                        non disclosure agreement
                      </span>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
