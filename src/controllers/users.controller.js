/**
* Users Controller
* @constructor
*/
export default class UsersController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /**
  * Return all the users
  */
  async getUsers() {
    const users = [{
      name: 'Aakash Verma',
    }, {
      name: 'Ankit Verma',
    }, {
      name: 'Zeeshand Albedin',
    }, {
      name: 'Nitesh Gautam',
    }, {
      name: 'Kumar Navneet',
    }];

    this.res.send({
      success: true,
      statusCode: 200,
      statusMessage: 'OK',
      total: users.length,
      data: users,
    });
  }
}
