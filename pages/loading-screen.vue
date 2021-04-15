<template>
  <div class="loading-screen">
      <div class="loading-screen-header center flex-column mt-7 mb-7 pt-6">
            <h1 class="mb-1">Loading Screen</h1>
            <img v-if="this.windowWidth > 991"  :src="require('../assets/02 Loading Screen/GIF/01-Loading-edited.gif')" alt="loading...">
            <img v-else :src="require('../assets/02 Loading Screen/PNG/01-Loading-txt.png')" alt="loading...">
      </div>

      <div class="ls ls--1 mb-7 pb-5">
          <div v-if="this.windowWidth > 991" class="ai-flex-start">
            <div class="img-wrapper sticky">
                 <transition name="fade">
                    <div class="laptop-wrapper jc-flex-start" v-if="this.laptopScroll">
                        <img :src="require('../assets/02 Loading Screen/PNG/02a Laptop right.png')" alt="join now">
                    </div>       
                </transition>
            </div>
            <div id="power-txt" class="txt-wrapper">
                <p class="mb-5">
                    The afternoon is often reserved for the students to entertain class synchronous sessions and extracurricular meetings. Radaza and Cortez are both waiting for a synchronous class held through video conferencing at 3:00 PM.
                </p>
                <p class="mb-5">
                    Cortez attempts to enter his online class right before it begins.
                </p>
                <p class="mb-5">
                    Cortez was able to sit through and participate throughout the class. Beyond his academic life, Cortez is active in seven student organizations and works for a government agency.
                </p>
                <p class="mb-5">
                    Radaza tries to enter the video call early at 2:45 PM on her laptop to account for her slow internet.
                </p>
                <p class="mb-5">
                    Despite being early for her online class, a <span id="power-outage">sudden power outage</span> occurs at 3:15 PM. “I was there 10 minutes earlier but it wouldn’t connect at all. Usually the connection is like, strong when everyone is asleep,” Radaza lamented.
                </p>
                <p class="mb-5">
                    The power eventually returned shortly, allowing her to reconnect at 3:50 PM, but most of the time allotted for the class had already transpired. Radaza’s frustration extends even into her extracurricular activities. When she misses meetings for her student organizations, she wonders whether she is a burden to the people she is working with.
                </p>
            </div>
            <div class="img-wrapper sticky">
                <transition name="fade">
                    <div class="laptop-wrapper jc-flex-end" v-if="this.laptopScroll">
                        <img 
                        v-if="this.laptopChange"
                        id="laptop-half"
                        :src="require('../assets/02 Loading Screen/PNG/02c Laptop left.png')" 
                        alt="join now?">

                        <img 
                        v-else
                        id="laptop-half"
                        :src="require('../assets/02 Loading Screen/PNG/02a Laptop left.png')" 
                        alt="join now?">
                    </div>
                    
                </transition>
            </div>
          </div>

          <div v-else class="center flex-column container">
            <div class="img-wrapper center">
                <img :src="require('../assets/02 Loading Screen/PNG/02b Laptop Meeting.png')" alt="join now">
            </div>
            <div class="txt-wrapper">
                <p class="mb-5">
                    The afternoon is often reserved for the students to entertain class synchronous sessions and extracurricular meetings. Radaza and Cortez are both waiting for a synchronous class held through video conferencing at 3:00 PM.
                </p>
                <p class="mb-5">
                    Cortez attempts to enter his online class right before it begins.
                </p>
                <p class="mb-5">
                    Cortez was able to sit through and participate throughout the class. Beyond his academic life, Cortez is active in seven student organizations and works for a government agency.
                </p>
                <p class="mb-5">
                    Radaza tries to enter the video call early at 2:45 PM on her laptop to account for her slow internet.
                </p>
            </div>
            <div class="img-wrapper center">
                <img :src="require('../assets/02 Loading Screen/PNG/02c Laptop Meeting.png')" alt="disconnected">
            </div>

            <div class="txt-wrapper">
                <p class="mb-5">
                    Despite being early for her online class, a <span id="power-outage">sudden power outage</span> occurs at 3:15 PM. “I was there 10 minutes earlier but it wouldn’t connect at all. Usually the connection is like, strong when everyone is asleep,” Radaza lamented.
                </p>
                <p class="mb-5">
                    The power eventually returned shortly, allowing her to reconnect at 3:50 PM, but most of the time allotted for the class had already transpired. Radaza’s frustration extends even into her extracurricular activities. When she misses meetings for her student organizations, she wonders whether she is a burden to the people she is working with.
                </p>
            </div>
          </div>
      </div>

      <div class="ls ls--2 container">
          <div v-if="this.windowWidth > 991" class="jc-sb-ai-fs pt-7 mt-7 mb-7 pb-5">
              <div id="bulb-off" class="txt-wrapper">
                <Quotation>
                    <p>
                    "It sounds really embarrassing but it feels like I am a burden to other people especially when it’s with an organization kasi… Why did I sign up for this when I can’t really do my responsibilities because of the context and you know, my situation?" Radaza shared.
                    </p>
                </Quotation>
            </div>
            <div class="img-wrapper w-50 jc-flex-end">
                <div class="bulb-invi">
                    <div class="bulb-container">
                        <img :src="require('../assets/02 Loading Screen/PNG/03 Lightbulb-OFF.png')" alt="lightbulb off">
                    </div>
                </div>
                <transition name="fade">
                    <div v-if="this.bulbTxt" class="bulb-container jc-flex-end img-abs">
                        <img :src="require('../assets/02 Loading Screen/PNG/03 Lightbulb-OFF.png')" alt="lightbulb off">
                    </div>
                </transition>
            </div>
          </div>
        
        <div v-else class="center flex-column">
            <div class="img-wrapper center">
                <div class="bulb-container mb-5">
                    <img :src="require('../assets/02 Loading Screen/PNG/03 Lightbulb-OFF.png')" alt="lightbulb off">
                </div>
            </div>

            <div class="txt-wrapper">
                <Quotation>
                    <p>
                    "It sounds really embarrassing but it feels like I am a burden to other people especially when it’s with an organization kasi… Why did I sign up for this when I can’t really do my responsibilities because of the context and you know, my situation?" Radaza shared.
                    </p>
                </Quotation>
            </div>
        </div>

      </div>

      <div class="ls ls--3 container pt-7 mt-7 mb-7 pb-5">
          <div v-if="this.windowWidth > 991" class="jc-sb-ai-fe">
            <div id="datatxt" class="txt-wrapper w-50 mb-7 pb-7">
              <p>Students like Radaza and Ignacio are resigned to the constant power interruptions, as they have been there their entire lives. It is difficult to find solutions for power interruptions because a lot of the options, such as buying a generator, are expensive. Instead, they try to invest in better internet connection for online classes since it is easier to control.</p>
            </div>
            <div class="img-wrapper w-50">
                <div class="data-invi">
                    <img :src="require('../assets/02 Loading Screen/PNG/04 3G Sim.png')" alt="3g">
                </div>
                <transition name="fade">
                    <div v-if="this.dataTxt" class="data-container img-abs">
                        <img :src="require('../assets/02 Loading Screen/PNG/04 3G Sim.png')" alt="3g">
                    </div>
                </transition>
            </div>
          </div>
          <div v-else class="center flex-column">
                <div class="txt-wrapper">
                    <p class="mb-6">Students like Radaza and Ignacio are resigned to the constant power interruptions, as they have been there their entire lives. It is difficult to find solutions for power interruptions because a lot of the options, such as buying a generator, are expensive. Instead, they try to invest in better internet connection for online classes since it is easier to control.</p>
                </div>
                <div class="img-wrapper center">
                    <div class="data-container data-mob center">
                        <img :src="require('../assets/02 Loading Screen/PNG/04 3G Sim.png')" alt="3g">
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import Quotation from '~/components/Quote.vue'

export default {
    components: {
        Quotation
    },
    data() {
        return {
            windowWidth: 0,
            laptopScroll: false,
            laptopChange: false,
            bulbTxt: false,
            dataTxt: false,
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        laptopFade() {
            try {
                document.getElementById('power-txt').getBoundingClientRect().top - document.getElementById('power-txt').getBoundingClientRect().height/2.5 <= 0 
                && document.getElementById('power-txt').getBoundingClientRect().bottom -  document.getElementById('power-txt').getBoundingClientRect().height/2.5> 0 
                ? this.laptopScroll = true : this.laptopScroll = false 
            } catch {}
        },
        swapLaptops() {
            try {
                document.getElementById('power-outage').getBoundingClientRect().top - 80 
                <= document.getElementById('laptop-half').getBoundingClientRect().top ?
                this.laptopChange = true : this.laptopChange = false
            } catch{}
        },
        bulbFade() {
            try {
                document.getElementById('bulb-off').getBoundingClientRect().top - document.getElementById('bulb-off').getBoundingClientRect().height < 0 
                && document.getElementById('bulb-off').getBoundingClientRect().bottom -  document.getElementById('bulb-off').getBoundingClientRect().height/2> 0 
                ? this.bulbTxt = true : this.bulbTxt = false
            } catch {}
        },
        simFade() {
            try {
                document.getElementById('datatxt').getBoundingClientRect().top - document.getElementById('datatxt').getBoundingClientRect().height < 0 
                && document.getElementById('datatxt').getBoundingClientRect().bottom -  document.getElementById('datatxt').getBoundingClientRect().height/2> 0 
                ? this.dataTxt = true : this.dataTxt = false
            } catch {}
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();    
    },
    updated() {
        window.addEventListener('scroll', () => {
            this.laptopFade();
            this.swapLaptops();
            this.bulbFade()
            this.simFade()
        })
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style lang="scss" scoped>
.loading-screen-header {
    img {
        width: 400px;
        height: 100%;

        @include screen('md') {
            width: 300px;
        }
    }

    @include screen('md') {
        margin-bottom: 0em;
    }
}

.ls--1 {
    .img-wrapper {
        width: 60%;
        @include screen('md') {
            width: 100%;
        }

        img {
            width: 75%;
            height: 100%;
        }

        &.sticky {
            top: 25%;
        } 
    }

    .txt-wrapper {
        width: 100%;
    }

    @include screen('md') {
        margin-bottom: 1em;
        padding-bottom: 0;
    }
}

.bulb-container {
    width: 60%;
    img {
        width: 100%;
        height: 100%;
    }
}

.ls--3 {
    .img-wrapper {
        &.sticky {
            top: 20%;
        } 
    }

    .data-container {
        img {
            width: 100%;
            height: 100%;
            right: -5%;

            @include screen('md') {
                right: unset;
            }
        }
    }

    @include screen('md') {
        padding-top: 0;
    }
}

.img-abs {
    position: absolute;
    top: 0;
}

.bulb-invi, .data-invi {
    img {
        visibility: hidden;
        opacity: 0;
        width: 100%;
    }
}

.data-mob {
    img {
        width: 80%;
    }
}
</style>