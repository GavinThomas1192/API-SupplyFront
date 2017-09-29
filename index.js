'use-strict';
var superagent = superagent;

$(document).ready(function($){

  $('#signUp' ).click(function() {

    superagent.post('https://api-supply.herokuapp.com/api/signup')
      .send({
        name: 'FrontEndName',
        username: 'FrontEndUserName',
        password: 'ILoveCodez',
        email: 'testtest.com',
        subscribedToEmail: true,
        isAdmin: true,
      })
      .then(res => this.res = res)
      .catch(console.error);
  });
  console.log(this.res);

});
