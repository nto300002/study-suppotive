import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Profile: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <h1>プロフィール</h1>
        <p>名前</p>
        <p>email</p>
        <p>タスク</p>
        <p>保存した名言・tips</p>
      </main>
    </div>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Profile
