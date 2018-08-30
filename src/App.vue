<template lang="pug">
#app.container
	router-view
	router-view(name="containerBlock")
	router-view(name="footer")
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="stylus">
#app
	text-align center
	width 100%
	height 100%
	//-min-height calc(100vh - 140px)
	position relative
	padding-top 102px
</style>
