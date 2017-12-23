import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'motivations.insert': function() {
    const user = Meteor.users.findOne(this.userId);
    const email = user.emails[0].address;
    
    if (email == 'djhoppy23@gmail.com') {

      return Motivations.insert({
        createdAt: new Date(),
        content: '',
        author: ''
      });

    }
    
    else { return; }
  },

  'motivations.remove': function(motivation) {
    return Motivations.remove(motivation);
  },

  'motivations.update': function(motivation, content, author) {
    return Motivations.update(motivation._id, { $set: { content, author } });
  }
});

export const Motivations = new Mongo.Collection('motivations');