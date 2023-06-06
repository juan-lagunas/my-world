import './globals.css'

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
      <body className="bg-violet-600">{children}</body>
    </html>
  )
}
