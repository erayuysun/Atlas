import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Atlas Paragliding",
  description:
    "Meet Paragliding Atlas: expert-led flying adventures, immersive journeys, and a safety-first community.",
};

const values = [
  {
    title: "Experience",
    body: "We have many years of experience with trips to Africa and we travel a lot to continue building on our knowledge base. Use our experience and you will get experiences of a lifetime.",
  },
  {
    title: "Service",
    body: "We love the personal contact and believe that it is crucial to creating the perfect trip for you. Do not hesitate to book a meeting with one of us to tell us about your particular wishes and dreams.",
  },
  {
    title: "Community Empowerment",
    body: "When tourism directly benefits local people by contributing to their economic and social well-being, they also become active partners in protecting nature, alleviating poverty, and celebrating cultural diversity.",
  },
  {
    title: "Security",
    body: "In our partners we trust 100%, with our local knowledge and the safety net that a booking through a Nordic travel agency provides, you can feel completely safe when you travel with us.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#080808] text-white">
      <section className="full-bleed relative -mt-16 h-[45svh] min-h-[300px] overflow-hidden md:h-[82vh] md:min-h-[430px] min-[1030px]:-mt-24">
        <Image
          src="/Media/About Us/hero.png"
          alt="A paraglider soaring through dramatic clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#080808]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pt-16 text-center">
          <h1
            className="about-hero-title text-4xl font-semibold leading-[1.2] tracking-[0.12em] text-transparent sm:text-6xl md:text-7xl min-[1000px]:text-[110px] min-[1000px]:leading-[1.3] min-[1500px]:text-[140px] min-[1500px]:leading-[1.35]"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.95)",
              textShadow: "0 3px 18px rgba(0,0,0,0.55)",
            }}
          >
            About Us
          </h1>
          <p className="mt-8 max-w-3xl text-xs font-semibold leading-[1.5] tracking-[0.08em] text-white sm:text-base md:text-xl min-[1000px]:max-w-5xl min-[1000px]:text-[26px] min-[1000px]:leading-[1.65] min-[1500px]:max-w-7xl min-[1500px]:text-[36px] min-[1500px]:leading-[1.7]">
            Immersive Flying Safaris Guided by Seasoned Experts in the
            World&apos;s Most Exotic Skies
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden pt-12 md:pt-24">
        <div className="container relative z-10 mx-auto grid grid-cols-[44%_1fr] items-center gap-4 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full">
              <span className="absolute left-2 right-2 top-0 h-px bg-white/35" />
              <span className="absolute bottom-0 left-2 right-2 h-px bg-white/35" />
              <span className="absolute bottom-2 left-0 top-2 w-px bg-white/35" />
              <span className="absolute bottom-2 right-0 top-2 w-px bg-white/35" />
            </div>
            <Image
              src="/Media/About Us/row1.png"
              alt="A paraglider flying beside a dramatic cliff"
              width={1200}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.12em] text-orange-500 md:text-lg min-[1000px]:text-2xl min-[1500px]:text-3xl">
              Who We Are
            </p>
            <div className="mt-4 space-y-3 text-[8px] font-medium leading-[1.5] text-gray-200 sm:text-[10px] md:mt-7 md:space-y-6 md:text-base min-[1000px]:space-y-8 min-[1000px]:text-[22px] min-[1000px]:leading-[1.7] min-[1500px]:space-y-10 min-[1500px]:text-[30px] min-[1500px]:leading-[1.75]">
              <p>
                At Paragliding Atlas, we believe that our sport isn&apos;t just
                about flying; instead it is a way of experiencing the world
                from a perspective that few dare to explore.
              </p>
              <p>
                It&apos;s about embracing the wind, mastering the skies, and
                discovering the untold stories of the clouds and the lands
                that lie beneath them.
              </p>
              <p>
                In 2023 Aninder started Paragliding Atlas with an aim to create
                immersive flying paradises for every pilot out there who wishes
                for it.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/Media/About Us/bg-figure1.png"
          alt=""
          aria-hidden="true"
          width={1674}
          height={397}
          className="pointer-events-none relative z-0 mt-12 h-auto w-full object-cover opacity-90 min-[1000px]:mt-[50px]"
        />
      </section>

      <section className="relative overflow-hidden pt-10 md:pt-24">
        <div className="container relative z-10 mx-auto grid grid-cols-[1fr_44%] items-center gap-4 px-4 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.12em] text-orange-500 md:text-lg min-[1000px]:text-2xl min-[1500px]:text-3xl">
              Why Choose Us
            </p>
            <div className="mt-4 space-y-3 text-[8px] font-medium leading-[1.5] text-gray-200 sm:text-[10px] md:mt-7 md:space-y-6 md:text-base min-[1000px]:space-y-8 min-[1000px]:text-[22px] min-[1000px]:leading-[1.7] min-[1500px]:space-y-10 min-[1500px]:text-[30px] min-[1500px]:leading-[1.75]">
              <p>
                Our team is united by a single passion: to elevate every aspect
                of your flying holiday into a series of unforgettable moments,
                delivered with unparalleled hospitality while maintaining the
                highest safety standards.
              </p>
              <p>
                Flying through the air can often feel like love at first sight,
                and that&apos;s exactly what happened to our heart. Aninder
                Singh, as a child, when took his first tandem flight in the
                foothills of Himalayas, and the story of rest of us is also kind
                of same.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl md:order-2">
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full">
              <span className="absolute left-2 right-2 top-0 h-px bg-white/35" />
              <span className="absolute bottom-0 left-2 right-2 h-px bg-white/35" />
              <span className="absolute bottom-2 left-0 top-2 w-px bg-white/35" />
              <span className="absolute bottom-2 right-0 top-2 w-px bg-white/35" />
            </div>
            <Image
              src="/Media/About Us/row2.png"
              alt="Paragliders flying above a mountain valley"
              width={1200}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
        <Image
          src="/Media/About Us/bg-figure2.png"
          alt=""
          aria-hidden="true"
          width={2000}
          height={900}
          className="pointer-events-none relative z-0 mt-12 h-auto w-full object-cover min-[1000px]:mt-[50px]"
        />
      </section>

      <section className="bg-[#171715] py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="text-center">
                <h2 className="text-base font-semibold tracking-[0.1em] text-orange-500 md:text-xl min-[1000px]:text-2xl min-[1500px]:text-3xl">
                  {value.title}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base min-[1000px]:max-w-2xl min-[1000px]:text-xl min-[1000px]:leading-[1.7] min-[1500px]:max-w-3xl min-[1500px]:text-[28px]">
                  {value.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-3 overflow-hidden rounded-2xl border border-dashed border-white/60 text-center text-[10px] font-semibold tracking-[0.08em] text-white sm:text-sm min-[1000px]:text-lg min-[1500px]:text-2xl">
            <span className="px-3 py-3 min-[1000px]:py-4 min-[1500px]:py-6">
              Navigate
            </span>
            <span className="px-3 py-3 min-[1000px]:py-4 min-[1500px]:py-6">
              Aviate
            </span>
            <span className="px-3 py-3 min-[1000px]:py-4 min-[1500px]:py-6">
              Communicate
            </span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#11110f] px-5 py-20 text-center">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.2),transparent_45%)]" />
        <p className="relative text-xl font-semibold tracking-[0.12em] text-orange-500 md:text-3xl">
          Discover the World From Above
        </p>
      </section>

      <Footer />
    </main>
  );
}
