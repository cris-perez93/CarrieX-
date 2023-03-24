import Head from 'next/head'

export default function Home () {
  return (
    <div className="bg-black w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="hello">Hello World</h1>
      <p className=' text-white bg-slate-600'>Media markt Hackathonnnn</p>
    </div>
  )
}
