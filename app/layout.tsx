import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import{Inter, Space_Grotesk} from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';

const inter  = Inter ({
  subsets: ['latin'],
  weight: ['100' '200' '300' '400' '500' '600' '700' '800' '900'],
  variable: '--font-inter'

}) 

const spaceGrotesk = Space_Grotesk ({
  subsets: ['latin'],
  weight: ['100' '200' '300' '400' '500' '600' '700'],
  variable: '--font-spaceGrotesk'

}) 


export const metadata: Metadata = {
  title: 'devflow',
  description: 'a community driven platform for asking'
  
  icons: {
    icon: '/assets/images/site-logo.svg'
  }

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      appearance={{
        elemnts: {
          frommButtonPrimary:'primary-gradient',
          footerActionLink:'primary-text-gradient hover:text-primary-500'
        }
      }}
      
    
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
         <h1 className='h1-bold'>tgis is a peace of shit</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}