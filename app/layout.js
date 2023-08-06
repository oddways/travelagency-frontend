import Navbar from "@/components/Layout/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "@/components/Layout/Sidebar"
import { GlobalProvider } from "@/context/GlobalContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Travel-Agency",
  description: "Best choice for safe trips",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <main className="w-full flex min-h-screen">
            <Sidebar />
            <section className="w-full flex flex-col">
              <Navbar />
              {children}
            </section>
          </main>
        </GlobalProvider>
      </body>
    </html>
  )
}
