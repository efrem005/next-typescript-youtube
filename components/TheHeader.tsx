import Link from "next/link";

const TheHeader = () => {
  return (
    <header className="flex justify-center gap-3 py-5 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  )
}

export {TheHeader}