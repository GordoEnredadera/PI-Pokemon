import React from "react";
export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <li key={number}>
                <button
                  onClick={() => pagination(number)}
                >
                  {number}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}