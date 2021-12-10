export default function EventCard({ date, title, budget, spending}) {
    return (
      <div className="card">
        <p>{date}</p>
        <h1 className="card-title">{title}</h1>
        <p>${budget}</p>
        <p>{spending*100/budget}</p>
      </div>
    );
  }
  