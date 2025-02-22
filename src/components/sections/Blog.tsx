import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
export function Blog() {
  const blogPosts = [{
    image: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/2fb694f9aaa1eb7dfc80a608c4f893bcf32eb78dd6f68e8591f4d68bf652e84b",
    category: "Mental Health",
    title: "The Future of Therapy: AI's Role",
    description: "AI will revolutionize therapy by providing hyper-personalized, always-available mental health support through advanced chatbots, predictive analytics, and real-time emotional tracking"
  }, {
    image: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/e873b672eccda4d78baa7d5a7a2f4762eae656e107115d5f4195366823d3190a",
    category: "Wellness",
    title: "Understanding Anxiety: Tips and Techniques",
    description: "Anxiety is a natural response to stress but can become overwhelming if not managed effectively."
  }, {
    image: "https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/d072adcc1ecd9ce8867dc66b3c239bd03b551d7520cea3d94c5d838a6fb38d63",
    category: "Support",
    title: "The Benefits of Online Therapy",
    description: "Discover how online therapy can improve accessibility and convenience."
  }];
  return <section className="w-full overflow-hidden px-16 py-28 bg-black max-md:px-5 max-md:py-[100px]" aria-label="Blog">
      <div className="flex w-[768px] max-w-full flex-col items-stretch text-white">
        <span className="text-base font-semibold">Blog</span>
        <div className="w-full mt-4">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:text-[40px]">
            Explore Mental Health Insights
          </h2>
          <p className="text-lg font-normal mt-6">
            Discover the power of AI in therapy.
          </p>
        </div>
      </div>

      <div className="w-full mt-16">
        <div className="flex w-full gap-8 flex-wrap">
          {blogPosts.map((post, index) => <article key={index} className="min-w-60 flex-1 bg-[#9d05f5] rounded-2xl">
              <img src={post.image} alt={post.title} className="aspect-[1.39] object-cover w-full" />
              <div className="mt-6">
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span className="bg-white text-black px-2 py-1">
                    {post.category}
                  </span>
                  <span className="text-white">5 min read</span>
                </div>

                <div className="text-white mt-4">
                  <h3 className="text-2xl font-bold leading-[1.4]">
                    {post.title}
                  </h3>
                  <p className="text-base font-normal leading-6 mt-2">
                    {post.description}
                  </p>
                </div>
              </div>

              <Link to="/resources">
                <Button variant="link" className="mt-6">
                  Read more
                  <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/6d5c9a41313554c0ff9350f44957dd54ef90fc95cb5fcd299c0c6686a11b3bd0" alt="" className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </article>)}
        </div>
      </div>

      <div className="mt-16">
        <Link to="/resources">
          <Button variant="secondary">View all</Button>
        </Link>
      </div>
    </section>;
}