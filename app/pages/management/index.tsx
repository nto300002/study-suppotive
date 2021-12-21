import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"

const Management: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>学習管理</h1>
        <p>カレンダー</p>
        <p>タスク</p>
        <p>達成度</p>
      </main>
    </div>
  )
}

Management.suppressFirstRenderFlicker = true
Management.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Management
