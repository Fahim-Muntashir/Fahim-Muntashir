import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fahim Muntashir',
  description: 'Fahim Muntashir Portfolio Bangladesh',
  icons: {
    icon:['/public/fm.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
    <Footer></Footer>
      </body>
    </html>
  )
}
