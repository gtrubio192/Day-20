var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function(options){

		console.log("initializing app view");

		_.bindAll(
			this,
			'onAddToDoClick',	
			'onToDoEnter',
			'onToDoAdded',
			'render'
		);

		this.$addButton = $('#input-button');
		this.$item = $('#input-box');
		this.$toDoList = $('todo-list');
		// this.$item = $('#input-box').val();

		this.list = new collections();

		this.$addButton.on('click', this.onAddToDoClick);
		// this.$item.on('keyup', this.onToDoEnter);
		// event listener for collections added to
		this.list.on('add', this.onToDoAdded);
	},

	onAddToDoClick: function(){
		console.log("click");
		this.newModel = new models();
		this.newModel.set({
			item: this.$item.val()
		});
		console.log(this.newModel);
		this.list.add(this.newModel);
		console.log(this.list);

	},

	onToDoEnter: function(e) {
	// 	if(e.which == 13) {
	// 		// this.submit(this.$inputBox.val());
	// 	}
	},

	render: function(){

	},

	onToDoAdded: function(){
		console.log("collection increased");
		// var itemview = ListeItemView({model: toDoItem});
		// create a ListeItemView.js file
		// this.$displayList.append(itemView.$el);
	}


});