import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[clamp(327px,85.6vw,384px)] bg-design-white p-6 gap-6 rounded-[20px] border-design-gray-950 border-[1px] shadow-[8px_8px_0px_#000000] flex flex-col">
        <Image
          src="/illustration-article.svg"
          alt=""
          height={200}
          width={336}
          className="w-fill h-[200px]"
        />
        <main className="flex flex-col gap-[12px]">
          <p className="px-[12px] py-[4px] bg-desing-yellow rounded-[4px] w-fit text-preset3 font-bold text-design-gray-950">
            Learning
          </p>
          <p className="text-preset3 text-design-gray-950">
            Published 21 Dec 2023
          </p>
          <h1 className="text-preset1 text-design-gray-950 font-extrabold hover:text-desing-yellow cursor-pointer w-fit">
            HTML & CSS foundations
          </h1>
          <p className="text-preset2 text-design-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </main>
        <footer className="flex items-center gap-[12px]">
          <Image src="/image-avatar.webp" alt="" height={32} width={32} />
          <p className="text-preset3 font-extrabold">Greg Hooper</p>
        </footer>
      </div>
    </>
  );
}
