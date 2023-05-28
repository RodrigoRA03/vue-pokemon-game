<template lang="">
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon?.id" :showPokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="getPokemonSelected"/>
    </div>
    <template v-if="showPokemon">
        <h2 >{{ message }}</h2>
        <button @click="newGame">
            Reiniciar Juego
        </button>
    </template>   
</template>
<script lang="ts">
import PokemonPicture from "@/components/PokemonPicture.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
import getPokemonOptions from "@/helpers/getPokemonOptions"

interface initialData {
    pokemonArr: PokemonArrInterface[];
    pokemon: PokemonArrInterface | null;
    showPokemon: boolean;
    message: string;
}

interface PokemonArrInterface {
    name: string;
    id: number;
}


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data(): initialData {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            message: ""
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonArr[rndInt];

        },
        getPokemonSelected(selectionPokemon: PokemonArrInterface) {
            this.showPokemon = true;
            if (selectionPokemon.id === this.pokemon!.id) {
                this.message = `Correcto , es ${this.pokemon!.name}`
            } else {
                this.message = `Ups , era ${this.pokemon!.name}`
            }
        },
        async newGame() {
            this.showPokemon = false;
            this.message = "";
            this.mixPokemonArray();
        }
    },
    mounted() {
        this.showPokemon = false;
        this.mixPokemonArray()
    }
}
</script>
<style scoped>
h1,
h2 {
    text-align: center;
}
</style>