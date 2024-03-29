import { Inter, Rubik } from 'next/font/google'
import '../app/styles/reset.scss'
import '../app/styles/matrix.scss'
import '../app/styles/stars.scss'
import '../app/styles/swiper.scss'
import '../app/styles/utility.scss'
import '../app/styles/dividers.scss'
import '../app/styles/globals.scss'

import CursorGlow from '../components/cursor';

const inter = Inter({ subsets: ['latin'] })

const rubik = Rubik({
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Ace Kisch',
  description: 'Full-stack web developer based in San Jose, CA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <CursorGlow />
        </body>
    </html>
  )
}
