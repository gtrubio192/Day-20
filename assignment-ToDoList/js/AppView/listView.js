var ListItemView = Backbone.View.extend({

	initialize: function(options) {

		// _.bindAll(
		// 	this,
		// 	'onCheckBoxClicked',
		// 	'onModelChanged'
		// 	);
		console.log("ListItemView. Template: ");
		var innterHTML = $('#item-view').html();
		var listItemTemplate  = _.template(innterHTML);
		console.log(listItemTemplate);
		this.el = listItemTemplate(this.model.attributes);
		this.$el = $(this.el);

		this.$check-box = $('.check-box');

		$check-box.on('click', onCheckBoxClicked);

	},

	onCheckBoxClicked: function(){
		var currentCheckBox = this.$el.find(('.check-box'));
		console.log(this.$el.find(('.check-box')));
	},

	onModelChanged: function(){

	}
});