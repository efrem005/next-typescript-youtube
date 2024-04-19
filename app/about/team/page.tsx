import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Team',
    description: 'Team about page'
}

export default function Team() {
    return (
      <h3 className="text-xl font-bold">Team Page</h3>
    )
}