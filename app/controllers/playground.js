import Ember from 'ember';

export default Ember.Controller.extend({
  email: {
    read: false,
    title: 'Sign up for Spring classes!'
  },
  actions: {
    markAsRead() {
      this.set('email.read', true);
    }
  }
});
