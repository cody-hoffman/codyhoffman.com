import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-8 pt-16  md:p-24 max-w-[600px] mx-auto mb-28">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
        Welcome &nbsp;&nbsp;👋
      </h1>
      <p className="mt-8 text-xl text-muted-foreground tracking-wide">
        I&apos;m Cody - an experienced engineer building with Next.js, Vercel,
        AWS, and Typescript.
      </p>
      <p className="mt-6 text-xl text-muted-foreground tracking-wide">
        I believe in simplicity, iteration, making quick decisions, and
        learning.
      </p>
      <p className="mt-6 text-xl text-muted-foreground tracking-wide">
        Today, I&apos;m building a next-gen group travel platform at{" "}
        <Link className="underline" href="https://boompop.com" target="_blank">
          BoomPop
        </Link>
        .
      </p>
      <p className="mt-6 text-xl text-muted-foreground tracking-wide">
        I launch new products, own technical architecture, and build a
        passionate team.
      </p>
      <p className="mt-6 text-xl text-muted-foreground tracking-wide">
        When I&apos;m not at work you can find me on the golf course. See how
        I&apos;ve been{" "}
        <Link className="underline" href="/golf">
          playing
        </Link>
        .
      </p>
    </main>
  );
}
