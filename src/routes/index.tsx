import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { graphql } from "gql.tada";
import { Pokemons } from "../components/Pokemon";
import { client } from "../services/client";

const PokemonsQuery = graphql(`
  query Pokemons {
    pokemons {
      id
      name
      image_url
    }
  }
`);

export const Route = createFileRoute("/")({
  loader: async () => {
    const { data } = await client.query(PokemonsQuery, {});
    return data;
  },
  pendingComponent: () => {
    return <div>Loading...</div>;
  },
  component: () => {
    const { pokemons } = useLoaderData({
      from: "/",
    });
    return <Pokemons pokemons={pokemons} />;
  },
});
