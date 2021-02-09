<template>
  <div class="burger">
      <slot>
            <!-- burger menu -->
            <button class="burger-btn" :class="{active: isBurgerActive}" @click.prevent="toggle">
                    <div class="burger-bar burger-bar--1"></div>
                    <div class="burger-bar burger-bar--2"></div>
                    <div class="burger-bar burger-bar--3"></div>
            </button>
            <!-- section button menu -->
            <button class="btn sect-btn" :class="{active: isBurgerActive}" @click.prevent="toggle">
                <span v-if="!isBurgerActive">View Sections</span>
                <span v-else>Close</span>
            </button>
      </slot>
  </div>
</template>

<script>
export default {
    fetch({store}) {
        store.commit('toggleNav')
    },
    computed: {
        isBurgerActive() {
            return this.$store.state.isNavOpen;
        }
    },
    methods: {
        toggle() {
            this.$store.commit('toggleNav');
            // document.body.classList.toggle('overflow');
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    &:focus {
        outline: 0;
    }
}

.sect-btn {
    width: 230px;
    display: block;

    &.active {
        width: 100%;
    }

    @include screen('sm') {
        display: none;
    }
}

.burger-btn {
  position: relative;
  height: 50px;
  width: 50px;
  display: none;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    @include screen('sm') {
        display: block;
    }

  &.active {
    .burger-bar--1 {
        transform: rotate(45deg);
    }

    .burger-bar--2 {
        opacity: 0;
    }

    .burger-bar--3 {
        transform: rotate(-45deg);
    }
  }
  &:hover {
      .burger-bar--2 {
          transform: scaleX(1)
      }
  }
}

.burger-bar {
  background-color: $txt-lights-off;
  position: absolute;
  top: 50%;
  right: 10px;
  left: 10px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &--1 {
        transform: translateY(-10px);
    }

    &--2 {
        transform-origin: 100% 100%;
    }

    &--3 {
        transform: translateY(10px);
    }
}
</style>