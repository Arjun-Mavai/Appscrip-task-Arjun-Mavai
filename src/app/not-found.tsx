import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>Not Found</h2>
      <br />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}