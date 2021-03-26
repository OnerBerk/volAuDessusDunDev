import styles from '../styles/home.module.scss'
import Layout from "../component/layout";

export default function Home() {
  return (
      <Layout title={"Home"}>
          <div className={styles.mainHome}>
          </div>
      </Layout>
  )
}