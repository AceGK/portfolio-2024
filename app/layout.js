import { Inter, VT323 } from 'next/font/google'
import './reset.scss'
import './matrix.scss'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })
const vt323 = VT323({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


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
