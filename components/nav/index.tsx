import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Home
        </div>
      </Link>
      <Link href="/about">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          About
        </div>
      </Link>
      <Link href="/blog">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Blog
        </div>
      </Link>
      <Link href="/blog/josoroma">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Blog Page
        </div>
      </Link>
      <Link href="/listing">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Listing
        </div>
      </Link>
      <Link href="/listing/333">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Listing Page
        </div>
      </Link>
      <Link href="/dashboard">
        <div className="text-black bg-gray-300 hover:text-yellow-500 hover:bg-black p-2 rounded mb-2 cursor-pointer">
          Dashboard
        </div>
      </Link>
    </nav>
  );
}
