import { graphql, ResultOf } from "gql.tada";

export const PokemonsQuery = graphql(`
  query Pokemons {
    pokemons {
      id
      name
      image_url
      types {
        primary
        secondary
      }
    }
  }
`);

export type PokemonTypes = ResultOf<
  typeof PokemonsQuery
>["pokemons"][number]["types"]["primary"];
