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
    height: 20px;
    width: 270px;
}

.quotation {
    width: 100%;
    height: 350px;

    .qt-content {
        position: absolute;
        width: 60vw;

        p {
            font-size: $font-size--7;
        }
    }
}
</style>