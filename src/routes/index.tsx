import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Pokemons } from "../components/Pokemon";
import { client } from "../services/client";
import { PokemonsQuery } from "../services/queries";

export const Route = createFileRoute("/")({
  loader: async () => {
    const { data } = await client.query(PokemonsQuery, {});
    return data;
  },
  component: () => {
    const { pokemons } = useLoaderData({
      from: "/",
    });
    return <Pokemons pokemons={pokemons} />;
  },
});
