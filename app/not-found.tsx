import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex w-full h-screen flex-col gap-2 justify-center items-center'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}