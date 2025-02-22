
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

const books = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    link: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748",
    description:
      "This book examines the impact of trauma on both the mind and body, providing valuable insights into the healing process.",
  },
  {
    title: "Lost Connections",
    author: "Johann Hari",
    link: "https://www.amazon.com/Lost-Connections-Uncovering-Depression-Unexpected/dp/163286830X",
    description:
      "Investigates the root causes of depression and anxiety, challenging traditional beliefs and presenting fresh viewpoints.",
  },
  {
    title: "Feeling Good: The New Mood Therapy",
    author: "Dr. David D. Burns",
    link: "https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336",
    description:
      "A foundational text on cognitive-behavioral therapy, offering practical tools to address negative thinking patterns.",
  },
  {
    title: "Reasons to Stay Alive",
    author: "Matt Haig",
    link: "https://www.amazon.com/Reasons-Stay-Alive-Matt-Haig/dp/0143128728",
    description:
      "A heartfelt memoir that provides hope and understanding for those navigating life with depression.",
  },
  {
    title: "First, We Make the Beast Beautiful",
    author: "Sarah Wilson",
    link: "https://www.amazon.com/First-We-Make-Beast-Beautiful/dp/0062836782",
    description:
      "A distinctive look at living with anxiety, intertwining personal narratives with research findings.",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Sidebar />
      <main className="ml-16 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="secondary" className="mb-8">
                ← Back to Home
              </Button>
            </Link>
          </div>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Motivational Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-GXfLY4-d8w?si=uAKXqD6fpI_4_KEi"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mn6WxY4NYEA?si=C1iepTHLAkTPpOIM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/O9qRyFOLdQk?si=af69g5-NybOm0-4I"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8">
              Recommended Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <Card
                  key={book.title}
                  className="hover:border-purple-500 transition-colors backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {book.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">by {book.author}</p>
                  <p className="text-white/60 mb-4">{book.description}</p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View on Amazon →
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
