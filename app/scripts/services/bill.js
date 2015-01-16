app.factory('Bill', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var bills = $firebase(ref.child('bills')).$asArray();

  var Bill = {
    create: function (bill) {
      return bills.$add(bill);
    }
  };

  return Bill;
})
