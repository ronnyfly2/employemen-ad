<template lang="pug">
	header
		.box_center
			img.logo(src="../../assets/img/logo_delicores_v2.png")
			scrollactive(ref="scrollactive" :clickToScroll="true" active-class="active_nav" :offset="102" :duration="800" bezier-easing-value=".5,0,.35,1" @itemchanged="ctnActive")
				a.menu_responsive.icon.icon-menu(href="javascript:;" @click="openMenu")
				ul
					a.menu_responsive.icon.icon-close(href="javascript:;" @click="openMenu")
					li
						a(href="#section-1" class="scrollactive-item") Inicio
					li
						a(href="#section-2" class="scrollactive-item") Quienes Somos
					li
						a(href="#section-3" class="scrollactive-item") Delivery
					li
						a(href="#section-4" class="scrollactive-item") Marcas
					li
						a(href="#section-5" class="scrollactive-item") Contáctenos

</template>
<script>
require('./../../stylus/base/base.styl')
export default {
	props:['ListMenu'],
	data () {
		return {
			loading: false,
		}
	},
	methods: {
		ctnActive(event, currentItem, lastActiveItem){
			// Add your items
		},
		openMenu(){
			if($('header nav ul').hasClass('active_menu_responsive')){
				$('header nav ul').removeClass('active_menu_responsive')
			}else{
				$('header nav ul').addClass('active_menu_responsive')
			}
			console.log('aja')
		}
	}
}
</script>

<style lang="stylus">
.menu_responsive
	display none
	margin-top 32px
	&.icon-close
	&.icon-menu
		font-size 28px
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
	width 70%
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
		margin 0 1.7%
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
@media only screen and (max-width: 1060px)
	.menu_responsive
		display block
		text-align right
		position absolute
		right 10px
		top 0
	.logo
		width 300px
	nav
		width 300px
		min-width 280px
		ul
			position absolute
			height 100vh
			background #002433
			right -320px
			top 0
			width 320px
			transition all .6s ease-in
			&.active_menu_responsive
				right 0
			.icon-close
				color white
				position absolute
				right 15px
				top -18px
			li
				display block
				a
					line-height 2
					color white
					font-size 25px
</style>
