export function Testimonials() {
  return <section aria-label="Testimonials" className="flex w-full flex-col overflow-hidden items-center px-16 bg-black max-md:px-5 py-[12px]">
      <div className="flex w-[768px] max-w-full flex-col overflow-hidden items-center">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => <img key={i} src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/3e8d330f3847091ece0a794e7eec9ab79c3994d8753f70e566021a2fb6e2f5cb" alt="Star" className="w-5 h-5" />)}
        </div>

        <blockquote className="text-white text-center text-2xl font-bold leading-[34px] mt-8">
          "This chatbot therapist has truly changed my life. I feel heard and
          supported like never before!"
        </blockquote>

        <div className="flex items-center gap-5 text-base text-white font-semibold mt-8">
          <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/8fcdbe6aadd80965d2c11db4b626a7933d665a56beea3d4ceb52599bebda2a1a" alt="Emily Johnson" className="w-14 h-14 rounded-full" />
          <cite className="not-italic">Emma stone</cite>
          <div className="border-l border-black h-[61px]" />
          <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/695f8113a57776e342a799177418e83beae93c0c6c35e062893341979dad9921" alt="Company logo" className="w-[120px]" />
        </div>

        <p className="text-white text-base font-normal mt-8">
          Marketing Manager, TechCorp
        </p>
      </div>
    </section>;
}