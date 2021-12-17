import Link from 'next/link'
import EventCard from "./EventCard"

export default function MidDisplay({user, events, spendings}) {

    let thisEvent = events.filter(f => {if(JSON.stringify(f.mypath) === JSON.stringify(user.mypath)){return true}})[0]

    // totals up spending for that level
    const countSpending = (c) => {
        return(spendings.filter(f => 
            {if (JSON.stringify(f.mypath) === JSON.stringify(c.mypath)){
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
            <h2 className="app-name">{user.mypath[user.mypath.length - 1]}</h2>
            {events.filter(f => {if((JSON.stringify(f.mypath.slice(0,thisEvent.mypath.length)) === JSON.stringify(user.mypath))&&(f.mypath.length > user.mypath.length)){return true}}).forEach(e => updateTotals(e))}
            <div className="sum-numbers">
                <p>Total Budget Assigned: ${levelBudget}</p>
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
                {events.filter(f => {if((JSON.stringify(f.mypath.slice(0,thisEvent.mypath.length)) === JSON.stringify(user.mypath))&&(f.mypath.length > user.mypath.length)){return true}}).filter(f => 
                    (!f.hasSubevents)).map(e =>
                    <EventCard useEvents key={e.mypath} date={e.date} title={e.title} budget={e.budget} spending={countSpending(e)} color={e.color} hasSubevents={e.hasSubevents}/>)}
            </div>
        </div>
    )
}