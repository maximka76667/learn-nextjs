import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

function ProfileImage() {
  return (
    <Image src="/images/profile.jpg" width={144} height={144} alt="Maxim" />
  )
}

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => console.log("script is loaded")} />
      <h1>first-post</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <ProfileImage />
    </Layout>
  )
}