export default function EventForm ({user, events}) {

    let getValue = (id) => {
        return document.getElementById(id).value
      }

    let submitForm = e => {
        let newPath = user.mypath
        newPath.push(getValue("mytitle"))
        let newEvent = {
            mydate: getValue("mydate"), 
            mypath: newPath, 
            title: getValue("mytitle"), 
            budget: parseInt(getValue("mybudget")), 
            spending: 0, 
            color: getValue("mycolor"), 
            description: getValue("mydescription"), 
            mylink: getValue("mylink"), 
            hasSubevents: false
          }
        events.push(newEvent) //-------------------------------------------------------------------
        e.preventDefault()
        window.alert("Saved")
        document.getElementById("event-form").reset()
    }

    return (
        <form onSubmit={submitForm} id="event-form" className="add-event-form mt-5 bg-white rounded-t-3xl p-5">
            <label htmlFor="mydate">Date: </label>
            <input placeholder="MM/DD/YY" type="date" id="mydate" name="mydate"
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mytitle" className="text-red-500">*Title: </label>
            <input type="text" id="mytitle" name="mytitle" maxLength="50" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mybudget" className="text-red-500">*Budget: </label>
            <input type="number" id="mybudget" name="mybudget" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mycolor">Color: </label>
            <select name="mycolor" id="mycolor" className="m-2 rounded px-1 py-1">
                <option value="#a0c4ff">dark blue (default)</option>
                <option value="#ffadad">red</option>
                <option value="#ffd6a5">orange</option>
                <option value="#fdffb6">yellow</option>
                <option value="#caffbf">green</option>
                <option value="#9bf6ff">blue</option>
                <option value="#bdb2ff">purple</option>
                <option value="#ffc6ff">pink</option>
            </select><br/>
            <label htmlFor="mydescription">Description: </label>
            <input type="text" id="mydescription" name="mydescription"
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mylink">Link: </label>
            <input type="url" id="mylink" name="mylink"
                className="m-2 rounded px-1 py-1"></input><br/>
            <button type="submit" className="mr-4 p-1 bg-gray-200 border-black border rounded-md">Save</button>
            <button type="reset" className="mr-4 p-1 bg-gray-200 border-black border rounded-md">Clear</button>
        </form>        
    )
}