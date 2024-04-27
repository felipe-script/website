<template>
  <div class="mt-48">
  <h1 class="text-white text-center">Entre em contato conosco</h1>
  <form class="max-w-md mx-auto">
    <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
        address</label>
    </div>

    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
          name</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
          name</label>
      </div>
    </div>
    <div class="md:gap-6">
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-greend2  focus:border-greenl2" placeholder="Leave a comment..."></textarea>
    </div>
    <button type="submit"
      class="mt-6 text-white bg-greend1 hover:bg-greenl2 focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
  </form>
</div>
</template>
<style lang="scss" scoped>
.header {
  @apply px-2 py-10 bg-black bg-opacity-90 flex items-center;

  &__name {
    @apply w-1/3 ml-2 text-greenl1 text-2xl;
    font-family: "Matrix", Arial, Helvetica, sans-serif;
  }

  .item {
    @apply text-greenl2 hover:text-greenl1 transition-colors duration-500;
  }
}
</style>
