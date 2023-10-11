import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import TopNavigation from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mythic Ink',
  description: 'A wonderful world of fiction.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <TopNavigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}