
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

export function Features() {
  return <section aria-label="Features" className="flex min-h-[963px] w-full flex-col overflow-hidden text-white px-16 bg-black max-md:px-5 py-[10px]">
      <div className="flex w-[768px] max-w-full flex-col">
        <span className="text-base font-semibold">Tagline</span>
        <div className="w-full mt-4">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:text-[40px]">
            AI Chat bot just say "Hey ZenMind"
          </h2>
          <p className="text-lg font-normal leading-[27px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="flex w-full gap-[40px_48px] flex-wrap">
          <Card className="min-h-[293px] flex-1">
            <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/387ea1fca05ded2ca412e8fb34b367dbd56e017f61800e529f2aafd015a57c60" alt="" className="w-12 h-12" />
            <h3 className="text-[32px] font-bold leading-[42px] mt-6">
              AI Therapy: The Future of Mental Health Support
            </h3>
            <p className="text-base font-normal leading-6 mt-6">
              To provide mental health support, offering accessible, data-driven
              solutions for emotional well-being.
            </p>
          </Card>

          <Card className="min-h-[293px] w-[427px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/bd9b5461c49ba3aab949f90199e5e62b66bdfea55d709824e8ba706b953ff756" alt="" className="w-12 h-12" />
            <h3 className="text-[32px] font-bold leading-[42px] mt-6">
              AI Chatbots for Emotional Support
            </h3>
            <p className="text-base font-normal leading-6 mt-6">
              AI-driven chatbots provide real-time conversations, helping users
              process emotions, manage stress, and improve mental well-being
            </p>
          </Card>

          <Card className="min-h-[293px] flex-1">
            <img src="https://cdn.builder.io/api/v1/image/assets/547abc55e6e448d595cf41dc48be6c0f/bd9b5461c49ba3aab949f90199e5e62b66bdfea55d709824e8ba706b953ff756" alt="" className="w-12 h-12" />
            <h3 className="text-[32px] font-bold leading-[1.3] mt-6">
              24/7 Instant Support
            </h3>
            <p className="text-base font-normal leading-6 mt-6">
              Available anytime, anywhere, eliminating wait times for
              traditional therapy.
              <br />
              Provides immediate assistance during emotional distress or crisis
              situations
            </p>
          </Card>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-20">
      </div>
    </section>;
}
