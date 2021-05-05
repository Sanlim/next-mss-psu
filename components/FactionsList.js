import FactionItem from './FactionItem'
import factionStyles from '../styles/Faction.module.css'

const FactionsList = ({ factions }) => {
    return (
        <div className={factionStyles.grid}>
            {factions.map(faction => (
                <FactionItem faction={faction} />
            ))}
        </div>
    )
}

export default FactionsList
