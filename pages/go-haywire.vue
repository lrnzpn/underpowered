<template>
  <div class="gohaywire">
    <div
      class="haywire-header center mt-7 mb-6"
      v-bind:class="{ mobile: this.windowWidth <= 991 }"
    >
      <div class="sparks-1"></div>
      <h1 class="px-3p">Go haywire</h1>
      <div class="sparks-1 flipped"></div>
    </div>

    <div v-if="this.windowWidth > 991" class="haywire haywire--1 jc-sb-ai-fe mb-7 pb-7">
      <div class="txt-wrapper px-3p w-50">
        <p class="mb-5">
          These uncertainties—borne from power outages—naturally and adversely
          affect students’ productivity and even anxiety levels. Fluctuating
          electricity and accessibility make it difficult to keep attention and
          momentum rolling, arguably robbing students of the satisfaction and
          gratification of accomplishing work they may even love doing.
        </p>
        <p>
          Power outages, then, not only deal heavy blows to one’s academic life,
          but also mental wellness. However, beyond challenges to mental health,
          physical illnesses have also affected the students in energy insecure
          households.
        </p>
      </div>

      <div class="img-wrapper w-50">
        <div class="pen-container">
          <img
            class="pen-1"
            :src="require('../assets/04 Go Haywire/PNG/02 Pen White.png')"
            alt="Pen"
          />
        </div>
      </div>
    </div>
    <div v-else class="haywire haywire--1 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="pen-container jc-flex-end mb-5">
            <img
              class="pen-1 mobile"
              :src="require('../assets/04 Go Haywire/PNG/02 Pen White.png')"
              alt="Pen"
            />
          </div>
          <p class="mb-5">
            These uncertainties—borne from power outages—naturally and adversely
            affect students’ productivity and even anxiety levels. Fluctuating
            electricity and accessibility make it difficult to keep attention
            and momentum rolling, arguably robbing students of the satisfaction
            and gratification of accomplishing work they may even love doing.
          </p>
          <p class="mb-5">
            Power outages, then, not only deal heavy blows to one’s academic
            life, but also mental wellness. However, beyond challenges to mental
            health, physical illnesses have also affected the students in energy
            insecure households.
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="this.windowWidth > 991"
      class="haywire haywire--2 jc-sb-ai-fe mt-7 pt-7 mb-7 pb-7"
    >
      <div class="img-wrapper canvas-img">
        <div class="canvas-container">
          <img
            class="canvas-1"
            :src="require('../assets/04 Go Haywire/PNG/03a Phone 110.png')"
            alt="Phone"
          />
        </div>
      </div>

      <div class="txt-wrapper canvas px-3p">
        <p class="mb-5">
          At 1:10 AM Cortez is, if not fast asleep, presumably winding down to
          do so. With no threat of future power interruptions in sight, he sees
          no need to sacrifice his sleep and health for the academic
          responsibilities he can revisit tomorrow.
        </p>
        <p class="mb-5">
          After five minutes of scrolling through his phone once more, he turns
          off the lights and calls it a day.
        </p>
        <p class="mb-5">
          As the clock strikes 1:00 AM, it is not uncommon to see that the
          students of the energy insecure households are still working without
          power as they are glued to their devices answering online modules.
        </p>
        <p class="mb-5">
          Because of the need to utilize daylight to accomplish household
          chores, regularly studying late into the night and the lack of
          electricity eventually take their toll on the body. All three students
          have noted irregular sleep patterns as well as declining health.
        </p>
      </div>

      <div class="img-wrapper canvas-img">
        <div class="canvas-container">
          <img
            class="canvas-2"
            :src="require('../assets/04 Go Haywire/PNG/04 Canvas.png')"
            alt="Canvas"
          />
        </div>
      </div>
    </div>
    <div v-else class="haywire haywire--1 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="canvas-container mb-3">
            <img
              class="canvas-1 mobile"
              :src="require('../assets/04 Go Haywire/PNG/03a Phone 110.png')"
              alt="Phone"
            />
          </div>
          <p class="mb-5">
            At 1:10 AM Cortez is, if not fast asleep, presumably winding down to
            do so. With no threat of future power interruptions in sight, he
            sees no need to sacrifice his sleep and health for the academic
            responsibilities he can revisit tomorrow.
          </p>
          <p class="mb-5">
            After five minutes of scrolling through his phone once more, he
            turns off the lights and calls it a day.
          </p>
          <p class="mb-5">
            As the clock strikes 1:00 AM, it is not uncommon to see that the
            students of the energy insecure households are still working without
            power as they are glued to their devices answering online modules.
          </p>
          <p class="mb-5">
            Because of the need to utilize daylight to accomplish household
            chores, regularly studying late into the night and the lack of
            electricity eventually take their toll on the body. All three
            students have noted irregular sleep patterns as well as declining
            health.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="haywire haywire--3 container">
      <div class="center mt-7 mb-7 pb-7">
        <div class="txt-wrapper w-50">
          <p class="mb-5">
            For Arbon Jr., the lack of electricity in the evening can lead to
            unnecessary perspiration, which in turn may eventually lead to
            untoward pulmonary ailments.
          </p>
          <p class="mb-5">
            On the other hand, Radaza recognized that studying often means
            compromising her health.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="haywire haywire--1 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="canvas-container center mb-6">
            <img
              class="canvas-2 mobile"
              :src="require('../assets/04 Go Haywire/PNG/04 Canvas.png')"
              alt="Canvas"
            />
          </div>
          <p class="mb-5">
            For Arbon Jr., the lack of electricity in the evening can lead to
            unnecessary perspiration, which in turn may eventually lead to
            untoward pulmonary ailments.
          </p>
          <p class="mb-5">
            On the other hand, Radaza recognized that studying often means
            compromising her health.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="haywire haywire--4 jc-sb-ai-fs">
      <div class="txt-wrapper w-50 px-3p">
        <Quotation>
          <p>
            She says, “I don’t want to push my health just so I can get a better
            connection for myself.”
          </p>
        </Quotation>
      </div>
      <div class="img-wrapper w-50">
        <div class="prescription-container">
          <img
            class="prescription"
            :src="require('../assets/04 Go Haywire/PNG/05a Prescription.png')"
            alt="Prescription"
          />
        </div>
      </div>
    </div>
    <div v-else class="haywire haywire--1 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="prescription-container mobile">
            <img
              class="prescription"
              :src="require('../assets/04 Go Haywire/PNG/05a Prescription.png')"
              alt="Prescription"
            />
          </div>
          <Quotation>
            <p>
              She says, “I don’t want to push my health just so I can get a better
              connection for myself.”
            </p>
          </Quotation>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="haywire haywire--5 container">
      <div class="jc-sb-ai-fe pb-7 mb-7">
        <div class="txt-wrapper w-50">
          <p class="mb-7">
            Ignacio echoes Radaza’s sentiments. He acknowledges the adverse
            risks and conditions that studying late into the night entails, but
            also understands that it is a necessary compromise.
          </p>
          <Quotation class="mb-7">
            <p>
              “I’m on probation for scholarship...so I have to watch my grades,”
              he said.” “I can’t just easily sacrifice academics to adapt here
              at home, and I can’t sacrifice adapting at home for academics.”
            </p>
          </Quotation>
        </div>
      </div>
    </div>
    <div v-else class="haywire haywire--1 center">
      <div class="content-wrapper">
        <div class="container">
          <p class="mb-5">
            Ignacio echoes Radaza’s sentiments. He acknowledges the adverse
            risks and conditions that studying late into the night entails, but
            also understands that it is a necessary compromise.
          </p>
          <Quotation class="mb-5">
            <p>
              “I’m on probation for scholarship...so I have to watch my grades,”
              he said.” “I can’t just easily sacrifice academics to adapt here
              at home, and I can’t sacrifice adapting at home for academics.”
            </p>
          </Quotation>
          <p class="mb-5">
            However, this does not mean that either Radaza or Ignacio is ready
            to sacrifice their health entirely. Sustaining their health is still
            a priority, especially for Ignacio whose parents are at greater risk
            of contracting the virus.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="haywire haywire--6 container">
      <div class="jc-sb-ai-fe mt-7 pb-7 mb-7">
        <div class="txt-wrapper w-50">
          <p class="mb-7 pb-7">
            However, this does not mean that either Radaza or Ignacio is ready
            to sacrifice their health entirely. Sustaining their health is still
            a priority, especially for Ignacio whose parents are at greater risk
            of contracting the virus.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quotation from "~/components/Quote.vue";
export default {
  components: {
    Quotation,
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.haywire-header {
  margin-top: 10rem;
  height: 200px;
  display: flex;

  h1 {
    width: 300px;
    text-align: center;
  }

  .sparks-1 {
    width: 35%;
    height: 100%;
    background-image: url("../assets/04 Go Haywire/SVG/01 Sparks White.svg");
    background-size: cover;
    background-position: right;
  }

  .flipped {
    background-position: left;
  }
}

.mobile {
  .sparks-1 {
    width: 25% !important;
  }

  h1 {
    width: 50% !important;
  }
}

.pen-1 {
  height: 400px;

  &.mobile {
    height: 150px;
  }
}

.txt-wrapper.canvas {
  width: 55%;
}

.img-wrapper.canvas-img {
  width: 25%;
}

.canvas-1 {
  width: 100%;
  height: 400px;
  object-fit: cover;

  &.mobile {
    width: 60%;
    height: auto;
    margin-left: -2rem;
  }
}

.canvas-2 {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: left;

  &.mobile {
    width: 70%;
    height: auto;
    object-position: center;
  }
}

.pen-container,
.canvas-container,
.prescription-container {
  overflow: hidden;
}

.prescription-container {
  height: 600px;
  padding-top: 2rem;

  &.mobile {
    height: 350px;
    padding-top: 1rem;
  }
}

.prescription {
  width: 60%;
  transform: rotate(340deg);
  left: 50%;
}

.haywire {
  &--1 {
    .txt-wrapper {
      margin-top: 10em;
    }
  }
}
</style>