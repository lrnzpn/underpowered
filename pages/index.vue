<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        underpowered
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
h1 {
    color: $red;
    font-family: $header-font;
}

a {
    font-family: $body-font;
}
</style>
