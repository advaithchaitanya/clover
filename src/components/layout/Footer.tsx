import Button from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export function Footer() {
  const [feedback, setFeedback] = useState({
    rating: "",
    feedback: "",
    ratingScale: "",
    complaint: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send feedback to email using Edge Function
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'advaithchaitanya@gmail.com',
          feedback
        }),
      });

      // Also store in Supabase
      const { error } = await supabase
        .from('feedback')
        .insert([feedback]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your feedback has been submitted.",
      });

      // Reset form
      setFeedback({
        rating: "",
        feedback: "",
        ratingScale: "",
        complaint: "",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  return <footer className="flex w-full flex-col overflow-hidden items-stretch justify-center px-4 sm:px-8 md:px-16 py-[50px]">
      <div className="w-full rounded-3xl bg-[#9023f0]">
        <div className="flex flex-col md:flex-row w-full gap-8 mx-0 py-8 px-4 md:px-[47px]">
          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-semibold mb-6">Website Feedback</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium mb-2">
                  Rate this website
                </label>
                <select
                  id="rating"
                  className="w-full px-3 py-2 rounded-md text-black"
                  value={feedback.rating}
                  onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
                >
                  <option value="">Select rating</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                  Give feedback
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  className="w-full px-3 py-2 rounded-md text-black"
                  value={feedback.feedback}
                  onChange={(e) => setFeedback({ ...feedback, feedback: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="ratingScale" className="block text-sm font-medium mb-2">
                  Rating (1-10)
                </label>
                <input
                  type="number"
                  id="ratingScale"
                  min="1"
                  max="10"
                  className="w-full px-3 py-2 rounded-md text-black"
                  value={feedback.ratingScale}
                  onChange={(e) => setFeedback({ ...feedback, ratingScale: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="complaint" className="block text-sm font-medium mb-2">
                  Complaints and Requests
                </label>
                <textarea
                  id="complaint"
                  rows={4}
                  className="w-full px-3 py-2 rounded-md text-black"
                  value={feedback.complaint}
                  onChange={(e) => setFeedback({ ...feedback, complaint: e.target.value })}
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full bg-black text-white hover:bg-gray-800">
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-8 py-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <img alt="Logo" src="/lovable-uploads/f3858b44-f076-4fa6-8d7f-cdbddd7defff.png" className="w-[180px] h-[130px] mx-auto md:mx-0" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
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

          {/* Resources */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Resources</h4>
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

          {/* Follow Us */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Follow Us</h4>
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

          {/* Legal */}
          <div>
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
        <div className="mt-8 px-4 md:px-8">
          <hr className="border-white" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-white gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
              <span>© 2024 hacathon-CloverFlux. All rights reserved.</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Cookie Settings</a>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
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
              <a href="https://www.instagram.com/its_ak_karthik" target="_blank" rel="noopener noreferrer" aria-label="Karthik on Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
