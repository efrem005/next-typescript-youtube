import { Metadata } from "next";
import { IPost } from "@/app/blog/page";

type PropsPost = {
  params: {
    id: string
  }
}

async function getOnePost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })

  return response.json()
}

export async function generateMetadata({params: {id}}: PropsPost): Promise<Metadata> {
  const post: IPost = await getOnePost(id)

  return {
    title: `Blog | ${post.title}`
  }
}

export default async function Post({params: {id}}: PropsPost) {

  const post: IPost = await getOnePost(id)

  return (
    <div className="container">
      <h1 className="text-3xl text-center font-bold my-5">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}