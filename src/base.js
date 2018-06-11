import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiiAyu_4PcfsD92Ik6zFYF0ixfxY8gv0w",
    authDomain: "todoapp-de06d.firebaseapp.com",
    databaseURL: "https://todoapp-de06d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;