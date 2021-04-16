<template>
  <div class="menu">
        <div class="menu-backdrop" @click="toggle" v-if="isMenuOpen"></div>
        <transition name="slide">
            <div class="menu-panel center" v-if="isMenuOpen">
                <slot></slot>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    fetch({store}) {
        store.commit('setNavState')
    },
    methods: {
        toggle() {
            this.$store.commit('toggleNav')
        },
        closeMenu() {
           this.$store.commit('setNavState', false);
        }
    },
    computed: {
        isMenuOpen() {
            return this.$store.state.isNavOpen;
        }
    },
    mounted() {
        window.addEventListener('resize', this.closeMenu)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.closeMenu)
    }
}
</script>

<style lang="scss" scoped>
// slide left
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 300ms ease-in 0s;
}

.menu-backdrop {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.menu-panel {
  overflow-y: auto;
  background-color: $asset-black;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 99;
  width: 27.5vw;
  border: 1px solid $asset-black;

    @include screen('md') {
        top: 3.25em;
        width: 60vw;
    }

}
</style>