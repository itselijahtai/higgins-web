'use strict';

var express = require('express');
var controller = require('./room.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.get('/:userId/rooms', controller.getRooms);

router.get('/:id/populate-roommates', controller.populateRoommates);
router.get('/:id/populate-reminders', controller.populateReminders);

router.put('/:id/add-roommate/:roommateId', controller.addRoommate);
router.put('/:id/add-reminder/:reminderId', controller.addReminder);

// TODO: Need equivalent calls for removing roommates and reminders

module.exports = router;
