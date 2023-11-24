<template>
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
          Desenvolvemos Aplicativos mobile multiplataforma ou seja tanto para
          ANDROID quanto IOS para que seu produto alcance todos os usuários.
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-blue-700 border border-transparent hover:border-blue-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Sites e Sistemas web
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Temos expertise em soluções web com mais mais variados produtos no
          setor financeiro como carteira digitais, sistemas de estoque, ERP e
          muito mais.
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
          Todas as nossas aplicacoes utilizam computacao em nuvem
        </p>
      </div>

      <div
        class="max-w-sm p-6 bg-red-700 border border-transparent hover:border-red-500 transition-colors duration-500 rounded-lg shadow"
      >
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Lorem ipsum 4
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-300">
          Temos expertise em soluções web com mais mais variados produtos no
          setor financeiro como carteira digitais, sistemas de estoque, ERP e
          muito mais.
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
.take-pill {
  font-family: "Matrix", Arial, Helvetica, sans-serif;
}
</style>