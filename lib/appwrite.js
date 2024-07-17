import { Client,Account, ID } from 'react-native-appwrite';
export const config={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.phn.aora',
    projectId:'66965b1600304bbd46cf',
    databaseId:'66965c60003b0bcc0307',
    userCollectionId:'66972180001316537a83',
    videoCollectionId:'669721ac003cde521a50',
    storageId:'669723310022df111785',
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser =()=>{
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

