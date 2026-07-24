export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#26352f] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#c8d4cb]">
          კონტაქტი
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          ერთად შევქმნათ თქვენი ბავშვის განვითარების საუკეთესო გზა.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8e1db]">
          თუ გაქვთ კითხვები ან გსურთ კონსულტაციის დაჯავშნა,
          დამიკავშირდით თქვენთვის სასურველი გზით.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              საკონტაქტო ინფორმაცია
            </h3>

            <p className="mb-4">
              📞 592 437 411
            </p>

            <p className="mb-4">
              ✉️ tamari.chogadze@gmail.com
            </p>

            <p className="mb-4">
              📍 თბილისი • ვიზიტი წინასწარი ჩაწერით
            </p>

            <p>
              Facebook: Tamar Chogadze
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-[#26352f]">

            <h3 className="text-2xl font-semibold">
              ჩანიშნე კონსულტაცია
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              დამირეკეთ ან მომწერეთ ელფოსტაზე და
              ერთად შევარჩევთ თქვენთვის სასურველ დროს.
            </p>

            <a
              href="tel:+995592437411"
              className="mt-8 inline-block rounded-full bg-[#355e4c] px-8 py-4 text-white"
            >
              დარეკე ახლა
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}