import { Client, Account, ID, Avatars, Databases, Query } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.phn.aora",
  projectId: "66965b1600304bbd46cf",
  databaseId: "66965c60003b0bcc0307",
  userCollectionId: "66972180001316537a83",
  videoCollectionId: "669721ac003cde521a50",
  storageId: "669723310022df111785",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email,password)
    const newUser = await  databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar:avatarUrl,


        }
    )

    return newUser

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const  signIn= async (email,password)=>{
    try{
        const session = await account.createEmailPasswordSession(email,password)


    }catch(error){
        throw new Error(error)
    }
}

export const getCurrentUser = async()=>{
    try{
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId',currentAccount.$id)]
        )
        if(!currentUser) throw Error
        return currentUser.documents[0]
    }catch(error){
        console.log(error)
    }
}

export const getAllPost = async()=>{
  try{
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,

    )
    return posts.documents;
  }catch(error){
    console.log(error)
    throw new Error(error)
  }
}