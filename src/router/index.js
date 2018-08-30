import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Employers from '@/components/Employers/Employers'
import EmployersForm from '@/components/Employers/EmployersForm'

//import Tips from '@/components/Tips/Tips'
//import FormTips from '@/components/Tips/FormTips'

import headerAdmin from '@/components/layouts/headerAdmin'
//import ListMenu from '@/components/layouts/ListMenu'
import Footer from '@/components/layouts/Footer'
Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
		},
		{
			path: '/empleadores',
			name: 'Employers',
			components: {
				default: headerAdmin,
				containerBlock: Employers,
				footer: Footer
			}
		},
		{
			path: '/empleador/:id?',
			name: 'EmployersForm',
			components: {
				default: headerAdmin,
				containerBlock: EmployersForm,
				footer: Footer
			}
		}
  ],
});
