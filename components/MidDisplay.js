import Link from 'next/link'
import { useEvents } from '../context/EventContext'
import { useUser } from '../context/UserContext'
import EventCard from "./EventCard"
import FilterByLevel from './FilterByLevel'
import { useSpendings } from '../context/SpendingContext'

export default function MidDisplay() {

    const { user, setUser } = useUser()

    // TODO: get name of level
    const { events, setEvents } = useEvents()
    let thisEvent = events.filter(f => {if(JSON.stringify(f.path) === JSON.stringify(user.path)){return true}})[0]

    const { spendings, setSpendings } = useSpendings()

    // totals up spending for that level
    const countSpending = (c) => {
        return(spendings.filter(f => 
            {if (JSON.stringify(f.path) === JSON.stringify(c.path)){
                return true
            }}
            ).map(e=>e.amount).reduce((a,b) => a+b, 0))    
    }

    // add up spending and budgets to be used in function getLevelProgress
    let levelBudget = 0
    let levelSpending = 0
    const updateTotals = (e) => {
        let current = levelBudget
        current += e.budget 
        levelBudget = current
        levelSpending += countSpending(e)
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
        <div className="event-display bg-white rounded-t-3xl mt-5 p-5">
            <h2 className="app-name">{user.path[user.path.length - 1]}</h2>
            {events.filter(f => {if(JSON.stringify(f.path) === JSON.stringify(user.path)){return true}}).forEach(e => updateTotals(e))}
            <div className="sum-numbers">
                <p>Total Budget: ${levelBudget}</p>
                <p>Total Spending: ${levelSpending}</p>
                <p>Total Available: ${levelBudget - levelSpending}</p>
            </div>
            <div className="progress-total"> 
                {getLevelProgress()}
            </div>
            <div className="add-event-button">
                <Link href="./addEvent">
                    <button  className="mr-4 p-1 bg-gray-200 border-black border rounded-md">Add Event at this Level</button>
                </Link>
                <p>Description: <br/>{thisEvent.description}</p>
            </div>
            <div className="my-events">
                {events.filter(f => {if(JSON.stringify(f.path) === JSON.stringify(user.path)){return true}}).map(e =>
                    <EventCard useEvents key={e.path} date={e.date} title={e.title} budget={e.budget} spending={countSpending(e)} color={e.color} hasSubevents={e.hasSubevents}/>)}
            </div>
        </div>
    )
}