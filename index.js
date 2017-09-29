'use-strict';
var superagent = superagent;
// var faker = faker;
//
// var firstName = faker.name.firstName();
//
// var lastName = faker.name.lastName();


let name = Math.random();
let username = Math.random();
$(document).ready(function($){
  let token = '';
  let allapi = '';
  $('#signUp' ).click(function() {

    superagent.post('https://api-supply.herokuapp.com/api/signup')
      .send({
        name: `${name++}`,
        username: `${username++}`,
        password: 'ILoveCodez',
        email: 'testtest.com',
        subscribedToEmail: true,
        isAdmin: true,
      })
      .then(res => {
        token = res;
        console.log(token.text);
        superagent.get('https://api-supply.herokuapp.com/api/newapi/getall')
          .set('Authorization', `Bearer ${token.text}`)
          .then(res => {
            allapi = res;
            console.log(allapi.body);
            allapi.body.map((api) => {
              $('#response').append(`<li>${JSON.stringify(api)}</li>`);
            });
          })
          .catch(console.error);
      });
  });
});
