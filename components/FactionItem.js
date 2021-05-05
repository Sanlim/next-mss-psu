import Link from 'next/link'
import factionStyles from '../styles/Faction.module.css'

const FactionItem = ({ faction }) => {
  return (
    <Link href={`/faction/${faction.id}`}>
      <a className={factionStyles.card}>
        <h3>{faction.title} &rarr;</h3>
        <p>{faction.excerpt}</p>
      </a>
    </Link>
  )
}

export default FactionItem