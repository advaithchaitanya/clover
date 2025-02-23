export function Contact() {
  const contactMethods = [{
    icon: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/d2f41b1ae0ee58b8916c1d0b94520fe855ea08b63dbe698b58ddd65c960db052",
    title: "Email",
    description: "We're here to assist you with any inquiries or support.",
    link: "hello@relume.io",
    linkText: "hello@relume.io"
  }, {
    icon: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/59e960a9da2afe897e2f3501b92ace17755cd2b22d5f7eb7374f521b41c2116e",
    title: "Live chat",
    description: "Reach out to us for immediate assistance.",
    link: "#",
    linkText: "Start new chat"
  }, {
    icon: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/fe1480c4dd0107fa758b4015c2c3dede3f605a8249ebe0affbe020d220f2cd33",
    title: "Phone",
    description: "Visit us at our main office for face-to-face support.",
    link: "tel:+15550000000",
    linkText: "+1 (555) 000-0000"
  }, {
    icon: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/ec83defa998ee536bb975a9abf6c71d09f82a293cd91c3ef90be0415410789e5",
    title: "Office",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    link: "#",
    linkText: "123 Sample St, Sydney NSW 2000 AU"
  }];
  return <section aria-label="Contact" className="flex w-full flex-col overflow-hidden items-stretch text-center px-16 bg-black max-md:px-5 py-[12px]">
      <div className="self-center flex w-[768px] max-w-full flex-col items-stretch text-white">
        <span className="self-center text-base font-semibold">Tagline</span>
        <div className="w-full mt-4">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:text-[40px]">
            Contact us
          </h2>
          <p className="text-lg font-normal mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="flex w-full gap-8 flex-wrap">
          {contactMethods.map((method, index) => <div key={index} className="flex min-w-60 flex-col items-stretch flex-1 bg-[#aa24e8] rounded-3xl my-[50px] py-[120px]">
              <img src={method.icon} alt="" className="w-12 h-12 self-center" />
              <div className="flex w-full flex-col items-stretch mt-6">
                <div className="flex w-full flex-col text-white scale-2">
                  <h3 className="text-[32px] font-bold leading-[1.3]">
                    {method.title}
                  </h3>
                  <p className="text-base font-normal leading-6 mt-4">
                    {method.description}
                  </p>
                </div>
                <a href={method.link} className="text-white text-base font-normal underline mt-6">
                  {method.linkText}
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}