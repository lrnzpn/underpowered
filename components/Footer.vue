<template>
  <footer class="center flex-column">
      <img :src="require('~/assets/logos/GDN_Horizontal-whitetext.png')" alt="tgdn">
      <span class="about">About the Interactive</span>
      <div class="credits">
            <p>
                Interactive designed and developed by Pauline Baterna, Daniel Del Rio, and Miggy Pinaroc
            </p>
            <p>
                Graphics by Kaitlyn W. Mercado
            </p>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    background-color: $asset-camo-green;
    color: $bg-lights-on;
    padding: 4.5em;

    @include screen('sm') {
        padding: 3em;
    }

    img {
        height: 100%;
        width: 250px;
    }

    span {
        display: block;
        text-transform: uppercase;
        margin: 1.5rem 0 1rem 0;
    }

    p {
        text-align: center;
        margin: 5px 0;
    }

    span, p {
        font-family: 'Chivo', sans-serif !important;
        font-size: $font-size--3;
        font-weight: 300;
    }
}
</style>