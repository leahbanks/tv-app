import { useState, useEffect } from "react";

export default function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows`)
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  });

  return (
    <div>
      {shows.map((show) => (
        <ol key={show.id}>
          <li>{show.name}</li>
          <li>{show.summary}</li>
        </ol>
      ))}
    </div>
  );
}
