import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import Calendar from "./Calendar"
import Task from "./Task"

const Management: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>学習管理</h1>
        <p>カレンダー</p>
        <Calendar />
        <p>タスク</p>
        <Task />
        <p>達成度</p>
      </main>
    </div>
  )
}

Management.suppressFirstRenderFlicker = true
Management.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Management
