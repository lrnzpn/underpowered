<template>
  <div class="unplugged">
        <div class="unplugged-header">
            <GradientBar />
            <div class="container center mt-6 mb-6">
                <h1>Unplugged</h1>
            </div>
            <GradientBar />
        </div>
    
        <div v-if="this.windowWidth > 991" class="unplgd unplgd--1 jc-sb-ai-fs">
            <div class="img-wrapper w-50 sticky">
                <div class="gadgets-container">
                    <transition name=fade>
                        <img 
                        v-if="this.gadgetLit"
                        class="gadgets" 
                        id="gadgets" 
                        :src="require('../assets/01 Intro _ Unplugged/PNG/03 Gadgets-ON.png')" 
                        alt="gadgets">
                    <img 
                        v-else
                        class="gadgets" 
                        id="gadgets" 
                        :src="require('../assets/01 Intro _ Unplugged/PNG/03 Gadgets-OFF.png')" 
                        alt="gadgets">
                    </transition>
                </div>
            </div>

            <div class="txt-wrapper w-50 px-3p">
                <p class="mb-5">
                    Ethan Cortez* is a college student living in the National Capital Region, an energy secure area. He rarely experiences power interruptions and his normal routine is drastically different from those who face the absence of electricity regularly.
                </p>

                <p class="mb-5">
                    With no threat of early power interruptions, Cortez usually wakes up at <span id="eleven">11:00 AM</span> and immediately checks his phone. He starts his day with breakfast while watching videos on his iPad. After breakfast, he greets his mother who is working in her home office before sitting in front of his computer, ready for the rest of the day.
                </p>
                <p class="mb-5">
                    Having stable power is <a href="http://">vital</a> to the productivity of a student, especially when undergoing online classes. Yet, people living in energy-insecure areas try their best to make their situation work, from maximizing the morning light for chores, to paying attention to the announcements from energy distributors on scheduled power interruptions.
                </p>
            </div>
        </div> 
        <div v-else class="unplgd unplgd--1 center">
            <div class="content-wrapper mt-5">
                <p class="mb-5 container">
                    Ethan Cortez* is a college student living in the National Capital Region, an energy secure area. He rarely experiences power interruptions and his normal routine is drastically different from those who face the absence of electricity regularly.
                </p>
                <GradientBar />
                <div class="container">
                    <div class="gadgets-container center">
                        <img class="gadgets" :src="require('../assets/01 Intro _ Unplugged/PNG/03 Gadgets-OFF.png')" alt="gadgets">
                    </div>

                    <p class="mt-4 mb-5">
                        With no threat of early power interruptions, Cortez usually wakes up at 11:00 AM and immediately checks his phone. He starts his day with breakfast while watching videos on his iPad. After breakfast, he greets his mother who is working in her home office before sitting in front of his computer, ready for the rest of the day.
                    </p>
                    <p class="mb-5">
                        Having stable power is <a href="http://">vital</a> to the productivity of a student, especially when undergoing online classes. Yet, people living in energy-insecure areas try their best to make their situation work, from maximizing the morning light for chores, to paying attention to the announcements from energy distributors on scheduled power interruptions.
                    </p>
                </div>
            </div>

        </div>

        <div class="unplgd unplgd--2 container">
            <div v-if="this.windowWidth > 991" class="jc-sb-ai-fs pt-7 pb-7 mt-7 mb-7">
                <div class="txt-wrapper w-50" id="maptxt">
                    <p class="mb-5">
                        Despite the best efforts of people who live in energy-insecure areas to mitigate their decreased productivity, losing power in the morning still delays the entire day. 
                    </p>
                    <p class="mb-5">
                        The routines of college students such as Pam Radaza, Juan Paolo Ignacio, and Primo Arbon Jr., are affected by <span id="power-loss">power loss</span>. 
                        Radaza and Ignacio both hail from Mindanao and live in Butuan City and Malaybalay City, respectively. Meanwhile, Arbon Jr. is from Dumaguete City in Negros Oriental. Despite living in different regions, they share similar experiences with energy insecurity.
                    </p>
                </div>
                <div class="img-wrapper w-50 sticky">
                    <transition name="fade">
                        <div v-if="this.mapLit" class="map-container flex-end"> 
                            <div id="map" class="map static" :class="{'flicker' : this.flicker}"></div>                        
                        </div>
                    </transition>
                </div>
            </div>
            <div v-else class="center">
                <div class="content-wrapper">
                    <p class="mb-7">
                        Despite the best efforts of people who live in energy-insecure areas to mitigate their decreased productivity, losing power in the morning still delays the entire day. 
                    </p>

                    <div class="map-container center">
                        <img class="map-on" :src="require('../assets/01 Intro _ Unplugged/PNG/04 Map-ON.png')" alt="">
                    </div>

                    <p class="mt-7 mb-5">
                        The routines of college students such as Pam Radaza, Juan Paolo Ignacio, and Primo Arbon Jr., are affected by power loss. Radaza and Ignacio both hail from Mindanao and live in Butuan City and Malaybalay City, respectively. Meanwhile, Arbon Jr. is from Dumaguete City in Negros Oriental. Despite living in different regions, they share similar experiences with energy insecurity.
                    </p>
                </div>
            </div>
        </div> 

        <div v-if="this.windowWidth > 991" class="content-wrapper">
            <div class="unplgd unplgd--3 jc-sb-ai-fs">
                <div class="img-wrapper w-50">
                    <div class="rcp-invisible">
                        <div class="rc-container">
                            <img class="rc" :src="require('../assets/01 Intro _ Unplugged/PNG/05 Rice Cooker.png')" alt="rice cooker">
                        </div>
                        <div class="phone-container flex-end">
                            <img class="phone" :src="require('../assets/01 Intro _ Unplugged/PNG/06 Phone.png')" alt="phone">
                        </div>
                    </div>
                    <transition name="fade">
                        <div 
                            v-if="this.rcpFixed"
                            class="rcp-container"
                        >
                            <div class="rc-container">
                                <img class="rc" :src="require('../assets/01 Intro _ Unplugged/PNG/05 Rice Cooker.png')" alt="rice cooker">
                            </div>
                            <div class="phone-container flex-end">
                                <img class="phone" :src="require('../assets/01 Intro _ Unplugged/PNG/06 Phone.png')" alt="phone">
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="txt-wrapper w-50 px-3p" id="rcptxt">
                    <p class="mb-5">
                        At the start of each day, preparations are at hand due to a possible power interruption, which may or may not be announced. At 8:00 AM, Ignacio often wakes up early to assist with the morning chores. He ensures that his gadgets are charged and the possible lack of internet access is covered through cellular data. “I do all my chores in the morning and during the day so that I don’t get power outages at night,” he said.
                    </p>
                    <p class="mb-5">
                        Arbon Jr., on the other hand, looks ahead of his responsibilities and duties by considering alternatives and preparing contingencies the night before. Cooking is one of those duties. “If you cook at home with the use of a rice cooker, then, as a matter of contingency, you should have, or be able to finish cooking anything with your gas range.” 
                    </p>
                </div>
            </div>

            <GradientBar />

            <div class="unplgd unplgd--4 container">
                <div class="ai-flex-start mt-7">
                    <div class="txt-wrapper w-50">
                        <p class="mb-7 pb-7">
                            Similarly, Radaza feels the need to anticipate power interruptions. However, she believes that the need for preparation also stems from anxiety. 
                        </p>
                        
                        <Quotation>
                            <p>
                            “That paranoia—always charging the powerbanks in case of brownout. You know just having to save all the files—all the upcoming reminders of videos,” she said.
                            </p>
                        </Quotation>
                        

                        <p class="mt-7 pt-7 mb-7 pb-5">
                            Moreover, Radaza is not the only person in her household that is affected by the energy insecurity in her region, as her mother still goes to the office for reliable internet and electricity.
                        </p>
            
                    </div>
                    <div class="img-wrapper w-50 sticky">
                        <div class="pb-container jc-flex-end">
                            <img class="powerbank" :src="require('../assets/01 Intro _ Unplugged/PNG/07 Powerbank.png')" alt="powerbank">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="content-wrapper">
            <div class="img-wrapper rcp-mob-wrapper">
                <div class="rc-container">
                    <img class="rc" :src="require('../assets/01 Intro _ Unplugged/PNG/05 Rice Cooker.png')" alt="rice cooker">
                </div>
                <div class="phone-container flex-end">
                    <img class="phone" :src="require('../assets/01 Intro _ Unplugged/PNG/06 Phone.png')" alt="phone">
                </div>
            </div>
            <GradientBar />
            <div class="container">
                <p class="mt-5 mb-5">
                At the start of each day, preparations are at hand due to a possible power interruption, which may or may not be announced. At 8:00 AM, Ignacio often wakes up early to assist with the morning chores. He ensures that his gadgets are charged and the possible lack of internet access is covered through cellular data. “I do all my chores in the morning and during the day so that I don’t get power outages at night,” he said.
                </p>
                <p class="mb-5">
                    Arbon Jr., on the other hand, looks ahead of his responsibilities and duties by considering alternatives and preparing contingencies the night before. Cooking is one of those duties. “If you cook at home with the use of a rice cooker, then, as a matter of contingency, you should have, or be able to finish cooking anything with your gas range.” 
                </p>
                <p class="mb-5">
                    Similarly, Radaza feels the need to anticipate power interruptions. However, she believes that the need for preparation also stems from anxiety. 
                </p>

                <Quotation>
                    <p>
                    “That paranoia—always charging the powerbanks in case of brownout. You know just having to save all the files—all the upcoming reminders of videos,” she said.
                    </p>
                </Quotation>
            </div>

            <div class="pb-container center mt-6 mb-4">
                <img class="powerbank" :src="require('../assets/01 Intro _ Unplugged/PNG/07 Powerbank.png')" alt="powerbank">
            </div>

            <p class="mb-5 container">
                Moreover, Radaza is not the only person in her household that is affected by the energy insecurity in her region, as her mother still goes to the office for reliable internet and electricity.
            </p>
        </div>
  </div>
</template>

<script>
import GradientBar from '~/components/Gradient-Bar.vue'
import Quotation from '~/components/Quote.vue'
export default {
    components: {
        GradientBar,
        Quotation
    },
    data() {
        return {
            windowWidth: 0,
            gadgetLit: false,
            mapLit: false,
            rcpFixed: false,
            flicker: false
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        gadgetScroll() {
            try {
                document.getElementById('gadgets').height / 1.5 >= document.getElementById('eleven').getBoundingClientRect().top ? this.gadgetLit = true : this.gadgetLit = false
            } catch {}
        },
        mapScroll() {
            try {
                document.getElementById('maptxt').getBoundingClientRect().top - document.getElementById('maptxt').getBoundingClientRect().height/2 <= 0
                && document.getElementById('maptxt').getBoundingClientRect().bottom -  document.getElementById('maptxt').getBoundingClientRect().height/2> 0 
                ? this.mapLit = true : this.mapLit = false
            } catch {}
        },
        rcpScroll() {
            try {
                document.getElementById('rcptxt').getBoundingClientRect().top - document.getElementById('rcptxt').getBoundingClientRect().height/2 < 0 
                && document.getElementById('rcptxt').getBoundingClientRect().bottom -  document.getElementById('rcptxt').getBoundingClientRect().height/3> 0 
                ? this.rcpFixed = true : this.rcpFixed = false
            } catch {}
        },
        mapFlicker() {
            try {
                document.getElementById('power-loss').getBoundingClientRect().top - 80 
                <= document.getElementById('map').getBoundingClientRect().top ?
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
            this.gadgetScroll()
            this.mapScroll()
            this.rcpScroll()
            this.mapFlicker()
        })
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.handleResize);
        // window.removeEventListener('scroll', this.gadgetScroll)
    },
    
}
</script>

<style lang="scss" scoped>
.gadgets {
    width: 90%;
    height: 100%;

    @include screen('md') {
        width: 80%;
    }

    @include screen('xs') {
        width: 70%;
    }
}

.map {
    height: 300px;
    background-image: url('../assets/01 Intro _ Unplugged/PNG/(4) Lights On (Fixed).png');

    &.flicker {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/04 Lights Off (Fixed).png')
    }
}

.map-on {
    height: 300px;

    @include screen('md') {
        height: 200px;
    }

    @include screen('sm') {
        height: 150px;
    }
}

.flicker {
    animation-name: mapFlicker;
    animation-duration: 1s;
}

@keyframes mapFlicker {
    0% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/(4) Lights On (Fixed).png')
    }

    33% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/04 Lights Off (Fixed).png')
    }

    66% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/(4) Lights On (Fixed).png')
    }

    100% {
        background-image: url('../assets/01 Intro _ Unplugged/PNG/04 Lights Off (Fixed).png')
    }
}

.rc {
    width: auto;
    height: 500px;
    left: -10%;

    @include screen('md') {
        left: 0;
        height: 300px;
    }

    @include screen('xs') {
        height: 150px;
    }
}

.phone {
    width: auto;
    height: 600px;

    @include screen('md') {
        height: 450px;
    }

    @include screen('xs') {
        height: 300px;
    }
}

.powerbank {
    width: auto;
    height: 550px;
    transform: rotate(-13.95deg) translateX(-10%);

    @include screen('lg') {
        transform: rotate(-13.95deg) translateX(-12.5%);
    }

    @include screen('md') {
        height: 450px;
        transform: rotate(-13.95deg);
    }

    @include screen('xs') {
        height: 300px;
    }
}

.unplgd {
    &--1 {
        .txt-wrapper {
            margin-top: 10em;
        }
    }

    &--2 {
        .img-wrapper {
            &.sticky {
                top: 30%;
            } 
        }
    }
}

.rcp-mob-wrapper {
    width:80%;
    margin: auto;
}

.rcp-container {
    position: absolute;
    top: 0;
    width: 100%;
}

// gives the height of the images while hidden
.rcp-invisible {
    img {
        visibility: hidden;
        opacity: 0;
    }
}
</style>