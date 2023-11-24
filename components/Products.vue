<template>
  <!-- <h1
  id="product"
    class="text-center text-3xl mb-10 bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-red-700 to-blue-700 animate-text"
  >
    TAKE YOUR PILL
  </h1> -->
  <h1
    id="products"
    class="text-xl italic font-semibold text-greenl2 w-1/2 mx-auto mb-12"
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
      believe whatever you want to believe. You take the red pill... you stay in
      Wonderland, and I show you how deep the rabbit hole goes."
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
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Aplicativos Mobile
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Desenvolvemos aplicativos mobile multiplataforma, oferecendo uma
          experiência versátil e inovadora tanto no Android quanto no iOS.
          Alcance eficientemente todos os usuários.
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Desenvolvimento web
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Temos expertise em soluções web com mais variados produtos como Sites
          e Sistemas web, carteira digitais, sistemas de estoque, E-commerce e
          muito mais.
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            UX/UI
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Na criação de experiência UX/UI, buscamos a harmonia entre design
          intuitivo e funcionalidades envolventes. Nossa abordagem centrada no
          usuário transforma conceitos em interfaces atraentes, garantindo uma
          experiência fluida e memorável.
        </p>
      </div>
    </div>

    <div class="flex gap-5 flex-col items-center">
      <img :src="redPillIcon" alt="my-logo" class="w-28 animate-pulse" />
      <div
        class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Cloud computing
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Utilizamos tecnologia de Cloud Computing em todos os nossos produtos,
          garantindo escalabilidade, segurança e desempenho otimizado.
          Proporcionamos soluções inovadoras na nuvem para impulsionar o sucesso
          do seu negócio.
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Desenvolvimento back-end
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Desenvolvimento back-end é a espinha dorsal de sistemas, lidando com
          lógica, banco de dados e integração. Utilizamos algumas tecnologias
          como Node.js entre outras para criar servidores robustos, garantindo o
          funcionamento eficiente das aplicações.
        </p>
      </div>
      <div
        class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Clusters
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Cluster de Banco de Dados para aprimorar a confiabilidade e
          escalabilidade de nossos sistemas. Ao adotar essa abordagem avançada,
          garantimos maior disponibilidade, distribuição equilibrada de carga e
          resiliência, proporcionando uma base sólida para a gestão eficiente e
          segura de dados em nossas operações.
        </p>
      </div>
    </div>
  </div>
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