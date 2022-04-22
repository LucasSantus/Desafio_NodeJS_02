/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

let users = [
	{
		name: 'Isabelly Stefany Isabelle Vieira',
		age: 20,
		weight: 66,
		height: 1.59,
		is_dev: true,
	},
	{
		name: 'Márcio Diogo da Rosa',
		age: 60,
		weight: 57,
		height: 1.89,
		is_dev: false,
	},
	{
		name: 'Otávio Luiz Lucas Silva Real',
		age: 49,
		weight: 67,
		height: 1.98,
		is_dev: false,
	},
	{
		name: 'Priscila Mirella Caldeira',
		age: 61,
		weight: 66,
		height: 1.56,
		is_dev: true,
	},
	{
		name: 'João Gabriel Silva',
		age: 33,
		weight: 88.50,
		height: 1.65,
		is_dev: true,
	},

]

// R01
function R01(){
	let age = 0.0
	for(let user of users){
		age += user.age
	}

	console.log(`Idade total de todos os UBUNTUS: ${age}`)
}


// R02
function R02(){
	let group_users = users.map(user => user.name)

	console.log(`Nome agrupado de todos os UBUNTUS: ${group_users}`)
}


// R03
function R03(){
	let imc = 0.0
	for(let user of users){
		imc += user.weight/(user.height * user.height)
	}

	console.log(`IMC Total dos UBUNTUS: ${imc}`)
	console.log(`Média IMC dos UBUNTUS: ${imc/users.length}`)
}


// R04
function R04(){
	let users_dev = users.filter(user => {
		return user.is_dev == true
	})

	console.log(`Quantidade de UBUNTUS devs: ${users_dev.length}`)
}


// R05
function R05(){
	let user_names = users.filter(user => {
		let name_user = user.name.split(" ")
		for(let name of name_user){
			if(name.toLowerCase() == 'silva'){
				return user
			}
		}
	}).map(user => user.name)

	console.log(`UBUNTUS com sobrenome Silva: ${user_names}`)
}


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	console.log("\nListando todos os UBUNTUS")
	for(let user of users){
		console.log(`Nome: ${user.name}, Idade: ${user.age}, Peso: ${user.weight}, Altura: ${user.height}, É Dev?: ${user.is_dev}`)
	}

	// R01
	console.log("\nResposta 01")
	R01()

	// R02
	console.log("\nResposta 02")
	R02()

	// R03
	console.log("\nResposta 03")
	R03()

	// R04
	console.log("\nResposta 04")
	R04()

	// R05
	console.log("\nResposta 05")
	R05()
});
