var mongoose = require('mongoose');

var User = mongoose.model(('User'),{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var user = new User({
//   email: 'ving@gmail.com'
// });
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

module.exports = {User};
