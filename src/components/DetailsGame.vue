<script setup lang="ts">
import type { Game } from "@/type/Game";

const props = defineProps<{
  game: Game;
}>();
</script>

<template>
  <div class="modal-window">{{ game.name }}</div>
</template>

<style scoped>
.modal-window {
  padding: 10px;
  background-color: white;
  border-radius: 4px;
}
</style>
