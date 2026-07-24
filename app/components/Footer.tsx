export default function Footer() {
  return (
    <footer className="border-t border-[#d8d4cb] bg-[#f7f4ee]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-[#65716c] md:flex-row">
        <div>
          <p className="font-semibold text-[#355e4c]">
            თამარ ჩოგაძე
          </p>

          <p>ქცევითი თერაპევტი</p>
        </div>

        <p>
          © {new Date().getFullYear()} Tamara Chogadze. ყველა უფლება დაცულია.
        </p>

        <a
          href="mailto:tamari.chogadze@gmail.com"
          className="hover:text-[#355e4c]"
        >
          tamari.chogadze@gmail.com
        </a>
      </div>
    </footer>
  );
}