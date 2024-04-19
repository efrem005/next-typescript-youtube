import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | create',
  description: 'create blog page'
}

export default function CreatePost() {
  return (
    <h1 className="text-3xl font-bold">Create new post</h1>
  )
}