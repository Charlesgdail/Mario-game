const { Client, Account, Databases, ID, Query} = Appwrite
const projectId = '6505c8abc9fe6d6d6af1'
const databaseId = ''
const collectionId = ''

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId)

const account = new Account(client)

function register(event){
    account.create(
        ID.unique(),
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value
    )
}
