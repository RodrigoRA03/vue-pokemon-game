<template>
   <div class="options-container">
      <ul>
         <li v-for="(pokemon, index) in pokemons" :key="pokemon.id" @click="selectPokemon(pokemon)">{{ pokemon.name }}</li>
      </ul>
   </div>
</template>
<script lang="ts">
import { PropType } from 'vue';

type PokemonArrInterface = {
   name: string;
   id: string;
}
export default {
   emits: ["selectionPokemon"],
   props: {
      pokemons: {
         type: Array as PropType<PokemonArrInterface[]>,
         required: true
      }
   },
   methods: {
      selectPokemon(pokemon: PokemonArrInterface) {
         this.$emit("selectionPokemon", pokemon);
      }
   }
}
</script>
<style scoped>
/* Pokemon Options */
ul {
   list-style-type: none;
}

li {
   background-color: white;
   border-radius: 5px;
   border: 1px solid rgba(0, 0, 0, 0.2);
   cursor: pointer;
   margin-bottom: 10px;
   width: 250px;
   text-align: center;
}

li:hover {
   background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
   display: flex;
   justify-content: center;
}
</style>