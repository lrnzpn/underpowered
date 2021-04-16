<template>
  <div>
        <transition name="fade">
            <Loading v-if="showHideSpinner"/>
        </transition>
        <Navigation />
        <div class="spacer"></div>
        <Nuxt />
        <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

export default {
    components: {
        Navigation,
        Loading,
        Footer
    },
    beforeCreate() {
        this.showHideSpinner = true;
    },
    mounted() {
        setTimeout(() => {
            this.showHideSpinner = false;
        }, 2000)
    },
    data() {
        return {
        showHideSpinner: true
        };
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

    @include screen('md') {
        font-size: $font-size--7;
    }

    @include screen('xs') {
        font-size: $font-size--6;
    }
}

a, p, span, button {
    color: $bg-lights-on;
    font-family: $body-font;
}

p {
    font-size: $font-size--5;
    line-height: 2.5em;
    letter-spacing: 0.08em;
    margin: 0;

    a {
        text-decoration: underline;
    }

    @include screen('md') {
        font-size: $font-size--4;
    }

    @include screen('xs') {
        font-size: $font-size--4 * .9;
    }
}

.spacer {
    height: 5em;
    transition: height .5s ease-in-out;

    @include screen('sm') {
        height: 3.25em;
    }
}

// bounce
@-webkit-keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        -webkit-transform: translateY(0);
    }

    40% {
        -webkit-transform: translateY(-10px);
    }

    60% {
        -webkit-transform: translateY(-5px);
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}


.bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
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
    transition: opacity .5s;
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
    width: 94%;
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

.jc-sb-ai-fs {
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
}

.jc-sb-ai-fe {
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
}

.jc-space-between {
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.flex-column {
    flex-direction: column;
}

.jc-flex-start {
    display:flex;
    justify-content: flex-start;
    align-items: center;
}

.jc-flex-end {
    display:flex;
    justify-content: flex-end;
    align-items: center;
}

.center {
    display:flex;
    justify-content: center;
    align-items: center;
}

.flex-end {
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.ai-flex-start {
    display:flex;
    justify-content: center;
    align-items: flex-start;
}

.sticky {
    position: sticky;
    top: 80px;
}

.px-3p {
    padding-left: 3%;
    padding-right: 3%;
}

.pt-80px {
    padding-top: 5em;;

    @include screen('md') {
        padding-top: 3.25em;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
