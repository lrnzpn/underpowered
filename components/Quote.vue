<template>
  <div class="quotation">
        <div class="qt-content">
            <slot></slot>
            <div class="purple-bar"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.purple-bar {
    background-color: $asset-purple;
    height: 1.25em;
    width: 270px;

    @include screen('md') {
        width: 80%;
        height: .75em;
        margin-top: 1em;
    }

    @include screen('xs') {
        height: .5em;
    }
}

.quotation {
    width: 100%;
    height: 350px;

    @include screen('md') {
        height: auto;
    }

    .qt-content {
        position: absolute;
        width: 60vw;

        @include screen ('lg') {
            width: 55vw;
        }

        @include screen('md') {
            position: relative;
            width: 100%;
        }

        p {
            font-size: $font-size--7;

            @include screen('lg') {
                font-size: $font-size--6;
            }

            @include screen('md') {
                font-size: $font-size--4;
            }
        }
    }
}
</style>