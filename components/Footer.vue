<template>
     <footer class="rounded-lg shadow bg-black bg-opacity-70  mt-96">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 "
          >
             <h1 class="header__name">FLS</h1>
          </a>
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-greenl2"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr
          class="my-6  sm:mx-auto border-greend2 lg:my-8"
        />
        <span
          class="block text-sm sm:text-center text-greend2"
          >© 2023
          <a href="https://flowbite.com/" class="hover:underline">FLS DEV™</a>.
          All Rights Reserved.</span
        >
      </div>
    </footer>
</template>

<style lang="scss">
.header {
  @apply px-2 py-10 bg-black bg-opacity-90 flex items-center;
  &__name {
    @apply w-1/3 ml-2 text-greenl1 text-2xl;
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  }
}
</style>