'use-strict';
var superagent = superagent;

$(document).ready(function($){

  $('#signUp' ).click(function() {

    superagent.post('https://api-supply.herokuapp.com/api/signup')
      .send({
        name: 'testing',
        username: 'thesearegonnaneedtobedeleted',
        password: 'ILoveCodez',
        email: 'testtest.com',
        subscribedToEmail: true,
        isAdmin: true,
      })
      .then(res => {
        this.res = res;
        superagent.get('https://api-supply.herokuapp.com/api/newapi/getall')
          .set('Authorization', `Bearer ${this.res}`)
          .then(body => {
            this.body = body;
            console.log(this.body);
          })
          .catch(console.error);
      });
  });
});
