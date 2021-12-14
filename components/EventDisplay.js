import Link from 'next/link'
import { EventContext, useEvents } from '../context/EventContext'
// import { useUser } from '../context/UserContext'
import EventCard from "./EventCard"
import FilterByLevel from './FilterByLevel'

export default function EventDisplay() {

    const { events, setEvents } = useEvents()

    // add up spending and budgets to be used in function getLevelProgress
    let levelBudget = 0
    let levelSpending = 0
    const updateTotals = (e) => {
        let current = levelBudget
        current += e.budget 
        levelBudget = current
        current = levelSpending
        current += e.spending
        levelSpending = current
      }    

    // calculate spending to budget ratio for level progress bar
    const getLevelProgress = () => {
        let progress = Math.round(levelSpending/levelBudget*100)
        return (
            <div className="progress-bar" role="progressbar" aria-valuenow={progress.toString()}
                aria-valuemin="0" aria-valuemax="100" style={{width: progress.toString()+"%"}}>
            </div>
        )
    }

    return (
        <div className="event-display">
            <h2 className="app-name">My Events</h2>
            {events.filter(f => <FilterByLevel level={f}/>).forEach(e => updateTotals(e))}
            <div className="sum-numbers">
                <p>Total Budget: ${levelBudget}</p>
                <p>Total Spending: ${levelSpending}</p>
                <p>Total Available: ${levelBudget - levelSpending}</p>
            </div>
            <div className="progress-total"> 
                {getLevelProgress()}
            </div>
            <div className="my-events">
                {/* TODO: button to direct to add event at this level */}
                <Link href="./addEvent"><button className="add-event-button">Add Event at this Level</button></Link>
                {events.filter(f => <FilterByLevel level={f}/>).map(e =>
                    <EventCard useEvents key={e.path} date={e.date} title={e.title} budget={e.budget} spending={e.spending} color={e.color} hasSubevents={e.hasSubevents}/>)}
            </div>
            {console.log(events)}
        </div>
    )
}