<template>
  <canvas v-matrix-rain class="absolute z-0 w-full"></canvas>
  <div class="bg-black bg-opacity-90 absolute w-full h-full"></div>
  <div class="relative">
    <header class="header">
      <h1 class="header__name">Felipe.L dev</h1>
      <nav>
        <ul class="flex justify-around md:justify-center gap-10">
          <li>
            <a href="#" class="item"> Home </a>
          </li>
          <li>
            <a href="#" class="item">Sobre</a>
          </li>
          <li>
            <a href="#" class="item"> Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="relative">
    <main class="m-4">
      <section class="main__section">
        <h1 class="text-center md:text-3xl text-greenl2 mt-32" id="typewriter">
          Olá, eu sou o Felipe.L, Desenvolvedor de Software
        </h1>

        <article class="text-justify">
          <h2 hidden>Stacks utilizadas</h2>
          <p id="stacks"></p>
        </article>
      </section>
    </main>
    <!-- <footer>footer</footer> -->
  </div>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/24/solid";
import matrixRainDirective from "@/directives/matrix.js";
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";
export default {
  directives: {
    matrixRain: matrixRainDirective,
  },
  setup() {
    //<component :is="icons.beaker" class="h-5 w-5"></component>
    const icons = reactive({
      beaker: BeakerIcon,
    });

    onMounted(() => {
      const app = "#typewriter";
      const presentation = new Typewriter(app, {
        loop: true,
        // delay: 75,
      });
      presentation
        .pauseFor(2500)
        .typeString("Olá eu sou o Felipe.L")
        .pauseFor(100)
        .deleteChars(10)
        .typeString(
          `<strong class='text-greenl1'>
          Desenvolvedor Front-end </strong>com foco em aplicações <span class='text-greenl2'>web e mobile</span>`
        )
        .start();
    });
    return { icons };
  },
};
</script>

<style lang="scss">
.header {
  @apply px-2 py-10 bg-black bg-opacity-50 flex items-center;
  &__name {
    @apply w-1/3 ml-2 text-greenl1 text-2xl;
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  }
}
.item {
  @apply text-greenl2 hover:text-greenl1 transition-colors duration-500;
}
</style>