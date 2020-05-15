import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexHome from '@/views/IndexHome'

import headerAdmin from '@/components/layouts/headerAdmin'
import navBar from '@/components/layouts/navBar'
import Footer from '@/components/layouts/Footer'


Vue.use(VueRouter)

let loadView=(path,view)=>{
	//return () => import(/* webpackChunkName: "view-[request]" */`@/components/Employers/${view}.vue`)
	return () => import(`@/components/${path}/${view}.vue`)
}

const routes = [
		{
			path: '/',
			name: 'IndexHome',
			components:{
				default: headerAdmin,
				navBarBlock: navBar,
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
		},
		{
			path: '/empleados',
			name: 'Employees',
			components: {
				default: headerAdmin,
				containerBlock: loadView('Employees','Employees'),
				footer: Footer
			}
		},
		{
			path: '/empleado/:id?',
			name: 'EmployeesForm',
			components: {
				default: headerAdmin,
				containerBlock: loadView('Employees','EmployeesForm'),
				footer: Footer
			}
		}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
