
export default function Home() {
  return (
    <section id="home">
      <div className="h-[100vh] flex justify-center items-center">
        <div className="flex flex-col gap-y-2 text-center">
          <h1 className="text-6xl font-extrabold">React One Table</h1>
          <h4 className="text-2xl font-semibold">Tanstack table, but Opiniated</h4>
          <div className="flex gap-x-2 items-stretch">
            <button>Read the Docs</button>
            <button>See Examples</button>
          </div>
        </div>
      </div>
    </section>
  );
}
