import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex items-center justify-center">
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-bold text-2xl">
        <p>hello world</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3>footer</h3>
      </footer>
    </div>
  );
}
