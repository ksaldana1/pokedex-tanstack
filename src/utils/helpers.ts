import { match } from "ts-pattern";
import { PokemonTypes } from "../services/queries";

export function pokemonTypeToColor(type: PokemonTypes): string {
  return match(type)
    .with("Bug", () => "#A7B723")
    .with("Dark", () => "#75574C")
    .with("Dragon", () => "#7037FF")
    .with("Electric", () => "#F9CF30")
    .with("Fairy", () => "#E69EAC")
    .with("Fighting", () => "#C12239")
    .with("Fire", () => "#F57D31")
    .with("Flying", () => "#A891EC")
    .with("Ghost", () => "#70559B")
    .with("Normal", () => "#AAA67F")
    .with("Grass", () => "#74CB48")
    .with("Ground", () => "#DEC16B")
    .with("Ice", () => "#9AD6DF")
    .with("Poison", () => "#A43E9E")
    .with("Psychic", () => "#FB5584")
    .with("Rock", () => "#B69E31")
    .with("Steel", () => "#B7B9D0")
    .with("Water", () => "#6493EB")
    .with("Unknown", () => "#666666")
    .exhaustive();
}
