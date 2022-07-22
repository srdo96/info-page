import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const Details = () => {
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setLoading(false);
      });
  }, []);

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
