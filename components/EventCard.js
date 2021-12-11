import { IconBluetooth } from "@supabase/ui";
import { getMiddlewareManifest } from "next/dist/client/route-loader";

export default function EventCard({ date, title, budget, spending, color, hasSubevents}) {

  let progress = Math.round(spending/budget*100)
  console.log(progress)

  const styleCard = {
    background: color.toString(),
  }
  if (hasSubevents) {
    styleCard = {...styleCard,
      boxShadow: "5px 5px 1px gray"
    }
  }

  const styleProgress = {
    width: progress.toString()+"%",
    height: "15px",
    background: "green",
    border: "black",
  };

  return (
    <div className="card" style={styleCard}>
      <p>{date}</p>
      <h2 className="card-title">{title}</h2>
      <p>${budget}</p>
      <p>{progress}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow={progress.toString()}
        aria-valuemin="0" aria-valuemax="100" style={styleProgress}>
        </div>
      </div>
      
    </div>
  );
}  
  