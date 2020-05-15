<template lang="pug">
	Fragment
		.d-sm-flex.align-items-center.justify-content-between.mb-4
			h1.h3.mb-0.text-gray-800 Dashboard
			a.d-none.d-sm-inline-block.btn.btn-sm.btn-primary.shadow-sm(href='#')
				i.fas.fa-download.fa-sm.text-white-50
				|  Generate Report
		.row
			ul
				li
					router-link(to="/empleadores") Empleadores
				li
					router-link(to="/empleados") Empleados
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
	name: 'IndexHome',
	components: { Fragment },
	data() {
		return {
			msg: 'Empleos',
		};
	},
};
</script>
<style lang="stylus">
</style>
