import Link from "next/link";

export default function Golf() {
  return (
    <main className="flex flex-col p-8 pt-16  md:p-24 max-w-[600px] mx-auto mb-28">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
        Golf &nbsp;&nbsp;⛳️
      </h1>
      <p className="mt-8 text-xl text-muted-foreground tracking-wide">
        Like my work, I take a data drive approach to golf. I use{" "}
        <Link
          className="underline"
          href="https://www.arccosgolf.com/"
          target="_blank"
        >
          Arccos
        </Link>{" "}
        to track my shots.
      </p>
      <p className="mt-8 text-xl text-muted-foreground tracking-wide">
        I&apos;m trying to get access to their APIs to automate the content on
        this page.
      </p>
      <p className="mt-8 text-xl text-muted-foreground tracking-wide">
        Stay tuned.
      </p>
    </main>
  );
}
