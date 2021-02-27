<template>
  <div class="pitchblack">
        <div class="pitchblack-header center mt-6 mb-6">
            <h1>Pitch black</h1>
        </div>
    
        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--1 jc-sb-ai-fe">
            <div class="img-wrapper kitchen-img">
                <div class="kitchen-container">
                    <img class="kitchen-1" :src="require('../assets/03 Pitch Black/PNG/01a Kitchen Table.png')" alt="Kitchen 1a">
                </div>
            </div>

            <div class="txt-wrapper kitchen px-3p">
                <p class="mb-5">
                    Although power interruptions during the day are bothersome and inconvenient in their own right, it is not difficult to imagine how much more strenuous it would be to complete one’s duties during the night. The reality of accomplishing tasks without light or electricity is a situation that students from energy-insecure areas have to invariably face.
                </p>
                <p class="mb-5">
                    By evening, the last rays of sunlight fade as day yields to night and the world begins to wind down. At approximately 7:15 PM, all of the students are preparing for dinner when an unexpected power outage occurs.
                </p>
                <p class="mb-5">
                    Cortez rummages for a candle and some matches.
                </p>
                <p class="mb-5">
                    One would think an individual from an area with energy security would be better prepared for these situations, but a constant and reliable stream of power can potentially breed complacency.
                </p>
                <p class="mb-5">
                    “Apparently, I don’t have flashlights,” he reflected.
                </p>
                <p class="mb-5">
                    At 8:30 PM, Cortez’s power returns after roughly an hour and he resumes with his work. The other two, however, still remain in relative darkness.
                </p>
            </div>
            
            <div class="img-wrapper kitchen-img">
                <div class="kitchen-container">
                    <img class="kitchen-2" :src="require('../assets/03 Pitch Black/PNG/01b Kitchen Table ON.png')" alt="Kitchen 1b">
                </div>
            </div>
        </div> 
        <div v-else class="ptchblk ptchblk--1 center">
            <div class="content-wrapper">
                <div class="kitchen-container mb-5">
                    <img class="kitchen-1 mobile" :src="require('../assets/03 Pitch Black/PNG/01a Kitchen Table.png')" alt="Kitchen 1a">
                </div>
                <div class="container">
                    <p class="mb-5">
                        Although power interruptions during the day are bothersome and inconvenient in their own right, it is not difficult to imagine how much more strenuous it would be to complete one’s duties during the night. The reality of accomplishing tasks without light or electricity is a situation that students from energy-insecure areas have to invariably face.
                    </p>
                    <p class="mb-5">
                        By evening, the last rays of sunlight fade as day yields to night and the world begins to wind down. At approximately 7:15 PM, all of the students are preparing for dinner when an unexpected power outage occurs.
                    </p>
                    <p class="mb-5">
                        Cortez rummages for a candle and some matches.
                    </p>
                    <p class="mb-5">
                        One would think an individual from an area with energy security would be better prepared for these situations, but a constant and reliable stream of power can potentially breed complacency.
                    </p>
                    <p class="mb-5">
                        “Apparently, I don’t have flashlights,” he reflected.
                    </p>
                    <p class="mb-5">
                        At 8:30 PM, Cortez’s power returns after roughly an hour and he resumes with his work. The other two, however, still remain in relative darkness.
                    </p>
                </div>
                
                <div class="kitchen-container jc-flex-end ml-auto mb-5">
                    <img class="kitchen-2 mobile" :src="require('../assets/03 Pitch Black/PNG/01b Kitchen Table ON.png')" alt="Kitchen 1b">
                </div>
            </div>
        </div>

        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--2 container">
            <div class="jc-space-between pt-7 pb-7 mt-7 mb-7">
                <div class="img-wrapper w-50">
                    <div class="manila-container">
                        <img class="manila" :src="require('../assets/03 Pitch Black/SVG/02 Metro Manila Combined.svg')" alt="Metro Manila Map">
                    </div>
                </div>
                <div class="txt-wrapper w-50">
                    <p class="mb-5">
                        Where Cortez lives in Metro Manila, most power is sourced from coal-fueled plants but generally pulls from different power sources like oil, solar, and natural gas. Because of the number and diversity of power plants, his locality is sufficiently supplied with electricity.
                    </p>
                </div>
            </div>
        </div> 
        <div v-else class="ptchblk ptchblk--2 center">
            <div class="content-wrapper">
                <div class="container">
                    <p class="mb-5">
                        Where Cortez lives in Metro Manila, most power is sourced from coal-fueled plants but generally pulls from different power sources like oil, solar, and natural gas. Because of the number and diversity of power plants, his locality is sufficiently supplied with electricity.
                    </p>
                    <div class="flashlight-container mb-7">
                        <img class="flashlight" :src="require('../assets/03 Pitch Black/PNG/05 Flashlight ON.png')" alt="rice cooker">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--3 jc-sb-ai-fs">
            <div class="txt-wrapper w-50 px-3p">
                <p class="mb-5">
                    On the other hand, Arbon Jr. is able to continue his meal with a flashlight in hand. However, without electricity, his family’s rice cooker is rendered useless and all other cooking must be finished using a gas range if one is available. 
                </p>
                <p class="mb-5">
                    Power outages take longer to fix in energy insecure areas and, at times, can occur long throughout the night. Arbon Jr. recalled that power interruptions can occur at any time—be it dawn, dusk, or in between.
                </p>
            </div>
            <div class="img-wrapper w-50">
                <div class="flashlight-container">
                    <img class="flashlight" :src="require('../assets/03 Pitch Black/PNG/05 Flashlight ON.png')" alt="rice cooker">
                </div>
            </div>
        </div>
        <div v-else class="ptchblk ptchblk--3 center">
            <div class="content-wrapper">
                <div class="container">
                    <p class="mb-5">
                        On the other hand, Arbon Jr. is able to continue his meal with a flashlight in hand. However, without electricity, his family’s rice cooker is rendered useless and all other cooking must be finished using a gas range if one is available. 
                    </p>
                    <p class="mb-5">
                        Power outages take longer to fix in energy insecure areas and, at times, can occur long throughout the night. Arbon Jr. recalled that power interruptions can occur at any time—be it dawn, dusk, or in between.
                    </p>
                    <p class="mb-5">
                        Meanwhile, Arbon Jr.’s hometown—Dumaguete City—sources most of its electricity from geothermal and solar energy. Although mostly clean, the energy output from the nearby power plants is sometimes insufficient and are subject to changes in weather. Recently, the Negros Oriental II Electric Cooperative has been running on a daily power deficit.
                    </p>
                </div>
            </div>
        </div>

        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--4 container">
            <div class="jc-space-between pt-7 pb-7 mt-7 mb-7">
                <div class="img-wrapper w-50">
                    <div class="dumaguete-container">
                        <img class="dumaguete" :src="require('../assets/03 Pitch Black/PNG/03 Dumaguete.png')" alt="powerbank">
                    </div>
                </div>
                <div class="txt-wrapper w-50">
                    <p class="mb-7 pb-7">
                        Meanwhile, Arbon Jr.’s hometown—Dumaguete City—sources most of its electricity from geothermal and solar energy. Although mostly clean, the energy output from the nearby power plants is sometimes insufficient and are subject to changes in weather. Recently, the Negros Oriental II Electric Cooperative has been running on a daily power deficit.
                    </p>
                </div>
            </div>
        </div>

        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--5 container">
            <div class="center mt-7">
                <div class="img-wrapper w-50">
                    <div class="mindanao-container">
                        <img class="mindanao" :src="require('../assets/03 Pitch Black/PNG/04 Mindanao.png')" alt="powerbank">
                    </div>
                </div>
                <div class="txt-wrapper w-50">
                    <p class="mb-7 pb-7">
                        In Mindanao, where Ignacio and Radaza reside, the Agus and Pulanggi hydroelectric power plants supply more than half of the region’s total electricity requirements. These hydroelectric power plants are likewise subject to weather conditions—particularly during the dry season—and their output, therefore, is seasonal. In 2015, water levels for both power plants reached critical levels, resulting in lowered power supply in Mindanao. 
                    </p>
                    <p class="mb-7 pb-7">
                        Given their finite nature, renewable energy facilities dominating areas such as Arbon Jr.’s are not as efficient in producing ener gy compared to their non-renewable counterparts. While non-renewable facilities are reliable, they are not without cost to the environment. 
                    </p>
                </div>
            </div>
        </div>

        <div v-if="this.windowWidth > 991" class="ptchblk ptchblk--6 container">
            <div class="center mt-7">
                <div class="txt-wrapper w-50">
                    <p class="mb-7 pb-7">
                        Despite the contrast in their experiences, all of the students nonetheless are able to work on their online modules almost unimpeded.
                    </p>
                    <p class="mb-7 pb-7">
                        Ignacio shared that studying is easier compared to other activities at night since his devices generate their own light—granted they were charged and online data was purchased beforehand. However, this still does not compare to having electricity that is stable enough to keep these devices constantly powered and connected to a WiFi router.
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="ptchblk ptchblk--4 center">
            <div class="content-wrapper">
                <div class="container">
                    <div class="mindanao-container mb-7 pb-7">
                        <img class="mindanao mobile" :src="require('../assets/03 Pitch Black/PNG/04 Mindanao.png')" alt="powerbank">
                    </div>
                    <p class="mb-5">
                        In Mindanao, where Ignacio and Radaza reside, the Agus and Pulanggi hydroelectric power plants supply more than half of the region’s total electricity requirements. These hydroelectric power plants are likewise subject to weather conditions—particularly during the dry season—and their output, therefore, is seasonal. In 2015, water levels for both power plants reached critical levels, resulting in lowered power supply in Mindanao. 
                    </p>
                    <p class="mb-5">
                        Given their finite nature, renewable energy facilities dominating areas such as Arbon Jr.’s are not as efficient in producing ener gy compared to their non-renewable counterparts. While non-renewable facilities are reliable, they are not without cost to the environment. 
                    </p>
                    <p class="mb-5">
                        Despite the contrast in their experiences, all of the students nonetheless are able to work on their online modules almost unimpeded.
                    </p>
                    <p class="mb-5">
                        Ignacio shared that studying is easier compared to other activities at night since his devices generate their own light—granted they were charged and online data was purchased beforehand. However, this still does not compare to having electricity that is stable enough to keep these devices constantly powered and connected to a WiFi router.
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
            windowWidth: 0
        }
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

<style lang="scss" scoped>

.pitchblack-header {
  background: linear-gradient(180deg, #c7ced3 0%, #000000 49.82%, #021C33 100%);
  height: 440px;
}

.txt-wrapper.kitchen {
    width: 55%;
}

.img-wrapper.kitchen-img {
    width: 25%;
    padding-bottom: 15rem;
}

.kitchen-1, .kitchen-2 {
    width: 90%;
    height: 100%;
    border: 12px solid white;
}

.kitchen-1 {
    margin-left: -3rem;
}

.mobile {
    width: 40% !important; 
}

.kitchen-2 {
    margin-right: -3rem;
}

.ml-auto {
    margin-left: auto;
}

.kitchen-container, .flashlight-container {
    overflow-x: hidden;
}

.manila, .dumaguete, .mindanao {
    width: 60%;
    height: 100%;
    border: 12px solid white;
}

.flashlight {
    width: auto;
    height: 500px;
    transform: rotate(245deg);
    left: 60%;
    margin-top: -8rem;
}

.ptchblk {
    &--1 {
        .txt-wrapper {
            margin-top: 10em;
        }
    }
}
</style>