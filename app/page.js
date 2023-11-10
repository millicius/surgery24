import Link from "next/link"

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/surgery', { cache: 'no-store' })
  const data = await res.json()
  
  return (
    <main>
      <h1>Home Page</h1>
      <div>
        <Link href='/new'>New</Link>
      </div>
        {data?.map(d => (
          <p key={d._id}>{d.title}{d.description}</p>
        ))}
    </main>
  )
}
