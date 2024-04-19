import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact about page'
}

export default function Contacts() {
    return (
      <h3 className="text-xl font-bold">Contact Page</h3>
    )
}