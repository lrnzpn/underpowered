<template>
  <div>
      <Navigation />
      <div class="spacer"></div>
        <Nuxt />
        <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'

export default {
    components: {
        Navigation
    }
}
</script>

<style lang="scss">
* {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    user-select: none;
    position: relative;
}

html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    background-color: $bg-lights-off;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

h1, h2, h3, h4, h5 {
    font-family: $header-font;
    font-weight: 700;
    margin: 0;
    color: $bg-lights-on;
    letter-spacing: 0.08em;

}

h1 {
    font-size: $font-size--8;
}

a, p, span, button {
    color: $bg-lights-on;
    font-family: $body-font;
}

p {
    font-size: $font-size--5;
    line-height: 2em;
    letter-spacing: 0.08em;
    margin: 0;

    a {
        text-decoration: underline;
    }
}

.spacer {
    height: 5em;
    transition: height .5s ease-in-out;

    @include screen('sm') {
        height: 3.25em;
    }
}

.d-block {
    display:block;
}

.w-50 {
    width: 50%;
}

// fade
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

// slide down
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100%);
    transition: all 250ms ease-in 0s;
}

.nuxt-link-exact-active, .nuxt-link-active {
    color: $asset-yellow !important;
}

.container {
    max-width: 1440px;
    width: 95%;
    margin: 0 auto;
}

.btn {
    border: 3px solid $bg-lights-on;
    border-radius: 5px;
    color: $bg-lights-on;
    background-color: $asset-black;
    font-size: $font-size--5;
    width: 100%;
    padding: .25em 2em;
}

.bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.static {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.jc-space-between {
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.flex-column {
    flex-direction: column;
}

.center {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>
