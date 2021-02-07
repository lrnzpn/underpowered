<template>
  <div class="bp-gradient"></div>
</template>

<style lang="scss" scoped>
.bp-gradient {
    height: 2.5em;
    width: 100%;
    background: $asset-bp-gradient;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @include screen('sm') {
        height: 1em
    }

    @include screen ('xs') {
        height: .75em;
    }
}
</style>