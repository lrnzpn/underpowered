<template>
  <main>
      <section id="underpowered">
            <div class="underpowered-banner bg"></div>
          
            <div class="unpwrd-hdr-wrapper center flex-column">
                <h1>Underpowered</h1>
                <div class="credits center flex-column">
                    <span class="d-block">By Kris M. Fetiza, Derick M. Gabrillo,</span>
                    <span class="d-block">and Zachary C. Gonzales</span>
                </div>
                
                <div class="scroll center flex-column">
                    <span class="d-block">Scroll</span>
                    <img :src="require('../assets/logos/expand_more-24px.svg')" alt="chevron" class="bounce">
                </div>
            </div>

            <div class="unpwrd unpwrd--1 container">
                <div v-if="this.windowWidth > 991" class="jc-sb-ai-fs" id="stickbulb">
                    <div class="txt-wrapper w-50">
                        <p class="mb-5">
                            DESPITE COMMERCIAL energy demand drops in 2020 and repeated attempts at industry reform, many Filipinos still live without an effordable and reliable source of <a href="/">power</a>. 
                            Two decades have passed since the passage of the Electric Power Industry Reform Act of 2001 (EPIRA), but power shortages are expected to <a href="/">persist</a> well into the latter half of the decade in some regions. 
                            The limitations caused by unreliable power is further aggravated by work-from-home arrangements and the current recession. 
                            This comes as the energy sector continues to <a href="/">grapple</a> with the energy demands of the new normal.
                        </p>

                        <p class="mb-5">
                            While energy security remains <a href="http://">elusive</a> in some parts of the country, households from regions suffering from energy insecurity find themselves at a <a href="http://">disadvantage</a> to those energy secure. 
                            To help struggling households and businesses amid the recession, the government is now pushing to <a href="http://">re-open</a> businesses, a move which may see an uptick in electricity demand.
                        </p>
                    </div>
                    <div class="img-wrapper w-50">
                        <div class="bulb-container center">
                            <img 
                            id="lightbulb"
                            class="lightbulb" 
                            :src="require('../assets/01 Intro _ Unplugged/PNG/01 PH Light-OFF.png')" 
                            alt="light-off">
                        </div>
                    </div>
                </div>
                <div v-else class="center">
                    <div class="content-wrapper">
                        <p class="mb-5">
                        DESPITE COMMERCIAL energy demand drops in 2020 and repeated attempts at industry reform, many Filipinos still live without an effordable and reliable source of <a href="/">power</a>. 
                        Two decades have passed since the passage of the Electric Power Industry Reform Act of 2001 (EPIRA), but power shortages are expected to <a href="/">persist</a> well into the latter half of the decade in some regions. 
                        The limitations caused by unreliable power is further aggravated by work-from-home arrangements and the current recession. 
                        This comes as the energy sector continues to <a href="/">grapple</a> with the energy demands of the new normal.
                        </p>

                        <div class="bulb-container center">
                            <img 
                            id="lightbulb"
                            class="lightbulb" 
                            :src="require('../assets/01 Intro _ Unplugged/PNG/01 PH Light-ON.png')" 
                            alt="light-on">
                        </div>

                        <p class="mb-5">
                            While energy security remains <a href="http://">elusive</a> in some parts of the country, households from regions suffering from energy insecurity find themselves at a <a href="http://">disadvantage</a> to those energy secure. 
                            To help struggling households and businesses amid the recession, the government is now pushing to <a href="http://">re-open</a> businesses, a move which may see an uptick in electricity demand.
                        </p>
                    </div>
                </div>
            </div>

            <div class="unpwrd unpwrd--2 container center">
                <p class="w-50 mt-5 mb-5">
                    The Philippines’ ever-changing electricity requirements has further strained the power industry that is now struggling to <a href="http://">expand</a> in pandemic conditions. 
                    As the country faces new demands from the “new normal,” those that live in energy-insecure areas—particularly rural regions—are disadvantaged compared to urban-based citizens.
                </p>
            </div>

            <div class="banner-container jc-flex-end">
                <img :src="require('../assets/01 Intro _ Unplugged/PNG/02 Landscape TRANSPARENT.png')" alt="">
            </div>

      </section>
      <section id="unplugged">
          <Unplugged />
      </section>
      <section id="pitch-black">
          <PitchBlack />
      </section>
      <section id="go-haywire">
          <GoHaywire />
      </section>
      <section id="lighting-way">
          <LightingWay />
      </section>
  </main>
</template>

<script>
import Unplugged from './unplugged.vue'
import PitchBlack from './pitch-black.vue'
import GoHaywire from './go-haywire.vue'
import LightingWay from './lighting-the-way.vue'
export default {
    data() {
        return {
            stickTop: false,
            fixBulb: false,
            windowWidth: 0
        }
    },
    components: {
        Unplugged,
        PitchBlack,
        GoHaywire,
        LightingWay,
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
            console.log(this.windowWidth)
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style lang="scss">

.underpowered-banner {
    background-image: url('~assets/01 Intro _ Unplugged/underpowered-banner.png');
    width: 100%;
    height: 425px;
}

.lightbulb {
    height: 600px;
}

.banner-container {
    img {
        width: 100%;
        height: 100%;
    }
}

.unpwrd-hdr-wrapper {
    font-size: $font-size--5;
    margin: 1.5rem 0;
    h1 {
        margin: 1.5rem 0;
    }
    
    span {
        font-weight: 300;
    }

    .credits {
        margin-bottom: 3.5em;
    }

    .scroll {
        img {
            width: 40px;
            height: 40px;
        }
    }
}

.unpwrd--2 {
    p {
        width: 100%;
    }
}
</style>
