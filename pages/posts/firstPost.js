import Link from "next/link";

export default function firstPost() {
  return (
    <>
      <h1>first-post</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  )
}
