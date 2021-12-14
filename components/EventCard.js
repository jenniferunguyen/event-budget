// import { IconBluetooth } from "@supabase/ui";
// import { getMiddlewareManifest } from "next/dist/client/route-loader";

export default function EventCard({ date, title, budget, spending, color, hasSubevents}) {

  // allows event card to be color assigned by user
  let styleCard = {
    // borderColor: color.toString(),
    backgroundColor: "light"+color.toString()
  }
  // if event has subevents, display stacked look
  if (hasSubevents) {
    styleCard = {...styleCard,
      // boxShadow: "5px 5px 1px "+color.toString()
      boxShadow: "5px 5px 1px gray"
    }
  }

  // calculate spending to budget ratio for event progress bar
  let progress = Math.round(spending/budget*100)
  const styleProgress = {
    width: progress.toString()+"%",
  };

  return (
    // TODO: change to buttons once able to add event
    // TODO: button must update user.path, add end button, add description
    <div className="card" style={styleCard}>
      <p>{date}</p>
      <h3 className="card-title">{title}</h3>
      <p>${budget}</p>
      <p>{progress}%</p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={progress.toString()}
        aria-valuemin="0" aria-valuemax="100" style={styleProgress}>
        </div>
      </div>
    </div>
  );
}  
  