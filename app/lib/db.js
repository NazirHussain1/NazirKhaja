
import mongoose from "mongoose"

export function connectKaro(){

   // mongodb+srv://Nazirhussain:<password>@cluster0.lkomkrd.mongodb.net/


    mongoose.connect('mongodb+srv://Nazirhussain:khan9697@cluster0.lkomkrd.mongodb.net/cat').then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}