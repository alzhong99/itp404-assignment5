import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchSubreddit() {
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
