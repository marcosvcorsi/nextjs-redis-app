import { useState } from "react";

export function SearchForm() {
  const [hits, setHits] = useState([]);

  const search = async (event: any) => {
    const q = event.target.value as string;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const results = await fetch("/api/search?" + params).then((res) =>
        res.json()
      );

      console.log(results);

      setHits(results);
    }
  };

  return (
    <div>
      <input type="text" onChange={search} />

      <ul>
        {hits.map((hit: any) => (
          <li key={hit.entityId}>
            {hit.make} {hit.model} - {hit.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
