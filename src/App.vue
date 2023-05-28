<template>
  <PokemonPage/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PokemonPage from './pages/PokemonPage.vue';


@Options({
  components: {PokemonPage},
})
export default class App extends Vue {}
</script>