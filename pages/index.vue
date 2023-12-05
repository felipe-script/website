<template>
  <canvas v-matrix-rain class="z-0 fixed" id="matrix"></canvas>
  <div class="bg-black bg-opacity-90 fixed w-full h-full"></div>
  <Header/>
  <div class="relative bg-opacity-50">
    <main class="relative">
      <section class="h-screen items-center flex justify-center">
        <span class="md:text-2xl text-greenl2" id="typewriter"></span>
      </section>
      <About/>
       <Products/>
    </main>
    <footer class="h-1  mt-10">footer</footer>
  </div>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/24/solid";
import matrixRainDirective from "@/directives/matrix.js";
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";
import Header from "@/components/Header.vue"
import About from "@/components/About.vue"
import Products from "@/components/Products.vue"

export default {
  directives: {
    matrixRain: matrixRainDirective,
  },
  components:{
    Header,
    About,
    Products
  },
  setup() {
    //<component :is="icons.beaker" class="h-5 w-5"></component>
    // const icons = reactive({
    //   beaker: BeakerIcon,
    // });

    onMounted(() => {
      const app = "#typewriter";
      const presentation = new Typewriter(app, {
        loop: true,
      });
      presentation
        .pauseFor(2500)
        .typeString("Hello World!")
        .pauseFor(2000)
        .deleteChars(17)
        .typeString("Olá, somos a FLS,")
        .pauseFor(100)
        .typeString(
          `<strong class='text-greenl1'>
          Desenvolvemos Softwares </strong>com extrema qualidade  e <span class='text-greenl2'>excelência</span>`
        )
        .start();
    });
   
  },
};
</script>

<style lang="scss">
  /* .text-matrix{
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  } */
</style>