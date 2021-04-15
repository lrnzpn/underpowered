<template>
  <div class="lightingway">
    <div
      class="lighting-header"
      v-bind:class="{ mobile: this.windowWidth <= 991 }"
    >
      <h1>Lighting the way</h1>
    </div>
    <div
      v-if="this.windowWidth > 991"
      class="lighting lighting--1 jc-sb-ai-fs mb-7 pb-7 mt-3"
    >
      <div class="txt-wrapper px-3p w-50" id="planttxt">
        <p class="mb-5">
          As each day starts anew, the rising sun will restart the students’
          daily routines—one uninterrupted, the others inconvenienced by poor
          signal and unreliable power. In response to this year’s expected
          service interruptions, Department of Energy (DOE) officials urged
          households and government agencies to watch their power consumption.
        </p>
        <p class="mb-5">
          Although one may be able to reduce consumption on a personal level,
          this alone might not be enough to reduce aggregate demand. Without
          stronger government support, the energy sector will continue to
          struggle in meeting the country’s energy needs. As of writing, the DOE
          is poised to approve new green energy projects to address the
          country’s ever-increasing power demands.
        </p>
        <p>
          Adding to the new green energy projects, the DOE has laid out plans to
          upgrade power production and transmission infrastructure as part of
          the administration’s Build, Build, Build Program. These plans seeking
          to address the shortcomings of the power industry felt by regular
          people are often attributed to the country’s aging power plants.
        </p>
      </div>

      <div class="img-wrapper w-50">
        <transition name="fade">
          <div v-if="this.plantFixed" class="sun-container">
            <img
              class="sun"
              :src="require('../assets/05 Lighting the Way/PNG/02 Sun.png')"
              alt="Sun"
            />
          </div>
        </transition>
        <div class="sticky">
          <transition name="fade">
            <div v-if="this.plantFixed" class="powerplant-container">
              <img
                class="powerplant"
                :src="
                  require('../assets/05 Lighting the Way/PNG/03 Powerplant TRANSPARENT.png')
                "
                alt="Sun"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div v-else class="lighting lighting--1 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="sun-container center mb-5">
            <img
              class="sun mobile"
              :src="require('../assets/05 Lighting the Way/PNG/02 Sun.png')"
              alt="Sun"
            />
          </div>
          <p class="mb-5">
            As each day starts anew, the rising sun will restart the students’
            daily routines—one uninterrupted, the others inconvenienced by poor
            signal and unreliable power. In response to this year’s expected
            service interruptions, Department of Energy (DOE) officials urged
            households and government agencies to watch their power consumption.
          </p>
          <p class="mb-5">
            Although one may be able to reduce consumption on a personal level,
            this alone might not be enough to reduce aggregate demand. Without
            stronger government support, the energy sector will continue to
            struggle in meeting the country’s energy needs. As of writing, the
            DOE is poised to approve new green energy projects to address the
            country’s ever-increasing power demands.
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="this.windowWidth > 991"
      class="lighting lighting--2 jc-sb-ai-fs mt-7 pt-7 mb-7 pb-7"
    >
      <div class="img-wrapper w-50">
        <transition name="fade">
          <div v-if="this.planFixed" class="plan-container">
            <img
              class="plan"
              :src="
                require('../assets/05 Lighting the Way/PNG/04 Plan + Caraga.png')
              "
              alt="Plan"
            />
          </div>
        </transition>
      </div>
      <div class="txt-wrapper px-3p w-50" id="plantxt">
        <p class="mb-5">
          In recent years, however, reduced public infrastructure spending due
          to slow economic growth has delayed many of these projects. With the
          National Grid Corporation of the Philippines, the DOE has attempted to
          compensate for the project backlogs caused by the COVID-19 pandemic
          through a “catch-up plan.” The new measures would include the
          resumption of energy production and transmission projects like the
          Butuan-Placer transmission line in the Caraga Administrative Region.
        </p>
        <p class="mb-5">
          For people who live in energy insecure regions, the new energy
          projects offer hope, especially with the effects of power
          interruptions on individuals extending beyond matters of economics.
          Unstable power incurs costs to one’s home life, academic performance,
          as well as mental and physical health.
        </p>
      </div>
    </div>
    <div v-else class="lighting lighting--2 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="powerplant-container mb-5">
            <img
              class="powerplant mobile"
              :src="
                require('../assets/05 Lighting the Way/PNG/03 Powerplant TRANSPARENT.png')
              "
              alt="Sun"
            />
          </div>
          <p class="mb-5">
            Adding to the new green energy projects, the DOE has laid out plans
            to upgrade power production and transmission infrastructure as part
            of the administration’s Build, Build, Build Program. These plans
            seeking to address the shortcomings of the power industry felt by
            regular people are often attributed to the country’s aging power
            plants.
          </p>
          <p class="mb-5">
            In recent years, however, reduced public infrastructure spending due
            to slow economic growth has delayed many of these projects. With the
            National Grid Corporation of the Philippines, the DOE has attempted
            to compensate for the project backlogs caused by the COVID-19
            pandemic through a “catch-up plan.” The new measures would include
            the resumption of energy production and transmission projects like
            the Butuan-Placer transmission line in the Caraga Administrative
            Region.
          </p>
          <p class="mb-5">
            For people who live in energy insecure regions, the new energy
            projects offer hope, especially with the effects of power
            interruptions on individuals extending beyond matters of economics.
            Unstable power incurs costs to one’s home life, academic
            performance, as well as mental and physical health.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="lighting lighting--3 container">
      <div class="center mt-7">
        <div class="txt-wrapper w-50">
          <p class="mb-5">
            People like Cortez who live with a stable source of electricity have
            clear advantages over those who do not. Regions like Northern
            Mindanao, Caraga, Eastern, and Central Visayas face frequent outages
            from factors like inadequate power supply, weather disturbances, and
            high demand at peak hours. This situation is only exacerbated by the
            fact that more people work from home as a result of the pandemic.
          </p>
          <p class="mb-5">
            The lack of reliable energy can limit peoples’ choices and disrupt
            schedules as people are often powerless in changing their local
            power situation. While energy insecurity remains an issue, industry
            innovation and government support for the energy sector are avenues
            that may help light the way to energy security and equity. Moving
            forward, the energy sector must adapt and improve power production
            and transmission infrastructure if they are to meet the needs of
            ordinary citizens like Radaza, Ignacio, and Arbon Jr.
          </p>
          <p class="editor-note mb-7">
            <i
              >*Editor’s Note: The name of an interviewee was changed upon their
              request to protect their identity and privacy.</i
            >
          </p>
        </div>
      </div>
    </div>
    <div v-else class="lighting lighting--3 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="plan-container mb-5">
            <img
              class="plan mobile"
              :src="
                require('../assets/05 Lighting the Way/PNG/04 Plan + Caraga.png')
              "
              alt="Plan"
            />
          </div>
          <p class="mb-7">
            People like Cortez who live with a stable source of electricity have
            clear advantages over those who do not. Regions like Northern
            Mindanao, Caraga, Eastern, and Central Visayas face frequent outages
            from factors like inadequate power supply, weather disturbances, and
            high demand at peak hours. This situation is only exacerbated by the
            fact that more people work from home as a result of the pandemic.
          </p>
          <p class="mb-7">
            The lack of reliable energy can limit peoples’ choices and disrupt
            schedules as people are often powerless in changing their local
            power situation. While energy insecurity remains an issue, industry
            innovation and government support for the energy sector are avenues
            that may help light the way to energy security and equity. Moving
            forward, the energy sector must adapt and improve power production
            and transmission infrastructure if they are to meet the needs of
            ordinary citizens like Radaza, Ignacio, and Arbon Jr.
          </p>
          <p class="editor-note mb-7">
            <i
              >*Editor’s Note: The name of an interviewee was changed upon their
              request to protect their identity and privacy.</i
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 0,
      plantFixed: false,
      planFixed: false,
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    plantScroll() {
      try {
          document.getElementById("planttxt").getBoundingClientRect().top -
        document.getElementById("planttxt").getBoundingClientRect().height / 3 <
        0 &&
      document.getElementById("planttxt").getBoundingClientRect().bottom -
        document.getElementById("planttxt").getBoundingClientRect().height / 3 >
        0
        ? (this.plantFixed = true)
        : (this.plantFixed = false);
      } catch {}
    },
    planScroll() {
      try {
          document.getElementById("plantxt").getBoundingClientRect().top -
        document.getElementById("plantxt").getBoundingClientRect().height / 2 <
        0 &&
      document.getElementById("plantxt").getBoundingClientRect().bottom -
        document.getElementById("plantxt").getBoundingClientRect().height / 1.5 >
        0
        ? (this.planFixed = true)
        : (this.planFixed = false);
      } catch {}
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  updated() {
    window.addEventListener("scroll", () => {
      this.plantScroll();
      this.planScroll();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
h1,
p {
  color: $txt-lights-on;
}

.lightingway {
  background-color: $bg-lights-on;

  h1 {
    text-align: center;
  }
}

.lighting-header {
  background-image: url("~assets/05 Lighting the Way/PNG/01 Flashlight Banner.png");
  background-size: 85% 85%;
  height: 10px;
  padding-top: 8rem;
  padding-bottom: 9rem;
  background-repeat: no-repeat;
  background-position: left 60%;

  &.mobile {
    background-size: cover;
    background-position: 30%;
  }
}

.sun {
  height: 200px;
  left: 25%;

  &.mobile {
    height: 150px;
    left: 0;
  }
}

.lighting--1 {
  .img-wrapper {
    min-height: 1300px;

    .sticky {
      top: 50%;
    }
  }
    // * {
    //   border: 1px solid red;
    // }
}

.powerplant-container {
  text-align: center;

  &.sticky {
    top: 80%;
  }
}

.powerplant {
  height: 300px;

  &.mobile {
    height: 175px;
  }
}

.plan {
  height: 700px;
  margin-left: -10rem;

  &.mobile {
    height: 350px;
    margin-left: -5rem;
  }
}

.editor-note {
  font-size: $font-size--3;
}
</style>