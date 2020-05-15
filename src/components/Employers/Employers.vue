<template lang="pug">
.box_center.list_normal
	el-row.list_source
		el-col(:span="24")
			h1 Lista de Empleadores
		el-col(:span="24")
			el-form(:model="search" ref="search" label-position='left')
				el-row
					el-col.col_search(:span="6")
						el-input(placeholder="Buscar" prefix-icon="el-icon-search" v-model="search.search" @input="searchFunction")
					el-col.col_create(:span="18")
						router-link(:to="{name: 'EmployersForm'}")
							| Crear nuevo
							i(class="el-icon-plus")
		el-col(:span="24")
			el-table(:data="search.search===''?tableData:TableSearch" border style="width: 100%" v-loading="loading")
				el-table-column(prop="name" label="Nombre")
				el-table-column(prop="lastName" label="Apellido")
				el-table-column(prop="email" label="Email")
				el-table-column(prop="dni" label="DNI")
				el-table-column(prop="birthdate" label="Fecha nacimiento")
				el-table-column(prop="age" label="Edad")
				el-table-column(prop="celphone" label="Celular / Telefono")
				el-table-column(label="Genero")
					template(slot-scope="scope2")
						span {{ scope2.row.gender === '1' ? 'Mujer':'Hombre' }}
				el-table-column(prop="registrationDate" label="Fecha de registro")
				el-table-column(prop="message" label="Mensaje")
				el-table-column(label="Operaciones")
					template(slot-scope="scope")
						el-button(size="mini" @click="handleEdit(scope.$index,scope.row.itemId)") Editar
						el-button(size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)") Eliminar
		el-col(:span="6")
</template>
<script>
import { Employers } from '../../store/employers'

export default {
    name: 'Employers',
	mounted () {
		this.getListUsers();
		document.addEventListener("keydown", (e) => {
			if(e.keyCode == 13){
				e.preventDefault()
			}
		});
	},
	data () {
		return {
			loading: false,
			tableData: null,
			TableSearch:null,
			search:{
				search:''
			}
		}
	},
	methods: {
		getListUsers(){
			let self = this;
			self.loading = true;
			Employers.on('value', snapshot => self.getFireUsers(snapshot.val(),self.notifyFunc()));
		},
		getFireUsers(userData){
			let self = this;
			let arrayNew = [];
			//self.tableData = Object.values(userData);
			for (var i in userData) {
				// eslint-disable-next-line no-prototype-builtins
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
		handleEdit(idx, elem){
			this.$router.push({name: 'EmployersForm', params: {'id': elem}});
		},
		handleDelete(idx, elem){
			let self = this;
			self.$confirm('estas seguro de eliminar?')
				.then(()=> {
					Employers.child(elem.itemId).remove();
				})
				.catch(_ => {
					console.log('error',_)
				});
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
.col_create.el-col.el-col-18
	text-align right
	a
		color #409eff
		line-height 2.5
		&:hover
			text-decoration underline
</style>
