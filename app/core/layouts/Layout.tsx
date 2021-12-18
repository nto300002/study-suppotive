import { Head, BlitzLayout } from "blitz"
import { Link, Routes } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "supportive-push"}</title>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
        </ul>
      </Head>

      {children}
    </>
  )
}

export default Layout
