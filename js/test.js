	var vm = new Vue({
		el:'#app',
		data:{

			newPerson:{
				name:'',
				age:0,
				sex:'男'
			},

			people:[{
				name:'Jack',
				age:30,
				sex:'男'

			},{
				name:'Bill',
				age:26,
				sex:'男'
			},{
				name:'Tracy',
				age:22,
				sex:'女'

			},{
				name:'Chris',
				age:36,
				sex:'女'
			}]
		},
		methods:{
			createPerson:function(){
				this.people.push(this.newPerson);
				this.newPerson={name:'',age:0,sex:'男'}
			},
			deletePerson:function(index){
				this.people.splice(index,1);
			}
		}

	})
