import Vue from 'vue';
import Router from 'vue-router';
import IndexHome from '@/components/IndexHome';

import headerAdmin from '@/components/layouts/headerAdmin'
import Footer from '@/components/layouts/Footer'
Vue.use(Router);
//const About = () => import("./views/About.vue");
let loadView=(path,view)=>{
	//return () => import(/* webpackChunkName: "view-[request]" */`@/components/Employers/${view}.vue`)
	return () => import(`@/components/${path}/${view}.vue`)
}

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'IndexHome',
			components:{
				default: headerAdmin,
				containerBlock: IndexHome,
				footer: Footer
			}
		},
		{
			path: '/empleadores',
			name: 'Employers',
			components: {
				default: headerAdmin,
				containerBlock: loadView('Employers','Employers'),
				footer: Footer
			}
		},
		{
			path: '/empleador/:id?',
			name: 'EmployersForm',
			components: {
				default: headerAdmin,
				containerBlock: loadView('Employers','EmployersForm'),
				footer: Footer
			}
		}
	],
});
