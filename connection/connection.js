
const knex=require("knex") ({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        database:"Ng_details",
        password:"Akash@123"
    }
})

knex.schema.createTable("ng_students" , (table) => {
    table.increments("id").primary();
    table.string("fname");
    table.string("lname");
    table.string("Joining_date");
    table.string("email").unique();
}).then(() => {
    console.log("Table create successful...")
}).catch( () => {
    // console.log("error found..")
})

module.exports = knex