import { useUser } from '../context/UserContext'
import { useSpendings } from '../context/SpendingContext'
import { useEvents } from '../context/EventContext'
import FilterByLevel from './FilterByLevel'

export default function SpendingForm () {
 
    const { user, setUser } = useUser()
    const { events, setEvents } = useEvents()
    const { spendings, setSpendings } = useSpendings()

    const getValue = (id) => {
        if(typeof window !== "undefined") {
            return document.getElementById(id).value
          }
    }  
        
    let submitForm = e => {
        let newSpending = {
            date: getValue("mydate"), 
            path: getValue("mypath"), 
            title: getValue("mytitle"), 
            amount: parseInt(getValue("myamount"))
        }
        spendings.push(newSpending)
        // e.preventDefault()
        window.alert("Saved")
        document.getElementById("spending-form").reset()
    }

    return (
        <form onSubmit={submitForm} id="spending-form" className="bg-white rounded-t-3xl mr-3 p-5 max-w-full">
            <h2>Add Spending at this Level</h2>
            <label htmlFor="mydate" className="text-red-500">*Date: </label>
            <input placeholder="MM/DD/YY" type="date" id="mydate" name="mydate" required={true}></input><br/>
            <label htmlFor="mypath" className="text-red-500">*Event: </label>
            <select id="mypath" name="mypath">
                {events.filter(
                    f => <FilterByLevel item={f}/>).filter(
                        f => {if(!f.hasSubevents){return true}}).map(
                            e => <option value={e.path}>{JSON.stringify(e.path)}</option>)}
                </select><br/>
            <label htmlFor="mytitle" className="text-red-500">*Title: </label>
            <input type="text" id="mytitle" name="mytitle" maxLength="50" required={true}></input><br/>
            <label htmlFor="myamount" className="text-red-500">*Amount: </label>
            <input type="number" id="myamount" name="myamount" required={true}></input><br/>
            <div className="flex justify-center">
                <button type="submit" className="mr-4 p-1 bg-gray-200 border-black border rounded-md">Save</button>
                <button type="reset" className="p-1 bg-gray-200 border-black border rounded-md">Cancel</button>
            </div>
            
        </form>        
    )
}