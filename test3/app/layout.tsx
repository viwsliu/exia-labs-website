import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Exia Labs',
  description: 'Website for Exia Labs',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div style={{ paddingTop: '70px' }}>{children}</div>
      </body>
    </html>
  )
}