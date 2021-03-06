/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];


//Now create and push into your users array 3 seperate instances of User using
//the data from above in that exact order

  //code here
var tyler = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");
users.push(tyler);
var cahlan = new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags");
users.push(cahlan);
var lenny = new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup");
users.push(lenny);

var listUserInfo = function(userObject) {
  for (prop in userObject) {
    console.log(prop + ": " + userObject[prop]);
  }
}

console.log('\nTyler\'s information is ');
//Console.log all of Tylers information

  //code here
  listUserInfo(users[0]);

console.log('\nLenny\'s information is ');
//Now console.log all of Lennys information

  //code here
  listUserInfo(users[2]);


//Now create another instance of User using your own information and then add
//that to your users array.

  //code here
  var jason = new User("Jason", "jasonmarlow@gmail.com", "JSisNeatoSpeedo");
  users.push(jason);

console.log('\nAll my users names are: ');
//Now loop through your users Array and console.log every users name.

  //code here
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
