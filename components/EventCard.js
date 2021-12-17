export default function EventCard({ user, date, title, budget, spending, color, hasSubevents}) {

  // allows event card to be color assigned by user
  let styleCard = {
    backgroundColor: color.toString()
  }
  // if event has subevents, display stacked look
  if (hasSubevents) {
    styleCard = {...styleCard,
      boxShadow: "5px 5px 1px gray"
    }
  }

  // calculate spending to budget ratio for event progress bar
  let progress = Math.round(spending/budget*100)
  const styleProgress = {
    width: progress.toString()+"%",
  }

  // redirect user to appropriate detail page
  let destination = "./budget"
  const redirect = () => {
    //update user.mypath with event title
    user.mypath.push(title) //-------------------------------------------------------------------------------------
    // go to middle level
    if (hasSubevents) {
      destination = "./budgetMid"
      if(typeof window !== "undefined") {
        document.location.href = destination
      }
    } 
    // go to base level
    else {
      destination = "./budgetBase"
      if(typeof window !== "undefined") {
        document.location.href = destination
      }
    }
    
  }

  return (
    <button onClick={redirect} className="card w-2/5 rounded-2xl p-3 bg-white mr-3 mb-3 text-left" style={styleCard}>
      <div>
        <p>{mydate}</p>
        <h3 className="card-title mb-5">{title}</h3>
        <div className="flex flex-row justify-between">
        <p>${budget}</p>
        <p>{progress}%</p>
        </div>
        <div className="progress ">
          <div className="progress-bar" role="progressbar" aria-valuenow={progress.toString()}
            aria-valuemin="0" aria-valuemax="100" style={styleProgress}>
          </div>
        </div>
      </div>
    </button>
  );
}  
  