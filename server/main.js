import { Meteor } from 'meteor/meteor';
import express from 'express';
import { Motivations } from '../imports/collections/motivations';
import  { WebApp } from 'meteor/webapp';

const app = express();

Meteor.startup(() => {
  Meteor.publish('motivations', function() {
    return Motivations.find({});
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/motivations', (req, res) => {
  const data = Motivations.find().fetch();
  res.status(200).send({ data });
});

WebApp.connectHandlers.use(app);