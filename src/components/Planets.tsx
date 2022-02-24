import { IPlanet, Planet } from "./Planet";
import { useQuery } from "react-query";
import { useState } from "react";

const fetchPlanets = async (page: number) => {
  const res = await fetch(`https://swapi.dev/api/planets?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState<number>(1);
  const { isError, isLoading, error, data, isFetching, } =
    useQuery(["planets", page], () => fetchPlanets(page), {
      staleTime: 5_000, // {number} seconds RQ will think our data is fresh.(Default is 0)
      cacheTime: 5_000, // During {number} seconds RQ will read data from cache if a new API call is requested
      onSuccess: (data) => {
        console.log(`Got Data Successfully. Data -> `, data);
      },
      keepPreviousData: true,
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isFetching) {
    return <div>Please Wait...</div>
  }
  if (isError) {
    return (
      <div>
        Error occured
        <details>{(error as Error).message}</details>
      </div>
    );
  }

  return (
    <>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span>{page}</span>
      <button
        onClick={() => {
          if (data?.next) {
            setPage(page + 1);
          }
        }}
        disabled={!data.next}
      >
        Next
      </button>
      <div>
        {data.results.map((planet: IPlanet) => {
          return <Planet key={planet.name} {...planet} />;
        })}
      </div>
      
    </>
  );
};

export default Planets;
