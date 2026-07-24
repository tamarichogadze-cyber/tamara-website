export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[#e1ddd4] bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#728b7a]">
          ჩემ შესახებ
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold text-[#26352f]">
          თერაპია, რომელიც ბავშვსა და ოჯახზეა მორგებული
        </h2>

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#65716c]">
          <p>
            მე ვარ თამარ ჩოგაძე, ქცევითი თერაპევტი. ჩემი მიზანია თითოეულ
            ბავშვსა და ოჯახს შევთავაზო პროფესიონალური, თბილი და
            ინდივიდუალური მხარდაჭერა.
          </p>

          <p>
            თითოეული ბავშვი უნიკალურია, ამიტომ თერაპიული პროცესი
            ყოველთვის მის საჭიროებებსა და შესაძლებლობებზეა მორგებული.
          </p>
        </div>
      </div>
    </section>
  );
}