<template>
  <transition name="slide">
      <header class="nav-container">
          <nav class="nav-header container jc-space-between">
              <nuxt-link to="/" class="logo-wrapper">
                  <div class="logo static"></div>
              </nuxt-link>

              <Burger />
          </nav>
          <Menu>
              <ul class="menu-nav">
                  <li v-for="(route,idx) in router" :key="idx">
                      <nuxt-link :to="route.path" >{{route.section}}</nuxt-link>
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
                    path: '/#unplugged'
                },
                {
                    section: 'Loading Screen',
                    path: '/#loading-screen'
                },
                {
                    section: 'Pitch black',
                    path: '/#pitch-black'
                },
                {
                    section: 'Go haywire',
                    path: '/#go-haywire'
                },
                {
                    section: 'Lighting the Way',
                    path: '/#lighting-the-way'
                },
            ]
        }
    },
    computed: {
        
    }
}
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
        @include screen('sm') {
            height: 3.25em;
        }

        .logo-wrapper {
            height: 100%;
            width: 100%;

            .logo {
                background-image: url('~assets/logos/GDN_Horizontal-whitetext.png');
                height: 100%;
                width: 300px;

                @include screen('sm') {
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
        a {
            color: $bg-lights-on;
            font-size: $font-size--5;
            &:hover {
                color: $asset-yellow;
            }

            @include screen('sm') {
                font-size: $font-size--4;
            }
        }
    }
}
</style>