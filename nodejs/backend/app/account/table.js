const pool 		= require('../../databasePool')	;
const { hash } 	= require('./helper')			;

class AccountTable{
	static storeAccount({username, password}){
		const usernameHash = hash(username);
		const passwordHash = hash(password);
		return new Promise((resolve, reject) =>{
			if(username.length > 64){
				const error = new Error('Username is too long');
				return reject(error);
			}
			if(password.length > 64){
				const error = new Error('Password is too long');
				return reject(error);
			}
			pool.query(
				'INSERT INTO account("usernameHash", "passwordHash") VALUES($1, $2)',
				[usernameHash, passwordHash],
				(error, response) => {
					if(error) return reject (error);

					resolve();
				}
			);
		});
	}

	static getAccount({ username }){
		const usernameHash = hash(username);
		return new Promise((resolve, reject) => {
			pool.query(
				'SELECT id, "passwordHash", "sessionId" FROM account WHERE "usernameHash" = $1',
				[usernameHash],
				(error, response) => {
					if (error) return reject(error);

					resolve({ account: response.rows[0]});
				}
			)
		});
	}

	static updateSessionId({sessionId, usernameHash}){
		return new Promise ((resolve, reject) => {
			pool.query(
				'UPDATE account SET "sessionId" = $1 WHERE "usernameHash" = $2',
				[sessionId, usernameHash],
				(error, response) => {
					if(error) return reject(error);

					resolve();
				}
			)
		});
	}
}

module.exports = AccountTable;