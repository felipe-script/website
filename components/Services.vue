<template>
  <section class="p-4" id="products">
    <h1
      class="text-xl italic font-semibold text-greenl2 w-1/2 mx-auto mb-12 mt-28"
    >
      <svg
        class="w-8 h-8 text-greend2 mb-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path
          d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
        />
      </svg>
      <p>
        "You take the blue pill... the story ends, you wake up in your bed and
        believe whatever you want to believe. You take the red pill... you stay
        in Wonderland, and I show you how deep the rabbit hole goes."
        <small class="text-sm">- Morpheus</small>
      </p>
    </h1>
    <div
      class="flex gap-5 flex-col items-center md:flex-row md:justify-center md:items-start"
    >
      <div class="flex gap-5 flex-col items-center">
        <img
          :src="bluePillIcon"
          alt="my-logo"
          class="w-28 animate-pulse duration-200"
        />
        <div
          class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Aplicativos Mobile
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            Desenvolvedor especializado em
            <span class="underline decoration-red-500">React Native</span>. para
            aplicativos móveis multiplataforma (Android/iOS) com vasta
            experiência em áreas como finanças, logística e cuidados com
            pessoas. Aplico práticas rigorosas de teste, incluindo testes
            unitários e end-to-end, para assegurar qualidade e confiabilidade
            nas aplicações.
          </p>
        </div>

        <div
          class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Desenvolvimento web
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            Com ampla experiência em desenvolvimento web e foco em modernizar
            sistemas legados, atuei em diversos projetos, incluindo sites,
            carteiras digitais e sistemas de e-commerce experiência em
            tecnologias como:
            <span class="underline decoration-red-500"
              >HTML, CSS, JavaScript, React, Vue.js, Next.js, Nuxt</span
            >, entre outras.
          </p>
        </div>

        <div
          class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              UX/UI
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            Criação de experiência UX/UI, buscamos a harmonia entre design
            intuitivo e funcionalidades envolventes. Nossa abordagem centrada no
            usuário transforma conceitos em interfaces atraentes, garantindo uma
            experiência fluida e memorável usando ferramentas como
            <span class="underline decoration-red-500">figma</span>,
            <span class="underline decoration-red-500">photoshop</span> e
            outros..
          </p>
        </div>
      </div>

      <div class="flex gap-5 flex-col items-center">
        <img :src="redPillIcon" alt="my-logo" class="w-28 animate-pulse" />
        <div
          class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Desenvolvimento Back-end
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            Conhecimento com back-end criações de API REST , faço uso de
            tecnologias como
            <span class="underline decoration-blue-500"
              >Node.js, Express, MySQL e MongoDB...</span
            >
          </p>
        </div>

        <div
          class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Infraestrutura
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            Experiência em implementação de aplicações utilizando serviços como
            <span class="underline decoration-blue-500"
              >AWS, Vercel e Netlify.</span> Além disso, possuo expertise na otimização de
            desempenho e escalabilidade, proporcionando soluções eficientes para
            ambientes de nuvem.
          </p>
        </div>
        <!-- <div
          class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
        >
          <a href="javascript:void(0)" class="cursor-default">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
              Dev Ops
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-300">
            possuo conhecimento com github actions, docker
          </p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import bluePillIcon from "@/assets/images/blue-pill.svg";
import redPillIcon from "@/assets/images/red-pill.svg";
</script>

<style lang="scss">
.matrix-text {
  font-family: "Matrix", Arial, Helvetica, sans-serif;
}
</style>