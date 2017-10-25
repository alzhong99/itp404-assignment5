import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchSubreddit(e) {
      e.preventDefault();
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddits', subreddit);
    }
  }
});
