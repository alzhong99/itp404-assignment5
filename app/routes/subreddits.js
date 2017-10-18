import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return $.getJSON(`https://www.reddit.com/r/${params.subreddit}.json`);
  }
});
