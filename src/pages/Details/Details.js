import React from "react";
import Card from "./Card/Card";
import useFetcher from "./hooks/useFetcher";
const Details = () => {
  const url = "https://swapi.dev/api/people";
  const [people, loading] = useFetcher(url);
  if (loading) return <p>Loading ...</p>;
  console.log(people);

  return (
    <div>
      {people.results.map((person, index) => (
        <Card key={index} person={person} />
      ))}
    </div>
  );
};
export default Details;
