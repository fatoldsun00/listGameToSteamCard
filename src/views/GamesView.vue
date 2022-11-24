<script setup lang="ts">
import { ref } from "vue";
import type { Game } from "@/type/Game";
import LoadGames from "@/components/LoadGames.vue";
import ListGame from "../components/ListGame.vue";

const games = ref<Array<Game>>([]);
</script>

<template>
  <main>
    <LoadGames @update:games="games = [...$event]" />
    <div style="margin-top: 10px"></div>
    <ListGame :games="games" />
  </main>
</template>
