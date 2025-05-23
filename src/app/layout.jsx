// src/app/layout.jsx

import './globals.css'
import '../../styles/base.css'
import '../../styles/hero.css'
import '../../styles/about.css'
import '../../styles/skills.css'
import '../../styles/artspace.css'
import '../../styles/contacts.css'

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'RICO – Front-End Designer Portfolio',
  description: 'Interactive Portfolio “My Art Space”',
  icons: {
    icon: 'https://i.kym-cdn.com/entries/icons/facebook/000/001/130/Untitled.jpg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
