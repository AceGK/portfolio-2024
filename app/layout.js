import { Inter, VT323 } from 'next/font/google'
import '../app/styles/reset.scss'
import '../app/styles/matrix.scss'
import '../app/styles/stars.scss'
import '../app/styles/globals.scss'

import CursorGlow from '../components/cursor';

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
      <body className={inter.className}>
        {children}
        <CursorGlow />
        </body>
    </html>
  )
}
