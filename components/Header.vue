<template>
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
</template>
<style lang="scss" scoped>
.header {
  @apply px-2 py-10 bg-black bg-opacity-50 flex items-center;
  &__name {
    @apply w-1/3 ml-2 text-greenl1 text-2xl;
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  }
  .item {
  @apply text-greenl2 hover:text-greenl1 transition-colors duration-500;
}
}
</style>