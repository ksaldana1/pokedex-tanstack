/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'Boolean': unknown;
    'Dimensions': { kind: 'OBJECT'; name: 'Dimensions'; fields: { 'height': { name: 'height'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'weight': { name: 'weight'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'Int': unknown;
    'Pokemon': { kind: 'OBJECT'; name: 'Pokemon'; fields: { 'baseExperience': { name: 'baseExperience'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'dimensions': { name: 'dimensions'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Dimensions'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'image_url': { name: 'image_url'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'types': { name: 'types'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'PokemonType'; ofType: null; }; } }; }; };
    'PokemonType': { kind: 'OBJECT'; name: 'PokemonType'; fields: { 'primary': { name: 'primary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'PokemonTypes'; ofType: null; }; } }; 'secondary': { name: 'secondary'; type: { kind: 'ENUM'; name: 'PokemonTypes'; ofType: null; } }; }; };
    'PokemonTypes': { name: 'PokemonTypes'; enumValues: 'Bug' | 'Dark' | 'Dragon' | 'Electric' | 'Fairy' | 'Fighting' | 'Fire' | 'Flying' | 'Ghost' | 'Grass' | 'Ground' | 'Ice' | 'Normal' | 'Poison' | 'Psychic' | 'Rock' | 'Steel' | 'Unknown' | 'Water'; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'pokemon': { name: 'pokemon'; type: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null; } }; 'pokemons': { name: 'pokemons'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Pokemon'; ofType: null; }; }; }; } }; }; };
    'String': unknown;
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: never;
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}