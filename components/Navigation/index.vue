<template>
  <transition name="slide">
      <header class="nav-container">
          <nav class="nav-header container jc-space-between">
              <nuxt-link to="/" class="logo-wrapper" @click.native="scrollToTop">
                  <div class="logo static"></div>
              </nuxt-link>
              <Burger />
          </nav>
          <Menu>
              <ul class="menu-nav">
                  <li v-for="(route,idx) in router" :key="idx">
                      <span
                        @click="goto(route.path)"
                        :class="{'nuxt-link-active nuxt-link-exact-active': getActive == route.idx}"
                        >{{route.section}}</span>
                  </li>
              </ul>
          </Menu>
      </header>
  </transition>
</template>

<script>
import Burger from './Burger'
import Menu from './Menu'

export default {
    components: {
        Burger,
        Menu
    },
    data() {
        return {
            router: [
                {
                    section: 'Unplugged',
                    path: 'unplugged',
                    idx: 1
                },
                {
                    section: 'Loading Screen',
                    path: 'loading-screen',
                    idx: 2
                },
                {
                    section: 'Pitch black',
                    path: 'pitch-black',
                    idx: 3
                },
                {
                    section: 'Go haywire',
                    path: 'go-haywire',
                    idx: 4
                },
                {
                    section: 'Lighting the Way',
                    path: 'lighting-the-way',
                    idx: 5
                },
            ]
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0)
        },
        goto(path) {
            let el = document.getElementById(path)
            let top = el.offsetTop;
            window.scrollTo({top:(0, top), behavior: 'smooth'});
            this.$store.commit('setNavState', false);
        },
    },
    computed: {
        isMenuOpen() {
            return this.$store.state.isNavOpen;
        },
        getActive() {
            return this.$store.state.active
        }
    },
}
// just in case :)
// https://shouts.dev/vuejs-scroll-to-elements-on-the-page
// https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a
</script>

<style lang="scss" scoped>
.nav-container {
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: $asset-black;

    .nav-header {
        height: 5em;
        transition: height .5s ease-in-out;
        z-index: 999;
        @include screen('md') {
            height: 3.25em;
        }

        .logo-wrapper {
            height: 100%;
            width: 100%;

            .logo {
                background-image: url('~assets/logos/GDN_Horizontal-whitetext.png');
                height: 100%;
                width: 300px;

                @include screen('md') {
                    width: 150px;
                }
            }
        }
    }
}

.menu-nav {
    margin-bottom: 2.5rem;
    li {
        margin-bottom: 2.5rem;
        span {
            color: $bg-lights-on;
            font-size: $font-size--5;
            cursor: pointer;

            &:hover {
                color: $asset-yellow;
            }

            @include screen('md') {
                font-size: $font-size--4;
            }
        }
    }
}
</style>