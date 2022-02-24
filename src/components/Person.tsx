export interface IPerson {
  name: string;
  height: string;
  mass: string;
}
export const Person = (person: IPerson) => {
  const { name, height, mass } = person;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
    </div>
  );
};
