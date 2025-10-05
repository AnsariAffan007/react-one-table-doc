import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home">
      <div className="h-[100vh] flex justify-center items-center">
        <div className="flex flex-col gap-y-2 text-center">
          <h1 className="text-6xl font-extrabold">React One Table</h1>
          <h4 className="text-2xl font-bold">Tanstack, but Opiniated</h4>
          <div className="flex gap-x-2 items-stretch justify-center mt-2">
            <Button
              variant={"outline"}
              className="cursor-pointer"
              asChild
            >
              <Link href={"/docs"}>
                Read the Docs
              </Link>
            </Button>
            <Button
              variant={"destructive"}
              className="cursor-pointer">
              See Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
