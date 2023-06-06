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
        <body>
            <nav className="fixed h-[52px] w-full z-10 bg-[#161616] bg-opacity-70">
                <div className="w-3/4 sm:max-w-[980px] h-full mx-auto text-[#ffffff] flex justify-between items-center">
                    <Link href="/" className="font-bold text-2xl">PBJ</Link>
                    <Link href="/game" className="font-semibold text-sm">Game</Link>
                </div>
            </nav>
            {children}
        </body>
    </html>
    );
}
