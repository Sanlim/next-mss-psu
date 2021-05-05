import {factions} from '../../../data'

export default function handler({query: {id}}, res) {
    const filtered = factions.filter(factions => factions.id === id )

    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    }
    else {
        res.status(404).json({ message: `Faction with the id ${id} is not found`})
    }
}
