import './globals.css'
import Nav from './components/nav'

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
        <body className="bg-black overflow-hidden p-0 m-0 font-roboto">
            <Nav />
            {children}
        </body>
    </html>
    );
}
