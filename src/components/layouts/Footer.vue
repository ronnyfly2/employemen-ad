<template lang="pug">
footer
	.box_center
		span Copyright © Delicores 2017 All rights reserved
	.tag_important
		.box_center
			p.uppercase Tomar bebidas alcoholícas en exceso es dañino para la salud
			hr
			p.uppercase Prohibida la venta de bebidas alcohólicas a menores de 18 años
</template>

<script>
export default {
	props:['Footer']
}
</script>
<style lang="stylus">
footer
	width 100%
	background-color white
	text-align left
	display block
	span
		max-width 342px
		font-size 15px
		font-stretch expanded
		color #303646
		line-height 4.3
	.tag_important
		background #222222
		color #9c9c9c
		padding 0px 10px
	p.uppercase
		text-transform uppercase
		display block
		max-width 325px
		text-align center
		margin 0 auto
		padding 10px 0
		font-size 15px
	hr
		border 0
		border-top 1px solid #9c9c9c
		max-width 450px
		margin 0 auto
</style>
