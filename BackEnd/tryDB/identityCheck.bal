import ballerina/http;
import ballerinax/mongodb;
// import ballerina/io;



type User record {
    json _id;
    string firstName;
    string lastName;
    int age;
    string NIC;
};



// configurable string username =?;
// configurable string password =?;



//SETUP mongoDB Connection
mongodb:ConnectionConfig mongoConfig2 = {
    connection: {
        url: string `mongodb+srv://${username}:${password}@cluster0.sg7wemt.mongodb.net/?retryWrites=true&w=majority`
        
    },
    databaseName: "Identity"
};
//Create a client
mongodb:Client mongoClient2 = check new (mongoConfig2);




//service for identity check
service /identityCheck on new http:Listener(9090) {


    //Check whether the NIC exists or not
    

    resource function get NIC_check/[string NIC]() returns boolean|error? {
        
        boolean valid = false;
        map<json> queryString = {"NIC": NIC };
        stream<User, error?> resultData = check mongoClient->find(collectionName = "People",filter = (queryString));
    
        check resultData.forEach(function(User datas){
                
                // io:println(datas.NIC);
                // io:println(resultData.count());
                valid = true;
                
        });
        return valid;
    }




    // //Retieve Data from database
    // resource function get users() returns User[]|error? {

    //     stream<User, error?> resultData = check mongoClient->find(collectionName = "People");
    //     User[] variable = [];
    //     check resultData.forEach(function(User datas){
    //         io:println(datas.firstName.toString());
    //         io:println(datas.lastName.toString());
    //         variable.push(datas);
    //         // log:println(datas.age.toString());
    //     });
        
    //     return variable;
        
    
    // }


}




