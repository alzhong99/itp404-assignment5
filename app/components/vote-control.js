import Ember from 'ember';

export default Ember.Component.extend({
  // Not uppable if score has already been increased by 1
  uppable: Ember.computed('changed', function() {
    return this.get('changed') < 1;
  }),
  // Not downable if score has already been decreased by 1
  downable: Ember.computed('changed', function() {
    return this.get('changed') > -1;
  }),
  // How much score has changed from original score
  // "changed: 0" means current score is same as original score, and both arrows are enabled
  changed: 0,

  actions: {
    // When up arrow is clicked
    up() {
      this.set('changed', this.get('changed') + 1); // Increase changed by 1
      this.get('onvote')(this.get('score') + 1); // Set to new score
    },
    // When down arrow is clicked
    down() {
      this.set('changed', this.get('changed') - 1); // Decrease changed by 1
      this.get('onvote')(this.get('score') - 1); // Set to new score
    }
  }
});
