import Ember from 'ember';

export default Ember.Controller.extend({
  // Array of sorted posts computed from unsorted model property
  sortedPosts: Ember.computed('model', function() {
    let posts = this.get('model');
    let sortedPosts = posts.sort(function(postA, postB) {
      let scoreA = postA.data.score;
      let scoreB = postB.data.score;
      if(scoreA < scoreB) {
        return 1;
      }
      if(scoreA > scoreB) {
        return -1;
      }
      return 0;
    })
    return sortedPosts;
  })
});
