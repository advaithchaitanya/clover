import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
export function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section aria-label="Hero section" className="min-h-[500px] w-full overflow-hidden bg-black">
      <div className="flex  items-stretch flex-1 flex-wrap h-full m-auto">
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] pl-16 pr-20 max-md:px-5">
          <div className="w-full text-white">
            <h1 className="font-bold leading-[67px] max-md:leading-[54px] text-4xl">Click on the chat icon to chat with "AI bot"</h1>
            <p className="text-lg font-normal leading-[27px] mt-6">
              Experience a new way to express your feelings and find comfort.
              Our chatbot therapist is here to listen and guide you through your
              challenges.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link to="/chat">
              <Button variant="secondary">Start</Button>
            </Link>
            <Button variant="secondary" onClick={scrollToFeatures}>Learn More</Button>
          </div>
        </div>

        <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/5dce293e5f57c7a5ab9bf24a40687d4179b22b89752f63c928cd126dc8b37e07" alt="AI Therapy Illustration" className="aspect-[0.8] w-full min-w-60 flex-1 shrink basis-36 rounded-[59px_59px_65px_59px] max-h-[500px] object-scale-down" />
      </div>
    </section>;
}