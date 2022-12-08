# Sommaire

[Ressources](#ressource)\
[Recherche](#recherche)\
[App](#app)
<br/>
<br/>

# <a name="ressources"></a>Ressources

> Regex StyleCheat : https://www.shortcutfoo.com/app/dojos/regex/cheatsheet\
> MarkDown basic commands : https://www.markdownguide.org/basic-syntax

<br/>

# <a name="recherche"></a>Recherche

- max-height: \w\* => max-height: 100vh
- Placer un curseur sur chaque occurence de recherch => alt + enter
  <br/>
  <br/>

# <a name="app"></a>App

## Point d'entrée

./src/index.html charge le script de bootsrap (lancement)\
`<script type="module" src="/src/main.ts"></script>`
<br/>
<br/>

## ./scr/main.ts

<br/>

bind le composant `import App from "./App.vue";` avec Vuejs

```
const app = createApp(App);
```

<br/>

charge le module store

```
app.use(createPinia());
```

- Le store permet aux composants de communiquer des states aux autres composants : on peut passer un state d'un parent a un enfant, ca s'appelle une props, mais comment passer un state entre des composant frere ? Le store est une facon de repondre a ce probleme
  <br/>
  <br/>

charge le module routeur

```
app.use(router);
```

- Le routeur permet de naviger entre les ecran de l'application, on parle de route. Une route va charger un composant : la route '/home' chargera le composant homeView par exemple. On peut créer des lien pour naviguer vers ces routes ou les activer par programmation (apres avoir acheter un episode je navigue vers l'ecran de l'episode)
  <br/>
  <br/>

monte **l'instace** vuejs sur l'element HTML (div) ayant l'id #app

```
app.mount("#app");
```

<br/>

## Componsant App.vue

<br/>

genere un lien `<a href>` qui naviguera vers la route games

```
<RouterLink to="/games">Games</RouterLink>
```

defini dans le `./src/router/index.ts`

```
{
      path: "/games",
      name: "games",
      component: () => import("../views/GamesView.vue"),
}
```

On bind le composant ./src/views/GamesView.vue avec la route /games et le nom game.

- Le nom permettra de naviguer vers la vue, dans le code ca sera plus lisible de voir router.naviguate('games') que /app/list/game par exemple. **Mais surtout : si le nom de la route change, le code non car on utilise le name.**  
  <br/>
  D'ailleurs il aurait fallu faire (games et nom /games dans le to=)

```
<RouterLink to="games">Games</RouterLink>
```

- Il n'y a **aucune** différence entre une view et un composant, en faite une view c'est un composant vers lequel on peut naviguer

`Mais ou s'affiche ce composant quand on clic sur le RouteurLink ?? Dans le composant RouterView !`

```
<RouterView />
```

<br/>

## Composant GamesView.vue

<br />

```
    const games = ref<Array<Game>>([]);
    <LoadGames @update:games="games = [...$event]" />
    <ListGame :games="games" />
```

Ici on a 2 composants, la View ne sert qu'a les afficher.  
Dans `LoadGames` on va calculer le tableau de games.  
`LoadGames` renvoie le tableau calculer en faisant un emit (`emit("update:games", games);`) du resultat.
<br/>
<br/>
Le `@update:games="games = [...$event]"` ecoute l'emit qui à comme nom `update:games` et fait `games = [...$event]` ($event etant le tableau games renvoyé par LoadGames) qui met $event dans games
<br/><br/>

> #### TS

Ici l'on a un peu de typescript. Le js n'est pas typé (on peut faire let maVar = 4; maVar = 'R') et c'est un probleme pour des applications moyennes et grandes.  
`<Array\<Game>>` specifie que games sera un tableau de Game (`import type { Game } from "@/type/Game";`) qui a cette gueule

```
export interface Game {
  appid?: number;
  logo?: string;
  icon?: string;
  name?: string;
  searchedName: string;
  info?: unknown;
  notFound?: boolean;
}
```

A partir de maintenant quand je ferrai game. VScode me proposera une cle de Game. Si j'en met une qui n'est pas dans le type il y aura une erreur TS (typescript)

> #### ref([])
>
> grace a la ref on va rendre games reactive, c-a-d que si on change la donnée dans games. Sans ca si games change les composants loadGames et ListGame ne le sauront pas et ne se mettrons pas à jour
