import {server} from '../config'
import FactionsList from '../components/FactionsList'

export default function Home({ factions }) {
  //console.log(articles);
  return (
    <div >
      <FactionsList factions={factions} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/factions`)
  const factions = await res.json()

  return {
    props: {
      factions
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
