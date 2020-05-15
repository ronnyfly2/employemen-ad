<template lang="pug">
	sidebar

</template>
<script>
import sidebar from './sideBar'
export default {
	components:{sidebar},
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
</style>
