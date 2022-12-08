<script setup lang="ts">
import type { Game } from "@/type/Game";
import { nextTick, watch } from "vue";
import vDotLoaderDirective from "@/directives/dotLoader";
//import { openModal } from "jenesius-vue-modal";
//import DetailsGame from "@/components/DetailsGame.vue";

const props = defineProps<{
  games: Game[];
}>();

let innerGame: Game[] = [];

watch(
  () => props.games,
  async (newValue, oldValue) => {
    if (newValue === oldValue) return;
    await nextTick();
    innerGame = newValue;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(async (entry) => {
        //request Steam
        if (!entry.isIntersecting) return;
        await requestSteam(entry.target.dataset.searchedname);
        observer.unobserve(entry.target);
      });
    });

    document.querySelectorAll("#listOfGames li").forEach((game: Element) => {
      observer.observe(game);
    });
  }
);

async function requestSteam(nameToSearch: string): Promise<void> {
  const index = innerGame.findIndex(
    (game) => game.searchedName === nameToSearch
  );

  try {
    const resultSearch = await fetch(
      "https://steamcommunity.com/actions/SearchApps/" + encodeURI(nameToSearch)
    );
    const resultSearchJSON = await resultSearch.json();

    if (!resultSearchJSON.length) {
      innerGame[index] = {
        ...innerGame[index],
        notFound: true,
      };
      return;
    }

    const [{ appid, icon = "", logo = "", name = "" }]: [
      { appid?: number; icon?: string; logo?: string; name?: string }
    ] = resultSearchJSON;

    const resultAppId = await fetch(
      "https://store.steampowered.com/api/appdetails?filters=categories&appids=" +
        appid
    );
    const { info } = await resultAppId.json();

    innerGame[index] = {
      ...innerGame[index],
      appid,
      logo,
      icon,
      name,
      info,
    };
  } catch (_) {
    console.log(_);
  }
}

const clickOnGame = ({ appid }: { appid: number }) => {
  window.open("https://store.steampowered.com/app/" + appid, "_blank").focus();
  //openModal(DetailsGame, { game });
};
</script>

<template>
  <ul id="listOfGames">
    <li
      v-for="game in games"
      :key="game.name"
      :data-searchedName="game.searchedName"
      :class="game.notFound && 'noLogo'"
      v-dot-loader-directive="!game.notFound && !game.logo"
      @click="clickOnGame(game.appid)"
      :style="
        game.logo && {
          background: 'url(' + game.logo + ') left center',
          backgroundSize: 'cover',
        }
      "
    >
      <div class="pin">⭐</div>
      <div class="title">
        <span class="text">
          {{ game?.notFound ? game.searchedName : game.name }}
        </span>
        <span class="addPin">🖈</span>
      </div>
      <span
        v-if="game?.notFound"
        style="top: -10px; font-size: 3.5em; text-align: center"
        >⚠</span
      >
    </li>
  </ul>
</template>

<style scoped>
ul {
  --gameWidth: 184px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--gameWidth), 1fr));
  row-gap: 1em;
  column-gap: 1em;
  list-style: none;
}
li {
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  height: calc(var(--gameWidth) * 0.38);
  border-radius: 20px;
  box-shadow: 3px 3px 25px -18px rgba(0, 0, 0, 0.4);
}
li.noLogo {
  text-align: center;
}

.pin {
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 5px;
  transform: scaleX(-1) rotate(-23deg);
}
.addPin {
  transform: scaleX(-1) rotate(-23deg);
  color: white;
  font-size: 20px;
}
.title {
  filter: drop-shadow(0px 0px 2px #000);
  font-size: 15px;
  font-weight: bolder;
  background: black;
  opacity: 0.8;
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(0deg, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0px 5px 0 20px;
}
.title .text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: flex-end;
  font-weight: bold;
}
@media (min-width: 1024px) {
}
</style>
