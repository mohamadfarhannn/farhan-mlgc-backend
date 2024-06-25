const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./starry-will-424205-e2-3eadb10e6060.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'starry-will-424205-e2',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;