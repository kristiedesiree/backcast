var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    var context = this;
    var whateverName = function() {
      this.model.select();
    }.bind(this);
    this.$el.on('click', whateverName);
  },
  render: function() {
    console.log(this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

//this.$('.video-list-entry-title').click(function() {
//   this.select()
// });
