import { useSpring, animated } from "@react-spring/web";
import { useRef, useState } from "react";
import { PokemonTypes } from "../services/queries";
import { pokemonTypeToColor } from "../utils/helpers";

export interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    image_url: string;
    types: {
      primary: PokemonTypes;
    };
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
  const ref = useRef<HTMLDivElement>(null);
  const props = useSpring({
    opacity: selected && selected !== pokemon.id ? 0 : 1,
    isSelection: selected && selected === pokemon.id ? 1 : 0,
  });

  function click() {
    console.log(ref.current?.getBoundingClientRect());
    return (!selected || selected === pokemon.id) && onClick(pokemon.id);
  }
  const gridPosition = pokemon.id % 3;

  const [scaleX, scaleY] = [360 / 104, 540 / 108];
  return (
    <animated.div
      ref={ref}
      onClick={click}
      style={{
        ...props,
        scaleX: props.isSelection.to([0, 1], [1, scaleX]),
        scaleY: props.isSelection.to([0, 1], [1, scaleY]),
        x: props.isSelection.to([0, 1], [0, gridToPosition(gridPosition)]),
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
        transformOrigin: "center",
        backgroundColor: props.isSelection.to(
          [0, 1],
          ["white", pokemonTypeToColor(pokemon.types.primary)]
        ),
      }}
      className={`flex flex-col justify-center items-center rounded-lg bg-white relative hover:bg-gray-100 hover:cursor-pointer`}
    >
      <animated.div
        style={{
          color: props.isSelection.to([0, 1], ["black", "white"]),
          fontFamily: "Poppins",
          y: props.isSelection.to([0, 1], [0, -10]),
          fontSize: props.isSelection.to([0, 1], [10, 5]),
          translateZ: 0,
          opacity: props.isSelection.to([0, 1], [70, 1]),
        }}
        className="min-w-full text-right pe-2 pt-2"
      >
        {pokemon.id.toString().padStart(4, "#000")}
      </animated.div>
      <animated.img
        width={72}
        height={72}
        alt={pokemon.name}
        src={pokemon.image_url}
        className="z-10"
        style={{
          y: props.isSelection.to([0, 1], [0, -25]),
        }}
      />
      <animated.div
        style={{
          background: props.isSelection.to(
            [0, 1],
            ["rgb(239, 239, 239)", "white"]
          ),
          height: props.isSelection.to([0, 1], ["44px", "76px"]),
        }}
        className="absolute bottom-0 z-0 w-full rounded-lg h-1/3 mx-8"
      >
        Hello World
      </animated.div>
      <animated.div
        style={{
          color: props.isSelection.to([0, 1], ["black", "white"]),
          fontFamily: "Poppins",
        }}
        className="z-10 mb-2 text-xs"
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
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 py-4">
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
