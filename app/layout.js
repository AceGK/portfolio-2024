import { Inter } from 'next/font/google'
import './reset.scss'
import './globals.scss'
import './matrix.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ace Kisch',
  description: 'Portfolio Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
