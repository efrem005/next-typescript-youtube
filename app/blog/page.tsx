import { Metadata } from "next";
import Link from "next/link";

export type IPost = {
  "userId": string,
  "id": string,
  "title": string,
  "body": string
}

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) throw new Error('Unable to fetch posts!')

  return response.json()
}

export const metadata: Metadata = {
  title: 'Blog | Home',
}

export default async function Blog() {

  const posts: IPost[] = await getData()

  return (
    <>
    <h1 className="text-3xl font-bold">Blog Page</h1>
      <ul>
      {posts && posts.map((post: any) => (
        <li className="list-disc" key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}