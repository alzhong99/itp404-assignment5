import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  findAllForSubreddit(subreddit) {
    return $.getJSON(`https://www.reddit.com/r/${subreddit}.json`).then(function(response) {
      return response.data.children;
    });
  }
});
