import styles from '../styles/Home.module.scss'
import Layout from "../component/Layout";

export default function Home() {
  return (
      <Layout title={"Home"}>
          <div className={styles.mainHome}>
          </div>
      </Layout>
  )
}