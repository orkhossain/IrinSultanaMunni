'use client'
import styles from './page.module.css'
import Home from './home/page'
import store from '../store'
import { Provider } from 'react-redux'

export default function Index() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
        <Home />
      </Provider>
    </main>
  )
}
