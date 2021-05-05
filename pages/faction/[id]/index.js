import { server } from '../../../config'
import Meta from '../../../components/Meta'
import Link from 'next/link'

const faction = ({ faction }) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <Meta title={faction.title} description={faction.excerpt} />
            <h1>{faction.title}</h1>
            <p>{faction.body}</p>
            <br />
            <Link href='/'>Go back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/factions/${context.params.id}`)

    const faction = await res.json()

    return {
        props: {
            faction
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/factions`)

    const factions = await res.json()

    const ids = factions.map(faction => faction.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default faction

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }