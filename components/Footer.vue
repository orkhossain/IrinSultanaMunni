<template>
  <nuxt-ui-grid class="footer" :cols="['3fr', '1fr']">
    <nuxt-ui-grid-item :span="1">
      <div class="py-4 bg-gray-200 text-center">
        <p class="text-gray-600">&copy; 2023 Your Name</p>
      </div>
    </nuxt-ui-grid-item>
    <nuxt-ui-grid-item :span="1">
      <div class="py-4 bg-gray-300 text-center">
        <ul class="list-none p-0">
          <li class="mb-2">
            <a href="#" class="text-blue-500 hover:text-blue-700 transition-all duration-300">About</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-green-500 hover:text-green-700 transition-all duration-300">Services</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-purple-500 hover:text-purple-700 transition-all duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nuxt-ui-grid-item>
  </nuxt-ui-grid>
</template>

<script>
export default {};
</script>

<style>
/* You can customize styles here if needed */
ul li {
  list-style: none;
}

ul li a {
  text-decoration: none;
}

/* Additional TailwindCSS classes can be added here */
</style>
