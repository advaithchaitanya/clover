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
    // This is a placeholder - you'll need to implement the actual authentication modal
    toast({
      title: "Coming Soon",
      description: "The authentication feature will be available soon!"
    });
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(238,238,238,1)] w-full shadow-md" role="navigation">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-16 py-4 max-md:px-5">
        <div className="bg-white flex items-center gap-6">
          <Link to="/">
            <img alt="Logo" src="https://cdn-icons-png.flaticon.com/512/13330/13330989.png" className="w-[118px] h-auto object-cover" />
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
            <button onClick={() => scrollToSection("blog")} className="hover:text-purple-600">
              Blog
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-purple-600">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" className="border-black text-black hover:border-purple-600" onClick={() => scrollToSection("contact")}>
              Help
            </Button>
            <Button variant="primary" size="sm" onClick={handleJoinClick}>
              Join
            </Button>
          </div>
        </div>
      </div>
    </nav>;
}