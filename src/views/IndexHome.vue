<template lang="pug">
	.hello
		h1 {{ msg }}
		ul
			li
				router-link(to="/empleadores") Empleadores
			li
				router-link(to="/empleados") Empleados
</template>

<script>
export default {
	name: 'IndexHome',
	data() {
		return {
			msg: 'Empleos',
		};
	},
};
</script>
<style lang="stylus">
h1, h2
	font-weight normal
ul
	list-style-type: none
	padding 0
li
	display inline-block
	margin 0 10px
a
	color #42b983
</style>
