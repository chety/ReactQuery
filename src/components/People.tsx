import { useQuery } from "react-query";
import { IPerson, Person } from './Person';

const fetchPeople = async (key:string,isAwsome : boolean, name: string, age: number) => {
  // console.log('key:',key,'args:',args);
  const res = await fetch("https://swapi.dev/api/people");
  // const data = await res.json();
  return res.json();
};

const People = () => {
  const params = useQuery(["people",false,'Hello World', 3 ** 2], () => fetchPeople("people",false,'Hello World', 3 ** 2));
  const { status, data, } = params;

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return (
      <div>
        Error occured
        <details></details>
      </div>
    );
  }
  return (
    <div>
      {data!.results!.map((person: IPerson) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};

export default People;
