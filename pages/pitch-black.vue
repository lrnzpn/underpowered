<template>
  <div class="pitchblack">
    <div class="pitchblack-header center mt-6 mb-6">
      <h1>Pitch black</h1>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--1 jc-sb-ai-fs">
      <div class="img-wrapper kitchen-img sticky">
        <transition name="kitchen-slide">
          <img
            class="kitchen-1"
            v-bind:class="{ kitchenNotInFrame: this.kitchenNotInFrame }"
            :src="require('../assets/03 Pitch Black/PNG/01a Kitchen Table.png')"
            alt="Kitchen 1a"
          />
        </transition>
      </div>

      <div class="txt-wrapper kitchen px-3p" id="kitchentxt">
        <p class="mb-5">
          Although power interruptions during the day are bothersome and
          inconvenient in their own right, it is not difficult to imagine how
          much more strenuous it would be to complete one’s duties during the
          night. The reality of accomplishing tasks without light or electricity
          is a situation that students from energy-insecure areas have to
          invariably face.
        </p>
        <p class="mb-5">
          By evening, the last rays of sunlight fade as day yields to night and
          the world begins to wind down. At approximately 7:15 PM, all of the
          students are preparing for dinner when an unexpected
          <span id="kitchen-candle">power outage</span>
          occurs.
        </p>
        <p class="mb-5">Cortez rummages for a candle and some matches.</p>
        <p class="mb-5">
          One would think an individual from an area with energy security would
          be better prepared for these situations, but a constant and reliable
          stream of power can potentially breed complacency.
        </p>
        <p class="mb-5">
          “Apparently, I don’t have flashlights,” he reflected.
        </p>
        <p class="mb-5">
          At 8:30 PM, Cortez’s power returns after roughly an hour and he
          resumes with his work. The other two, however, still remain in
          relative darkness.
        </p>
      </div>

      <div class="img-wrapper kitchen-img sticky">
        <transition name="kitchen-slide">
          <img
            v-if="this.kitchenLit"
            class="kitchen-2"
            id="kitchen-2"
            v-bind:class="{
              ml3: this.windowWidth > 991,
              kitchenNotInFrame: this.kitchenNotInFrame,
              kitchenLit: this.kitchenLit,
            }"
            :src="
              require('../assets/03 Pitch Black/PNG/01c Kitchen Table ON.png')
            "
            alt="Kitchen 1b"
          />
          <img
            v-else
            class="kitchen-2"
            id="kitchen-2"
            v-bind:class="{
              ml3: this.windowWidth > 991,
              kitchenNotInFrame: this.kitchenNotInFrame,
            }"
            :src="
              require('../assets/03 Pitch Black/PNG/01b Kitchen Table OFF.png')
            "
            alt="Kitchen 1b"
          />
        </transition>
      </div>
    </div>
    <div v-else class="ptchblk ptchblk--1 center">
      <div class="content-wrapper">
        <div class="kitchen-container mb-5">
          <img
            class="kitchen-1 mobile"
            :src="require('../assets/03 Pitch Black/PNG/01a Kitchen Table.png')"
            alt="Kitchen 1a"
          />
        </div>
        <div class="container">
          <p class="mb-5">
            Although power interruptions during the day are bothersome and
            inconvenient in their own right, it is not difficult to imagine how
            much more strenuous it would be to complete one’s duties during the
            night. The reality of accomplishing tasks without light or
            electricity is a situation that students from energy-insecure areas
            have to invariably face.
          </p>
          <p class="mb-5">
            By evening, the last rays of sunlight fade as day yields to night
            and the world begins to wind down. At approximately 7:15 PM, all of
            the students are preparing for dinner when an unexpected power
            outage occurs.
          </p>
          <p class="mb-5">Cortez rummages for a candle and some matches.</p>
          <p class="mb-5">
            One would think an individual from an area with energy security
            would be better prepared for these situations, but a constant and
            reliable stream of power can potentially breed complacency.
          </p>
          <p class="mb-5">
            “Apparently, I don’t have flashlights,” he reflected.
          </p>
          <p class="mb-5">
            At 8:30 PM, Cortez’s power returns after roughly an hour and he
            resumes with his work. The other two, however, still remain in
            relative darkness.
          </p>
        </div>

        <div class="kitchen-container jc-flex-end ml-auto mb-5">
          <img
            class="kitchen-2 mobile"
            :src="
              require('../assets/03 Pitch Black/PNG/01b Kitchen Table OFF.png')
            "
            alt="Kitchen 1b"
          />
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--2 container">
      <div class="ai-flex-start pt-7 pb-7 mt-7 mb-7">
        <div class="img-wrapper w-50 sticky">
          <transition name="fade">
            <div v-if="this.manilaFixed" class="manila-container">
              <img
                class="manila"
                :src="
                  require('../assets/03 Pitch Black/PNG/02 Metro Manila Complete.png')
                "
                alt="Metro Manila Map"
              />
            </div>
          </transition>
        </div>
        <div class="txt-wrapper center w-50" id="manilatxt">
          <p class="mb-5">
            Where Cortez lives in Metro Manila, most power is sourced from
            coal-fueled plants but generally pulls from different power sources
            like oil, solar, and natural gas. Because of the number and
            diversity of power plants, his locality is sufficiently supplied
            with electricity.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="ptchblk ptchblk--2 center">
      <div class="content-wrapper">
        <div class="container">
          <p class="mb-5">
            Where Cortez lives in Metro Manila, most power is sourced from
            coal-fueled plants but generally pulls from different power sources
            like oil, solar, and natural gas. Because of the number and
            diversity of power plants, his locality is sufficiently supplied
            with electricity.
          </p>
          <div class="flashlight-container mb-7">
            <div
              class="flashlight-mobile"
              alt="Flashlight"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--3 jc-sb-ai-fs">
      <div class="txt-wrapper w-50 px-3p" id="flashlighttxt">
        <p class="mb-5">
          On the other hand, Arbon Jr. is able to continue his meal with a
          flashlight in hand. However, without electricity, his family’s rice
          cooker is rendered useless and all other cooking must be finished
          using a gas range if one is available.
        </p>
        <p class="mb-5">
          <span id="power-outage">Power outages</span> take longer to fix in energy insecure areas and, at
          times, can occur long throughout the night. Arbon Jr. recalled that
          power interruptions can occur at any time—be it dawn, dusk, or in
          between.
        </p>
      </div>
      <div class="img-wrapper w-50">
        <transition name="fade">
          <div v-if="this.flashlightFixed" class="flashlight-container">
            <div
              id="flashlight"
              class="flashlight"
              :class="{ 'flashlightFlicker': this.flashlightFlicker }"
              alt="Flashlight"
            />
          </div>
        </transition>
      </div>
    </div>
    <div v-else class="ptchblk ptchblk--3 center">
      <div class="content-wrapper">
        <div class="container">
          <p class="mb-5">
            On the other hand, Arbon Jr. is able to continue his meal with a
            flashlight in hand. However, without electricity, his family’s rice
            cooker is rendered useless and all other cooking must be finished
            using a gas range if one is available.
          </p>
          <p class="mb-5">
            Power outages take longer to fix in energy insecure areas and, at
            times, can occur long throughout the night. Arbon Jr. recalled that
            power interruptions can occur at any time—be it dawn, dusk, or in
            between.
          </p>
          <p class="mb-5">
            Meanwhile, Arbon Jr.’s hometown—Dumaguete City—sources most of its
            electricity from geothermal and solar energy. Although mostly clean,
            the energy output from the nearby power plants is sometimes
            insufficient and are subject to changes in weather. Recently, the
            Negros Oriental II Electric Cooperative has been running on a daily
            power deficit.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--4 container">
      <div class="ai-flex-start pt-7 pb-7 mt-7 mb-7">
        <div class="img-wrapper w-50">
          <transition name="fade">
            <div v-if="this.dumagueteFixed" class="dumaguete-container">
              <img
                v-if="this.dumagueteStatus == 2"
                class="dumaguete"
                :src="
                  require('../assets/03 Pitch Black/PNG/03a Dumaguete Final.png')
                "
                alt="Dumaguete"
              />
              <img
                v-else-if="this.dumagueteStatus == 1"
                class="dumaguete"
                :src="
                  require('../assets/03 Pitch Black/PNG/03b Dumaguete Final.png')
                "
                alt="Dumaguete"
              />
              <img
                v-else
                class="dumaguete"
                :src="
                  require('../assets/03 Pitch Black/PNG/03c Dumaguete Final.png')
                "
                alt="Dumaguete"
              />
            </div>
          </transition>
        </div>
        <div class="txt-wrapper w-50 pt-7" id="dumaguetetxt">
          <p class="mb-5">
            Meanwhile, Arbon Jr.’s hometown—Dumaguete City—sources most of its
            electricity from geothermal and solar energy. Although mostly clean,
            the energy output from the nearby power plants is sometimes
            <span id="insufficient">insufficient</span> and are subject to changes in weather. Recently, the
            Negros Oriental II Electric Cooperative has been running on a daily
            power deficit.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--5 container">
      <div class="center mt-7 mb-7 pb-7">
        <div class="img-wrapper w-50">
          <transition name="fade">
            <div v-if="this.mindanaoFixed" class="mindanao-container">
              <img
                v-if="this.mindanaoLit"
                class="mindanao"
                :src="
                  require('../assets/03 Pitch Black/PNG/04 Mindanao Complete ON.png')
                "
                alt="Mindanao"
              />
              <img
                v-else
                class="mindanao"
                :src="
                  require('../assets/03 Pitch Black/PNG/04 Mindanao Complete.png')
                "
                alt="Mindanao"
              />
            </div>
          </transition>
        </div>
        <div class="txt-wrapper w-50" id="mindanaotxt">
          <p class="mb-5">
            In Mindanao, where Ignacio and Radaza reside, the Agus and Pulanggi
            hydroelectric power plants supply more than half of the region’s
            total electricity requirements. These hydroelectric power plants are
            likewise subject to weather conditions—particularly during the dry
            season—and their output, therefore, is seasonal. In 2015, water
            levels for both power plants reached critical levels, resulting in
            <span id="lowered-power-supply">lowered power supply</span> in
            Mindanao.
          </p>
          <p class="mb-5">
            Given their finite nature, renewable energy facilities dominating
            areas such as Arbon Jr.’s are not as efficient in producing energy
            compared to their non-renewable counterparts. While non-renewable
            facilities are reliable, they are not without cost to the
            environment.
          </p>
        </div>
      </div>
    </div>

    <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--6 container">
      <div class="center mt-7">
        <div class="txt-wrapper w-50">
          <p class="mb-5">
            Despite the contrast in their experiences, all of the students
            nonetheless are able to work on their online modules almost
            unimpeded.
          </p>
          <p class="mb-5">
            Ignacio shared that studying is easier compared to other activities
            at night since his devices generate their own light—granted they
            were charged and online data was purchased beforehand. However, this
            still does not compare to having electricity that is stable enough
            to keep these devices constantly powered and connected to a WiFi
            router.
          </p>
        </div>
      </div>
    </div>
    <div v-else class="ptchblk ptchblk--4 center">
      <div class="content-wrapper">
        <div class="container">
          <div class="mindanao-container mb-7">
            <img
              class="mindanao"
              :src="require('../assets/03 Pitch Black/PNG/04 Mindanao Complete.png')"
              alt="powerbank"
            />
          </div>
          <p class="mb-5">
            In Mindanao, where Ignacio and Radaza reside, the Agus and Pulanggi
            hydroelectric power plants supply more than half of the region’s
            total electricity requirements. These hydroelectric power plants are
            likewise subject to weather conditions—particularly during the dry
            season—and their output, therefore, is seasonal. In 2015, water
            levels for both power plants reached critical levels, resulting in
            lowered power supply in Mindanao.
          </p>
          <p class="mb-5">
            Given their finite nature, renewable energy facilities dominating
            areas such as Arbon Jr.’s are not as efficient in producing energy
            compared to their non-renewable counterparts. While non-renewable
            facilities are reliable, they are not without cost to the
            environment.
          </p>
          <p class="mb-5">
            Despite the contrast in their experiences, all of the students
            nonetheless are able to work on their online modules almost
            unimpeded.
          </p>
          <p>
            Ignacio shared that studying is easier compared to other activities
            at night since his devices generate their own light—granted they
            were charged and online data was purchased beforehand. However, this
            still does not compare to having electricity that is stable enough
            to keep these devices constantly powered and connected to a WiFi
            router.
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
      kitchenNotInFrame: true,
      kitchenLit: false,
      manilaFixed: false,
      flashlightFixed: false,
      flashlightFlicker: false,
      dumagueteFixed: false,
      dumagueteStatus: 2,
      mindanaoLit: false,
      mindanaoFixed: false,
    };
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    kitchenScroll() {
      try {
          document.getElementById("kitchentxt").getBoundingClientRect().top -
        document.getElementById("kitchentxt").getBoundingClientRect().height /
          2 <
        0 &&
      document.getElementById("kitchentxt").getBoundingClientRect().bottom -
        document.getElementById("kitchentxt").getBoundingClientRect().height /
          2 >
        0
        ? (this.kitchenNotInFrame = false)
        : (this.kitchenNotInFrame = true);
      } catch {}
    },
    kitchenLitScroll() {
      try {
          document.getElementById("kitchen-candle").getBoundingClientRect().top -
        80 <=
      document.getElementById("kitchen-2").getBoundingClientRect().top
        ? (this.kitchenLit = true)
        : (this.kitchenLit = false);
      } catch {}
    },
    manilaScroll() {
      try {
          document.getElementById("manilatxt").getBoundingClientRect().top -
        document.getElementById("manilatxt").getBoundingClientRect().height /
          2 <
        0 &&
      document.getElementById("manilatxt").getBoundingClientRect().bottom -
        document.getElementById("manilatxt").getBoundingClientRect().height /
          2 >
        0
        ? (this.manilaFixed = true)
        : (this.manilaFixed = false);
      } catch {}
    },
    flashlightScroll() {
      try {
          var flashlighttxt = document.getElementById("flashlighttxt")
      if(
      flashlighttxt.getBoundingClientRect().top -
        flashlighttxt.getBoundingClientRect()
          .height / 1.8 <
        0 &&
      flashlighttxt.getBoundingClientRect().bottom -
        flashlighttxt.getBoundingClientRect()
          .height / 1.8 >
        0
      ) {
        this.flashlightFixed = true;
      }
      else {
        this.flashlightFixed = false;
      }
      if(
      flashlighttxt.getBoundingClientRect().top -
        flashlighttxt.getBoundingClientRect()
          .height / 2.3 <
        0 &&
      flashlighttxt.getBoundingClientRect().bottom -
        flashlighttxt.getBoundingClientRect()
          .height / 2.3 >
        0
      ) {
        this.flashlightFlicker = true;
      }
      else {
        this.flashlightFlicker = false;
      }
      } catch {}
    },
    dumagueteScroll() {
      try {
          document.getElementById("dumaguetetxt").getBoundingClientRect().top -
        document.getElementById("dumaguetetxt").getBoundingClientRect().height <
        0 &&
      document.getElementById("dumaguetetxt").getBoundingClientRect().bottom -
        document.getElementById("dumaguetetxt").getBoundingClientRect().height >
        0
        ? (this.dumagueteFixed = true)
        : (this.dumagueteFixed = false);

      var insufficient = document.getElementById("insufficient");
      if(insufficient.getBoundingClientRect().top > 500) {
        this.dumagueteStatus = 2;
      }
      else if(insufficient.getBoundingClientRect().top > 400) {
        this.dumagueteStatus = 1;
      }
      else {
        this.dumagueteStatus = 0;
      }
      } catch {}
    },
    mindanaoLitScroll() {
      try {
          const loweredPower = document.getElementById("lowered-power-supply");
      // console.log("power: " + loweredPower)
      // console.log("window: " + window.innerHeight)
      if (loweredPower) {
        if (
          window.innerHeight / 2 >=
          loweredPower.getBoundingClientRect().top
        ) {
          this.mindanaoLit = true;
        } else {
          this.mindanaoLit = false;
        }
      }
      } catch {}
    },
    mindanaoScroll() {
      try {
          document.getElementById("mindanaotxt").getBoundingClientRect().top -
        document.getElementById("mindanaotxt").getBoundingClientRect().height /
          2 <
        0 &&
      document.getElementById("mindanaotxt").getBoundingClientRect().bottom -
        document.getElementById("mindanaotxt").getBoundingClientRect().height /
          2 >
        0
        ? (this.mindanaoFixed = true)
        : (this.mindanaoFixed = false);
      } catch {}
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  updated() {
    window.addEventListener("scroll", () => {
      this.kitchenScroll();
      this.kitchenLitScroll();
      this.manilaScroll();
      this.flashlightScroll();
      this.dumagueteScroll();
      this.mindanaoScroll();
      this.mindanaoLitScroll();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.pitchblack-header {
  background: linear-gradient(180deg, #021c33 0%, #000000 49.82%, #021c33 100%);
  height: 440px;
}

.txt-wrapper.kitchen {
  width: 55%;
}

.img-wrapper.kitchen-img {
  width: 25%;
  padding-bottom: 15rem;
  padding-top: 2rem;
  overflow: hidden;

  &.sticky {
    top: 20%;
  }
}

.kitchen-1,
.kitchen-2 {
  width: 90%;
  height: 100%;
  border: 12px solid white;
  transition: transform 0.7s ease;
}

.kitchen-1 {
  margin-left: -3rem;
  transform: translateX(0);

  &.kitchenNotInFrame {
    transform: translateX(-500px);
  }
}

.mobile {
  width: 40% !important;
}

.kitchen-2 {
  transform: translateX(0) rotate(0);
  &.ml3 {
    margin-left: 3rem;
  }

  &.kitchenLit {
    transform: rotate(-10deg);
  }

  &.kitchenNotInFrame {
    transform: translateX(500px) rotate(-10deg);
  }
}

.ml-auto {
  margin-left: auto;
}

.kitchen-container,
.flashlight-container {
  overflow: hidden;
}

.flashlight {
  width: auto;
  height: 500px;
  // transform: rotate(245deg);
  // left: 30%;
  // margin-top: -3rem;
  background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight ON.png');
  background-size: cover;
  background-position: 10%;

  &.flashlightFlicker {
      background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight OFF.png')
  }
}

.flashlight-mobile {
  width: auto;
  height: 300px;
  background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight OFF.png');
  background-size: 130%;
  background-position: 5%;
  background-repeat: no-repeat;
  // transform: rotate(245deg);
}

.flashlightFlicker {
    animation-name: lightFlicker;
    animation-duration: 1s;
}

@keyframes lightFlicker {
    0% {
        background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight ON.png')
    }

    33% {
        background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight OFF.png')
    }

    66% {
        background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight ON.png')
    }

    100% {
        background-image: url('../assets/03 Pitch Black/PNG/05 Flashlight OFF.png')
    }
}

.ptchblk--2 {
  .manila {
    width: 85%;
    height: 100%;
    margin-left: -5rem;
  }

  .txt-wrapper {
    min-height: 800px;
  }
}

.ptchblk--4 {
  .txt-wrapper {
    min-height: 800px;
  }
}

.dumaguete,
.mindanao {
  width: 80%;
  height: 100%;
}
</style>