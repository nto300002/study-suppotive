import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Meigen: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>名言集</h1>
        <p>今日の名言・tips</p>
        <p>感情別の名言・tips</p>
        <p>全名言</p>
      </main>
    </div>
  )
}

Meigen.suppressFirstRenderFlicker = true
Meigen.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Meigen
