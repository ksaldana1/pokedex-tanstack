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

function gridToPosition(position: number) {
  switch (position) {
    case 0:
      return -250;
    case 1:
      return 250;
    case 2:
      return 0;
    default:
      return 0;
  }
}

export function Pokemon({ selected, pokemon, onClick }: PokemonProps) {
  const props = useSpring({
    scale: selected === pokemon.id ? 2 : 1,
    opacity: selected && selected !== pokemon.id ? 0 : 1,
    isSelection: selected && selected === pokemon.id ? 1 : 0,
  });
  const gridPosition = pokemon.id % 3;
  console.log("id + grid", pokemon.id, gridPosition);
  return (
    <animated.div
      onClick={() =>
        (!selected || selected === pokemon.id) && onClick(pokemon.id)
      }
      style={{
        x: props.isSelection.to([0, 1], [0, gridToPosition(gridPosition)]),
        width: props.isSelection.to([0, 1], [192, 300]),
        height: props.isSelection.to([0, 1], [192, 300]),
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
        viewTransitionName: pokemon.name,
        ...props,
        backgroundColor: props.isSelection.to([0, 1], ["white", "#74CB48"]),
      }}
      className={`flex flex-col justify-center items-center rounded-lg bg-white relative hover:bg-gray-100 hover:cursor-pointer`}
    >
      <animated.div
        style={{
          color: props.isSelection.to([0, 1], ["black", "white"]),
          y: props.isSelection.to([0, 1], [0, -50]),
        }}
        className="min-w-full text-right pe-2"
      >
        {pokemon.id.toString().padStart(4, "#000")}
      </animated.div>
      <img
        width={128}
        height={128}
        alt={pokemon.name}
        src={pokemon.image_url}
        className="z-10"
      />
      <animated.div
        style={{
          background: props.isSelection.to(
            [0, 1],
            ["rgb(239, 239, 239)", "white"]
          ),
          height: props.isSelection.to([0, 1], ["50px", "150px"]),
        }}
        className="absolute bottom-0 z-0 w-full rounded-lg h-1/3"
      />
      <animated.div
        style={{
          y: props.isSelection.to([0, 1], [0, -203]),
          x: props.isSelection.to([0, 1], [0, -25]),
          color: props.isSelection.to([0, 1], ["black", "white"]),
          scale: props.isSelection.to([0, 1], [1, 1.5]),
        }}
        className="z-10 mb-2"
      >
        {pokemon.name}
      </animated.div>
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
