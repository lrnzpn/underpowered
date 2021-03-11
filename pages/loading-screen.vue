<template>
  <div class="loading-screen">
      <div class="loading-screen-header center flex-column mt-7 mb-7">
            <h1>Loading Screen</h1>
            <img :src="require('../assets/02 Loading Screen/GIF/01-Loading.gif')" alt="loading...">
      </div>

      <div class="ls ls--1 ai-flex-start mb-7 pb-5">
          <div class="img-wrapper jc-flex-start sticky">
              <img :src="require('../assets/02 Loading Screen/PNG/02a Laptop right.png')" alt="join now">
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
                <p class="mb-5">
                    Despite being early for her online class, a sudden power outage occurs at 3:15 PM. “I was there 10 minutes earlier but it wouldn’t connect at all. Usually the connection is like, strong when everyone is asleep,” Radaza lamented.
                </p>
                <p class="mb-5">
                    The power eventually returned shortly, allowing her to reconnect at 3:50 PM, but most of the time allotted for the class had already transpired. Radaza’s frustration extends even into her extracurricular activities. When she misses meetings for her student organizations, she wonders whether she is a burden to the people she is working with.
                </p>
            </div>
          <div class="img-wrapper jc-flex-end sticky">
              <img :src="require('../assets/02 Loading Screen/PNG/02a Laptop left.png')" alt="join now?">
          </div>
      </div>

      <div class="ls ls--2 container pt-7 mt-7 mb-7 pb-5">
          <div class="jc-sb-ai-fs">
              <div class="txt-wrapper">
                <Quotation>
                    <p>
                    "It sounds really embarrassing but it feels like I am a burden to other people especially when it’s with an organization kasi… Why did I sign up for this when I can’t really do my responsibilities because of the context and you know, my situation?" Radaza shared.
                    </p>
                </Quotation>
            </div>
            <div class="img-wrapper w-50 jc-flex-end sticky">
                <div class="bulb-container">
                    <img :src="require('../assets/02 Loading Screen/PNG/03 Lightbulb-OFF.png')" alt="lightbulb off">
                </div>
            </div>
          </div>
      </div>

      <div class="ls ls--3 container pt-7 mt-7 mb-7 pb-5">
          <div class="jc-sb-ai-fs">
            <div class="txt-wrapper w-50 mb-7 pb-7">
              <p>Students like Radaza and Ignacio are resigned to the constant power interruptions, as they have been there their entire lives. It is difficult to find solutions for power interruptions because a lot of the options, such as buying a generator, are expensive. Instead, they try to invest in better internet connection for online classes since it is easier to control.</p>
            </div>
            <div class="img-wrapper w-50 sticky">
                <div class="data-container">
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
    }
}
</script>

<style lang="scss" scoped>
.loading-screen-header {
    img {
        width: 400px;
        height: 100%;
    }
}

.ls--1 {
    .img-wrapper {
        width: 60%;
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
        }
    }
}
</style>