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
                    <div class="txt-wrapper w-50" id="bulbtxt">
                        <p class="mb-5">
                            DESPITE COMMERCIAL energy demand drops in 2020 and repeated attempts at industry reform, many Filipinos still live without an effordable and reliable source of <a :href="this.articles.power">power</a>. 
                            Two decades have passed since the passage of the Electric Power Industry Reform Act of 2001 (EPIRA), but power shortages are expected to <a :href="this.articles.persist">persist</a> well into the latter half of the decade in some regions. 
                            The limitations caused by unreliable power is further aggravated by work-from-home arrangements and the current recession. 
                            This comes as the energy sector continues to <a :href="this.articles.grapple" id="grapple">grapple</a> with the energy demands of the new normal.
                        </p>

                        <p class="mb-5">
                            While energy security remains <a :href="this.articles.elusive">elusive</a> in some parts of the country, households from regions suffering from energy insecurity find themselves at a <a :href="this.articles.disadvantage">disadvantage</a> to those energy secure. 
                            To help struggling households and businesses amid the recession, the government is now pushing to <a :href="this.articles.reopen">re-open</a> businesses, a move which may see an uptick in electricity demand.
                        </p>
                    </div>
                    <div class="img-wrapper w-50 sticky">
                        <transition name="fade">
                            <div v-if="this.bulbLit" class="bulb-container center">
                                <div id="bulb" class="lightbulb static" :class="{'flicker' : this.flicker}"></div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div v-else class="center">
                    <div class="content-wrapper">
                        <p class="mb-5">
                        DESPITE COMMERCIAL energy demand drops in 2020 and repeated attempts at industry reform, many Filipinos still live without an effordable and reliable source of <a :href="this.articles.power">power</a>. 
                        Two decades have passed since the passage of the Electric Power Industry Reform Act of 2001 (EPIRA), but power shortages are expected to <a :href="this.articles.persist">persist</a> well into the latter half of the decade in some regions. 
                        The limitations caused by unreliable power is further aggravated by work-from-home arrangements and the current recession. 
                        This comes as the energy sector continues to <a :href="this.articles.grapple">grapple</a> with the energy demands of the new normal.
                        </p>

                        <div class="bulb-container center">
                            <img 
                            class="light" 
                            :src="require('../assets/01 Intro _ Unplugged/PNG/01 PH Light-ON.png')" 
                            alt="light-on">
                        </div>

                        <p class="mb-5">
                            While energy security remains <a :href="this.articles.elusive">elusive</a> in some parts of the country, households from regions suffering from energy insecurity find themselves at a <a :href="this.articles.disadvantage">disadvantage</a> to those energy secure. 
                            To help struggling households and businesses amid the recession, the government is now pushing to <a :href="this.articles.reopen">re-open</a> businesses, a move which may see an uptick in electricity demand.
                        </p>
                    </div>
                </div>
            </div>

            <div class="unpwrd unpwrd--2 container center">
                <p class="w-50 mt-7 mb-7">
                    The Philippines’ ever-changing electricity requirements has further strained the power industry that is now struggling to <a :href="this.articles.expand">expand</a> in pandemic conditions. 
                    As the country faces new demands from the “new normal,” those that live in energy-insecure areas—particularly rural regions—are disadvantaged compared to urban-based citizens.
                </p>
            </div>

            <div class="banner-container jc-flex-end">
                <img :src="require('../assets/01 Intro _ Unplugged/PNG/02 Landscape TRANSPARENT.png')" alt="">
            </div>

      </section>
      <section id="unplugged" class="pt-80px">
          <Unplugged />
      </section>
      <section id="loading-screen" class="pt-80px">
          <LoadingScreen />
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
import LoadingScreen from './loading-screen.vue'
export default {
    data() {
        return {
            windowWidth: 0,
            bulbLit: false,
            articles: {
                power : 'https://theguidon.com/1112/main/2020/10/a-country-in-the-dark/',
                persist: 'https://www.doe.gov.ph/sites/default/files/pdf/electric_power/2019-power-situation-report.pdf',
                grapple: 'https://www.philstar.com/business/2020/10/20/2051008/philippines-seen-missing-goal-energize-entire-archipelago',
                elusive: 'https://businessmirror.com.ph/2020/03/08/enough-power-but-brace-for-brownouts/',
                disadvantage: 'https://www.ateneo.edu/ls/soss/economics/publication/11/10/20/does-quality-electricity-matter-household-level-evidence',
                reopen: 'https://www.philstar.com/headlines/2020/10/24/2051906/relaxed-curfew-staggered-work-shifts-urged',
                expand: 'https://www.manilatimes.net/2020/10/03/business/business-top/pandemic-to-keep-stalling-growth-in-ph-power-sector/775463/',
            },
            flicker: false,
        }
    },
    components: {
        Unplugged,
        PitchBlack,
        GoHaywire,
        LightingWay,
        LoadingScreen
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        bulbScroll() {
            try {
                document.getElementById('bulbtxt').getBoundingClientRect().top - document.getElementById('bulbtxt').getBoundingClientRect().height/2 <= 0 
                && document.getElementById('bulbtxt').getBoundingClientRect().bottom -  document.getElementById('bulbtxt').getBoundingClientRect().height/2> 0 
                ? this.bulbLit = true : this.bulbLit = false
            } catch {}
        },
        bulbFlicker() {
            try {
                document.getElementById('grapple').getBoundingClientRect().top - 80 
                <= document.getElementById('bulb').getBoundingClientRect().height/2 ?
                this.flicker = true : this.flicker = false
            } catch {

            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    updated() {
        window.addEventListener('scroll', () => {
            this.bulbScroll()
            this.bulbFlicker()
        })
        
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

.banner-container {
    img {
        width: 100%;
        height: auto;
        position: absolute;
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
        @include screen('md') {
            width: 100%;
        }
    }
}

.light {
    height: 600px;

    @include screen('sm') {
        height: 300px;
    }
}

.lightbulb {
    height: 600px;
    background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-OFF.png');
}

.flicker {
    animation-name: bulbFlicker;
    animation-duration: 1s;
}

@keyframes bulbFlicker {
    0% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-OFF.png')
    }

    25% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-ON.png')
    }

    50% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-OFF.png')
    }

    75% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-ON.png')
    }

    100% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/01 PH Light-OFF.png')
    }
}
</style>
