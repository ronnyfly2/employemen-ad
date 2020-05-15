<template lang="pug">
#wrapper
	router-view
	#content-wrapper.d-flex.flex-column
		#content
			router-view(name="navBarBlock")
			.container-fluid
				router-view(name="containerBlock")
		router-view(name="footer")
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="stylus">
</style>
