import Ember from 'ember';

export default Ember.Component.extend({
  validThumbnail: Ember.computed('post.data.thumbnail', function() {
    if(this.get('post.data.thumbnail') === ''
      || this.get('post.data.thumbnail') === 'self') {
        return false;
    }
    else {
      return true;
    }
  }),
  actions: {
    changeScore(newScore) {
      this.set('post.data.score', newScore);
    }
  }
});
