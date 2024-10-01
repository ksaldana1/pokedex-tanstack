import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

export interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    image_url: string;
  };
  onClick: (id: number) => void;
  selected: number | null;
}

export function Pokemon({ selected, pokemon, onClick }: PokemonProps) {
  const props = useSpring({
    scale: selected === pokemon.id ? 2 : 1,
    opacity: selected && selected !== pokemon.id ? 0 : 1,
  });
  return (
    <animated.div
      onClick={() => onClick(pokemon.id)}
      style={{
        width: 192,
        height: 192,
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
        viewTransitionName: pokemon.name,
        ...props,
      }}
      className={`flex flex-col justify-center items-center rounded-lg bg-white relative hover:bg-gray-100 hover:cursor-pointer`}
    >
      <div className="min-w-full text-right pe-2">
        {pokemon.id.toString().padStart(4, "#000")}
      </div>
      <img
        width={128}
        height={128}
        alt={pokemon.name}
        src={pokemon.image_url}
        className="z-10"
      />
      <div
        style={{ background: "rgb(239, 239, 239)" }}
        className="absolute bottom-0 z-0 w-full rounded-lg h-1/3"
      />
      <div className="z-10 mb-2">{pokemon.name}</div>
    </animated.div>
  );
}

export function Pokemons({
  pokemons,
}: {
  pokemons: Array<PokemonProps["pokemon"]>;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="w-1/2 grid grid-cols-3 gap-x-0 gap-y-4 py-4">
      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            selected={selected}
            onClick={(id) =>
              selected === id ? setSelected(null) : setSelected(id)
            }
          />
        );
      })}
    </div>
  );
}
