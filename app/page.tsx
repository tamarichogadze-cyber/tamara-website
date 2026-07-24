import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#26352f]">
      <Header />

      <section className="mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#728b7a]">
            ქცევითი თერაპია და ოჯახის მხარდაჭერა
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-tight text-[#26352f] sm:text-6xl">
            ბავშვის განვითარება იწყება მისი სამყაროს გაგებით
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#65716c]">
            მე ვარ თამარ ჩოგაძე, ქცევითი თერაპევტი. ჩემი მიზანია
            თითოეულ ბავშვსა და ოჯახს შევთავაზო პროფესიონალური, თბილი
            და ინდივიდუალურ საჭიროებებზე მორგებული მხარდაჭერა.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#355e4c] px-8 py-4 text-center font-medium text-white transition hover:bg-[#294a3b]"
            >
              დაჯავშნე კონსულტაცია
            </a>

            <a
              href="#blog"
              className="rounded-full border border-[#355e4c] px-8 py-4 text-center font-medium text-[#355e4c] transition hover:bg-[#e8eee9]"
            >
              წაიკითხე ბლოგი
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-[#ddd8cd] pt-8 text-sm text-[#65716c]">
            <span>ინდივიდუალური მიდგომა</span>
            <span>ოჯახთან თანამშრომლობა</span>
            <span>მტკიცებულებაზე დაფუძნებული პრაქტიკა</span>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[510px]">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[40px] border border-[#b8c5ba]" />

            <div className="relative overflow-hidden rounded-[40px] bg-[#dfe6df] shadow-[0_28px_70px_rgba(38,53,47,0.18)]">
              <Image
                src="/tamara.jpg"
                alt="თამარ ჩოგაძე, ქცევითი თერაპევტი"
                width={700}
                height={900}
                priority
                className="h-[540px] w-full object-cover object-top sm:h-[650px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm font-semibold text-[#355e4c]">
                მშვიდი სივრცე განვითარებისთვის
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}