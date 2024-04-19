'use client'

export default function ErrorWrapper({error}: {error: Error}) {
  return <h1 className="text-3xl font-bold">Oops!!! {error.message}</h1>
}