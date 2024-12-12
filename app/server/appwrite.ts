import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('http://localhost/v1') // Your API Endpoint
  .setProject('675571c5872df07561f7'); // Your Project ID

export const account = new Account(client);
export const databases = new Databases(client);
