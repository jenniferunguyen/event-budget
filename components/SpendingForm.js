import { useUser } from '../context/UserContext'
import { SpendingContext, useSpendings } from '../context/SpendingContext'
import Link from 'next/link'

export default function SpendingForm () {

    const { user, setUser } = useUser()
    const { spendings, setSpendings } = useSpendings()

    const isBrowser = typeof window !== "undefined";

    let getValue = (id) => {
        return document.getElementById(id).value
    }  
        
    let submitForm = e => {
        let newSpending = {
            date: getValue("mydate"), 
            path: user.path, 
            title: getValue("mytitle"), 
            amount: parseInt(getValue("myamount"))
        }
        spendings.push(newSpending)
        // e.preventDefault()
        e.stopImmediatePropagation()
        console.log(spendings)
        window.alert("Saved")
        document.getElementById("spending-form").reset()
    }

    return (
        <form onSubmit={submitForm} id="spending-form" className="add-spending-form">
            <h2>Add Spending at this Level</h2>
            <label htmlFor="mydate" className="text-red-500">*Date: </label>
            <input placeholder="MM/DD/YY" type="date" id="mydate" name="mydate" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mytitle" className="text-red-500">*Title: </label>
            <input type="text" id="mytitle" name="mytitle" maxLength="50" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="myamount" className="text-red-500">*Amount: </label>
            <input type="number" id="mybudget" name="mybudget" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <button type="submit">Save</button>
            <button type="reset">Cancel</button>
        </form>        
    )
}