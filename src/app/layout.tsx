import './globals.css'
import Link from 'next/link';

export const metadata = {
    title: "My world",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
        </head>
        <body className="bg-black">
            <nav className="h-[52px] w-full font-mono font-extrabold text-xl sm:text-2xl">
                <div className="w-3/4 sm:max-w-[980px] h-full mx-auto text-white flex justify-center items-center gap-3 text-center">
                    <Link href="/" className="sm:hover:scale-110 sm:hover:-translate-y-1 transition ease-in-out duration-200">Home</Link>
                    <span>&#183;</span>
                    <Link href="/game" className="sm:hover:scale-110 sm:hover:-translate-y-1 transition ease-in-out duration-200">Games</Link>
                    <span>&#183;</span>
                    <Link href="/game" className="sm:hover:scale-110 sm:hover:-translate-y-1 transition ease-in-out duration-200">Games</Link>
                </div>
            </nav>
            {children}
        </body>
    </html>
    );
}
