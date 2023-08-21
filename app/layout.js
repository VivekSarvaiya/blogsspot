import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Provider from "@/components/Provider"
import "@/styles/styles.css"
export const metadata = {
  title: 'Bloggspot',
  description: 'Read | Create | Inspire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}
