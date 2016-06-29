'use strict';

angular.module('higginsApp.roomService', [])
  .factory('roomService', function ($http) {

    var getRoom = function( opts ) {
      var roomId = opts.roomId;
      return $http.get('/api/rooms/' + roomId);
    };

    var getRoomsByUserId = function( opts ) {
      var userId = opts.userId;
      return $http.get('/api/rooms/' + userId + '/rooms');
    };

    var createRoom = function( form ) {
      return $http.post('/api/rooms', form);
    };

    var updateRoom = function( opts, form ) {
      var roomId = opts.roomId;
      return $http.put('/api/rooms/' + roomId, form);
    };

    var deleteRoom = function( opts ) {
      var roomId = opts.roomId;
      return $http.delete('/api/rooms/' + roomId );
    };

    var addRoommate = function( opts ) {
      var roomId = opts.roomId;
      var roommateId = opts.roommateId;
      return $http.put('/api/rooms/' + roomId + '/add-roommate/' + roommateId);
    };

    var addReminder = function( opts ) {
      var roomId = opts.roomId;
      var reminderId = opts.reminderId;
      return $http.put('/api/rooms/' + roomId + '/add-reminder/' + reminderId);
    };

    var populateRoommates = function( opts ) {
      var roomId = opts.roomId;
      return $http.get('/api/rooms/' + roomId + '/populate-roommates');
    };

    var populateReminders = function( opts ) {
      var roomId = opts.roomId;
      return $http.get('/api/rooms/' + roomId + '/populate-reminders');
    };

    // Public API here
    return {
      createRoom: createRoom,
      getRoom: getRoom,
      updateRoom: updateRoom,
      deleteRoom: deleteRoom,
      getRoomsByUserId: getRoomsByUserId,
      addReminder: addReminder,
      addRoommate: addRoommate,
      populateRoommates: populateRoommates,
      populateReminders: populateReminders
    };
  });
