export interface IPlanet {
  name: string;
  terrain: string;
  population: string;
}
export const Planet = (planet: IPlanet) => {
  const { name, population, terrain } = planet;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  );
};
