import './globals.css'
import { Inter } from 'next/font/google'
import { fetchSettings } from './utils/fetchers/settings'

const inter = Inter({ subsets: ['latin'] })

const settings = await fetchSettings()

export const metadata = {
  title: settings?.name ?? 'Loading...',
  description: settings?.description ?? 'Loading...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
