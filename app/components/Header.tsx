export default function Header() {
  return (
    <header className="w-full border-b border-[#e5e2da] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-[#355e4c]">
            თამარ ჩოგაძე
          </h1>

          <p className="text-sm text-gray-500">
            ქცევითი თერაპევტი
          </p>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#about">ჩემ შესახებ</a>
          <a href="#services">მომსახურებები</a>
          <a href="#blog">ბლოგი</a>
          <a href="#contact">კონტაქტი</a>
        </nav>
        <button className="md:hidden text-3xl text-[#355e4c]">
  ☰
</button>
      </div>
    </header>
  );
}