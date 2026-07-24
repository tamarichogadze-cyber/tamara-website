export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-[#e1ddd4] bg-[#f7f4ee] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#728b7a]">
          მომსახურებები
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#26352f] sm:text-5xl">
          როგორ შემიძლია დაგეხმაროთ
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#26352f]">
              ინდივიდუალური თერაპია
            </h3>

            <p className="mt-4 text-[#65716c] leading-7">
              ბავშვის საჭიროებებზე მორგებული ინდივიდუალური სესიები.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#26352f]">
              მშობლის კონსულტაცია
            </h3>

            <p className="mt-4 text-[#65716c] leading-7">
              პრაქტიკული რეკომენდაციები ყოველდღიური გამოწვევებისთვის.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#26352f]">
              ქცევის შეფასება
            </h3>

            <p className="mt-4 text-[#65716c] leading-7">
              შეფასება და ინდივიდუალური ინტერვენციის გეგმის შედგენა.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}