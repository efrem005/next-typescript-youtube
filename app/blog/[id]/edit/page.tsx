import { Metadata } from "next";

type PropsPost = {
  params: {
    id: string
  }
}

export async function generateMetadata({params: {id}}: PropsPost): Promise<Metadata> {
  return {
    title: `Blog edit | ${id}`
  }
}

export default function PostEdit({params: {id}}: PropsPost) {
  return (
    <h1 className="text-3xl font-bold">Edit page: {id}</h1>
  )
}