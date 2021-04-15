<template>
    <div class="loader-container center">
        <div class="box">
            <div class="loader"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: $asset-blue;
    z-index: 99990;
}

.box {
    display: inline-block;
	width: 80px;
	height: 200px;
	font-size: 2em;
	padding: 1em;
	position: relative;
	margin-bottom: .25em;
}

.loader {
	height: 1em;
	border: .1em white solid;
	border-radius: .1em;
	position: relative;
	animation: loader 3s linear infinite;
	&:after {
		width: .1em;
		height: 100%;
		background-color: white;
		border-radius: 0px .5em .5em 0px;
		position: absolute;
		content: "";
		top: 0;
		left: calc(100% + .1em);
	}
}

@keyframes loader {
	0% {
		box-shadow: inset 80px 0px 0px $asset-yellow;
	}
	100% {
        box-shadow: inset 0px 0px 0px $asset-yellow;	
	}
}
</style>