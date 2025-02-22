import Button from "@/components/ui/Button";
export function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };
  return <section aria-label="Newsletter" className="flex w-full flex-col overflow-hidden items-stretch justify-center px-16 bg-black max-md:px-5 py-[10px]">
      <div className="border flex w-full items-center overflow-hidden flex-wrap border-white">
        <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 p-12 max-md:px-5 bg-[#a023f0] py-[78px] my-0">
          <div className="w-full text-white">
            <h2 className="text-5xl font-bold leading-[58px] max-md:text-[40px] max-md:leading-[54px]">
              Join Our Chatbot Therapy Today
            </h2>
            <p className="text-lg font-normal leading-[27px] mt-6">We also do campaigns, join us at our social media</p>
          </div>

          <form className="w-[513px] max-w-full mt-8" onSubmit={handleSubmit}>
            
            <p className="text-white text-xs mt-4">
              By clicking Sign Up you're confirming that you agree with our{" "}
              <a href="#" className="underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        </div>

        <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/6480460fd018de8b321089d0c432671054fa630cbb803fed8899eee86d504f20" alt="Newsletter illustration" className="aspect-[1.5] object-cover w-full self-stretch min-w-60 flex-1" />
      </div>
    </section>;
}