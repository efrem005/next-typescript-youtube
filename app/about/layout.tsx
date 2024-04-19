import React from "react";
import Link from "next/link";

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1 className="text-3xl font-bold my-2">About</h1>
      <ul className="flex gap-3 my-2">
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </>
  )
}