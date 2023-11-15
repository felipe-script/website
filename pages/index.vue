<template>
  <canvas v-matrix-rain class="z-0" id="matrix"></canvas>
  <div class="bg-black bg-opacity-90 fixed w-full h-full"></div>
  <div class="relative">
    <header class="header">
      <h1 class="header__name">FLS</h1>
      <nav>
        <ul class="flex justify-around md:justify-center gap-10">
          <li>
            <a href="#" class="item"> Home </a>
          </li>
          <li>
            <a href="#about" class="item">Sobre</a>
          </li>
          <li>
            <a href="#" class="item"> Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div class="relative bg-opacity-50">
    <main class="relative">
      <section class="main__section h-screen items-center flex justify-center">
        <h1 class="md:text-2xl text-greenl2" id="typewriter">
        </h1>
      </section>
      <section
        class="stacks text-white bg-greend1 bg-opacity-60 p-4 rounded mb-10 h-screen"
        id="about"
      >
        <div id="about__content" class="flex flex-col h-full justify-center">
          <h1
            class="text-center mb-4 md:text-2xl bg-gradient-to-r bg-clip-text text-transparent from-greenl1 via-greend2 to-greend1 animate-text title-about"
          >
            Sobre a FLS
          </h1>
          <div class="w-1/2 mx-auto">
            <p class="text-justify text-greenl2 mt-4">
              Na FLS, acreditamos que fazer software é como criar a receita
              perfeita: uma mistura única de códigos, estratégias e doses
              generosas de paixão. Nossa equipe, composta por desenvolvedores
              que realmente amam o que fazem, está pronta para transformar suas
              ideias em algo extraordinário.
            </p>

            <p class="text-justify text-greenl2 mt-4">
              Não somos apenas nerds de código (apesar de amarmos um bom
              código e café), somos verdadeiros artesãos digitais. Imagine-nos como
              chefs de software, criando soluções personalizadas que se encaixam
              perfeitamente no cardápio exclusivo do seu negócio.
            </p>

            <p class="text-justify text-greenl2 mt-4">
              Nossas habilidades não se limitam apenas ao básico - somos a
              referência no mercado quando se trata de desenvolvimento de sites,
              sistemas web e aplicativos móveis. Mantemos nossos métodos
              atualizados, usando as últimas tendências para servir a você algo
              surpreendente e inovador.
            </p>

            <p class="text-justify text-greenl2 mt-4">
              E quando se trata de transparência, somos como um livro aberto (ou
              melhor, um código aberto). Mantemos você no loop em todas as
              etapas do desenvolvimento para que você não só esteja informado,
              mas também satisfeito com o que está sendo criado.
            </p>

            <p class="text-justify text-greenl2 mt-4">
              Na FLS, não estamos apenas construindo software; estamos
              construindo amizades duradouras e parcerias que resistirão ao
              teste do tempo. Junte-se a nós nessa jornada emocionante de
              transformar zeros e uns em algo que realmente faz a diferença.
              Estamos prontos para criar algo incrível juntos!
            </p>
          </div>
        </div>
      </section>
      <section class="stacks bg-blue-300 h-screen p-4">
        <h1 class="text-center">Stacks</h1>
        <div class="flex gap-4">
          <article class="text-justify bg-blue-500">
            <h2>Stacks utilizadas</h2>
            <p id="stacks" class="text-white">Desenvolvimento mobile</p>
          </article>
          <article class="text-justify bg-blue-500">
            <h2>Stacks utilizadas</h2>
            <p id="stacks" class="text-white"></p>
          </article>
        </div>
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
        //Olá, somos a FLS, Desenvolvemos Software com extrema qualidade.
      });
      presentation
        .pauseFor(2500)
         .typeString("Hello World!")
         .pauseFor(2000)
         .deleteChars(17)
        .typeString("Olá, somos a FLS,")
        .pauseFor(100)
        // .deleteChars(10)
        .typeString(
          `<strong class='text-greenl1'>
          Desenvolvemos Softwares </strong>com extrema qualidade  e <span class='text-greenl2'>excelência</span>`
        )
        .start();
    });
    return { icons };
  },
};
</script>

<style lang="scss">
#matrix {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.header {
  @apply px-2 py-10 bg-black bg-opacity-50 flex items-center;
  &__name {
    @apply w-1/3 ml-2 text-greenl1 text-2xl;
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  }
}
.title-about {
  font-family: "Matrix", Arial, Helvetica, sans-serif;
}
.item {
  @apply text-greenl2 hover:text-greenl1 transition-colors duration-500;
}
</style>