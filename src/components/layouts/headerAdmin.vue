<template lang="pug">
	header
		.box_center
			//img.logo(src="../../assets/img/logo_delicores.png")

</template>
<script>
require('./../../stylus/base/base.styl')
export default {
	props:['headerAdmin'],
	data () {
		return {
			loading: false,
		}
	},
	methods: {

	}
}
</script>

<style lang="stylus">
header
	height 102px
	width 100%
	background #ffffff
	position fixed
	top 0
	z-index 99
	box-shadow -1px -1px 11px 0px #ccc
	.box_center
		text-align left
		padding 0 10px
.logo
	width 25.554%
	max-width 240px
	margin-top 20px
	min-width 150px
nav
	width 50%
	min-width 400px
	text-align right
	float right
	&:before
		clear both
	ul
		list-style-type none
		padding 0
		padding-top 37px

	li
		display inline-block
		margin 0 2%
		position relative
		&:last-child
			margin-right 0
	a
		color #303646
		text-align center
		display block
		font-size 18px
		font-family 'EncodeSansExpanded-Light'
		&.active_nav
			color #eb0528
			font-family 'EncodeSansExpanded-Bold'
		&.router-link-exact-active
			border-bottom 3px solid #ffffff
			color #ffffff
</style>
