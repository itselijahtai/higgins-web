/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Room from '../api/room/room.model';
import User from '../api/user/user.model';
import Roommate from '../api/roommate/roommate.model';
import Reminder from '../api/reminder/reminder.model';
import winston from 'winston';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
      .then(() => {
        winston.info('finished populating users');
      })
      .then(() => {
        User.findOne({ name: 'Test User' }, function(err, user) {
          Room.update({ name: 'Test Room' }, { $set: { _creator: user._id }})
            .then(() => {
              winston.info('finished adding Test User to Test Room\'s _creator field');
            })
            .then(() => {
              Room.findOne({ name: 'Test Room' }, function(err, room) {
                User.update({ name: 'Test User' }, { $push: { rooms: room._id }})
                  .then(() => {
                    winston.info('finished adding Test Room to Test User\'s rooms array');
                  })
              })
            })
        })
      });
  });

Room.find({}).remove()
  .then(() => {
    Room.create({
      name: 'Test Room',
      info: '123 Alphabet Street',
      active: true,
      roommates: []
    })
    .then(() => {
      winston.info('finished populating rooms');
    });
  });

Roommate.find({}).remove()
  .then(() => {
    Roommate.create({
      name: 'Test roommateModal 1',
      phone: 1234567890
    },{
      name: 'Test2',
      phone: 234567819
    })
      .then(() => {
        winston.info('finished populating roommates');
      });
  });


Reminder.find({}).remove()
  .then(() => {
    Reminder.create({
       name: 'Test reminder'
    })
  .then(() => {
      winston.info('finished populating reminders');
    });
  });


Reminder.find({}).remove()
  .then(() => {
    Reminder.create({
       name: 'Test reminder'
    })
  .then(() => {
      winston.info('finished populating reminders');
    });
  });
