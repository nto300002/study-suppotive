import { Head, BlitzLayout } from "blitz"
import Header from "./Header"
import Footer from "./Footer"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "supportive-push"}</title>
        <Header />
      </Head>

      {children}
      <Footer />
    </>
  )
}

export default Layout
