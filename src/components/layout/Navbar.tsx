import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleJoinClick = () => {
    // We'll implement this with Supabase auth
    toast({
      title: "Coming Soon",
      description: "The authentication feature will be available soon!"
    });
  };
  return <nav className="sticky top-0 z-50 bg-[rgba(238,238,238,1)] w-full shadow-md" role="navigation">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-16 py-4 max-md:px-5 bg-[#254dff]">
        <div className="bg-white flex items-center gap-6">
          <Link to="/">
            <img alt="Logo" className="w-[118px] h-auto" src="/lovable-uploads/17c4675c-f737-42b4-82ed-3e43f4be642f.png" />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-base">
          <div className="hidden md:flex items-center gap-8 text-black">
            <button onClick={() => scrollToSection("features")} className="hover:text-purple-600">
              Features
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-purple-600">
              Testimonials
            </button>
            <Link to="/resources" className="hover:text-purple-600">
              Resources
            </Link>
            <button onClick={() => scrollToSection("contact")} className="hover:text-purple-600">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/resources">
              <Button variant="secondary" size="sm" className="border-black text-black hover:text-white">Read more</Button>
            </Link>
            <Button variant="primary" size="sm" onClick={handleJoinClick}>
              Join
            </Button>
          </div>
        </div>
      </div>
    </nav>;
}