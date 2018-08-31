<template lang="pug">
.box_center.list_normal
	el-row.list_source
		el-col(:span="24")
			h1 Formulario
	el-row.ctn_form
		el-col(:span="24")
			el-form(:model="ruleForm" :rules="rules" ref="ruleForm" label-position='left' v-loading="loading")
				el-row
					el-col(:span="12")
						el-form-item(prop="name" label="Nombre")
							el-input(v-model="ruleForm.name" placeholder="Nombre")
					el-col(:span="12")
						el-form-item(prop="lastName" label="Apellidos")
							el-input(v-model="ruleForm.lastName" placeholder="Apellidos")
				el-row
					el-col(:span="12")
						el-form-item(prop="email" label="Email")
							el-input(v-model="ruleForm.email" placeholder="Correo Electronico")
					el-col(:span="12")
						el-form-item(prop="celphone" label="Celular")
							el-input(v-model="ruleForm.celphone" placeholder="Telefono")
				el-row
					el-col(:span="12")
						el-form-item(prop="dni" label="DNI")
							el-input(v-model="ruleForm.dni" placeholder="DNI")
					el-col(:span="12")
						el-form-item(prop="birthdate" label="F/nacimiento")
							el-date-picker(v-model="ruleForm.birthdate" type="date" placeholder="Fecha de nacimiento" default-value="1980-01-01")
				el-row
					el-col(:span="8")
						el-form-item(prop="gender" label="Genero")
							el-select(v-model="ruleForm.gender" placeholder="Genero")
								el-option(v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value")
					el-col(:span="8")
						el-form-item(prop="age" label="Edad")
							el-input(v-model="ruleForm.age" placeholder="Edad")
					el-col(:span="8")
						el-form-item(label="Activo?")
							el-switch(v-model="ruleForm.state")
				el-row
					el-col(:span="24")
						el-form-item(prop="message" label="Mensaje")
							el-input(type="textarea" v-model="ruleForm.message" placeholder="Mensaje")
				el-col(:span="24")
					el-form-item
						el-button(type="primary" @click="saveUser") Guardar
</template>
<script>
import { Employers } from '../../store/employers'

export default {
	name: 'EmployersForm',
	mounted () {
		if(this.idEmployer != 0){
			this.getEmployer()
		}
		document.addEventListener("keydown", (e) => {
			if(e.keyCode == 13){
				e.preventDefault()
			}
		});
	},
	data () {
		let idEmployer= (this.$route.params && this.$route.params.id)? this.$route.params.id : 0;
		return {
			loading: false,
			idEmployer:idEmployer,
			ruleForm: {
				name: '',
				lastName:'',
				dni:'',
				birthdate:'',
				age:'',
				gender:'',
				email:'',
				celphone:'',
				registrationDate:'',
				state:false,
				message:''
			},
			genderOptions:[
				{
					value: '1',
					label: 'Mujer'
				},
				{
					value:'2',
					label: 'Hombre'
				}
			],
			rules: {
				name: [
					{ required: true, message: 'Este campo es obligatorio', trigger: 'blur' }
				],
				email: [
					{ required: true, message: 'Este campo es obligatorio', trigger: 'blur' },
					{ type: 'email', message: 'Debe de escribir un email válido', trigger: 'blur,change' }
				]
				//-celphone:[
				//-	{ type: 'number', message: 'debe ser un número válido', trigger: 'blur'},
				//-	{ min: 6, max: 11, message: 'Al menos debe tener min 6 max 11', trigger: 'blur' }
				//-]
			},
		}
	},
	methods: {
		getEmployer(){
			let self = this;
			Employers.child(this.idEmployer).once('value')
			.then( snapshot => {
				this.ruleForm = snapshot.val();
				this.loading= false;
			});
		},
		getFireUsers(userData){
			let self = this;
			let arrayNew = [];
			//self.tableData = Object.values(userData);
			for (var i in userData) {
				if (userData.hasOwnProperty(i)) {
					arrayNew.push({
						name:userData[i].name,
						lastName:userData[i].lastName,
						email:userData[i].email,
						dni:userData[i].dni,
						birthdate:userData[i].birthdate,
						age:userData[i].age,
						gender:userData[i].gender,
						celphone:userData[i].celphone,
						registrationDate:userData[i].registrationDate,
						state:userData[i].state,
						message:userData[i].message,
						idUserDat:userData[i].idUserDat,
						itemId:i
						})
				}
			}
			self.loading = false;
			self.tableData = arrayNew;
		},
		matchesResults(e){
			return this.tableData.filter(usersName=>{
				const regexText = new RegExp(e, 'gi')
				return usersName.name.match(regexText) || usersName.email.match(regexText) || usersName.dni.match(regexText)
			})
		},
		searchFunction(e){
			const validateResult = this.matchesResults(e);
			this.TableSearch = validateResult;
		},
		saveUser(){
			let self = this;
			let now = new Date();
			let year = "" + now.getFullYear();
			let month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
			let day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
			let hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
			let minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }

			let dateBirth = new Date(self.ruleForm.birthdate);
			let yearBirth = "" + dateBirth.getFullYear();
			let monthBirth = "" + (dateBirth.getMonth() + 1); if (monthBirth.length == 1) { monthBirth = "0" + monthBirth; }
			let dayBirth = "" + dateBirth.getDate(); if (dayBirth.length == 1) { dayBirth = "0" + dayBirth; }
			self.ruleForm.birthdate = yearBirth + "-" + monthBirth + "-" + dayBirth;
			if(this.idEmployer != 0){
				self.ruleForm.updateRegister = year + "-" + month + "-" + day + " " + hour + ":" + minute;
				Employers.child(this.idEmployer).update(self.ruleForm);
				this.$router.push('/empleadores');
			}else{
				self.ruleForm.registrationDate = year + "-" + month + "-" + day + " " + hour + ":" + minute;
				Employers.push(self.ruleForm).then((res)=>{
					this.$refs.ruleForm.resetFields();
					this.$router.push('/empleadores');
				})
			}
		},
		notifyFunc(){
			let self = this;
			if (!("Notification" in window)) {
				alert("Este navegador nos soporta notificaciones");
			}
			else if (Notification.permission === "granted") {
				self.notifyCall();
			}
			else if (Notification.permission !== 'denied') {
				Notification.requestPermission(function (permission) {
					if (permission === "granted") {
						self.notifyCall();
					}
				});
			}
		},
		notifyCall(){
			var notification = new Notification('Tienes algo nuevo', {
				icon: 'https://delicores.com/imgs/pin_delicores.png',
				body: "Se eliminó el usuario!",
			});

			notification.onclick = function () {
				window.open("https://delicores.com/admin");
			};
			//-setTimeout(notification.close.bind(notification), 8000);
		}
	}
}
</script>
<style lang="stylus">
h1
	width 100%
.list_source
	margin-top 0
	margin-bottom 40px
	padding-top 30px
.el-date-editor.el-input
.el-date-editor.el-input__inner
	width 100%
.el-col.col_search
.el-form-item.search_items
	margin-bottom 0
</style>
