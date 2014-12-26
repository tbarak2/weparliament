'use strict';

app.factory('LawsFeed', function (FIREBASE_URL, $firebase) {
  var ref = new Firebase(FIREBASE_URL);
  //var laws = $firebase(ref.child('Law').orderByChild('createdate').limitToFirst(10)).$asArray();
  var laws = $firebase(ref.child('Law')).$asArray();

  var LawsFeed = {
    all: laws
  };

  return LawsFeed;
});
