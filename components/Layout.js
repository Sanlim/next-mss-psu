import Nav from '../components/Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main} >
                    <Header />
                    <h2></h2>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
