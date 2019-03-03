import { db } from '../config/db';

export const addUser =  (prop) => {
    db.database().ref('/user').push({
        user:prop,
    });
};

export var bookref = db.database().ref('/books');

export const signup = (email,pass,nav) => {


    try {
          console.log(pass);
         db.auth()
            .createUserWithEmailAndPassword(email,pass).then((authData) => {
                    console.log("User created successfully with payload-", authData);
                    
                    //Write code to use authData to add to Users
                }).catch((_error) => {
                    console.log("Login Failed!", _error);
                    alert("Unexpected Error");
                });
            nav.navigate('LoginScreen');
        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error);
        
    }
};

export const authication = (nav) => {
    try{
      db.auth().catch(error => console.log(error));

      nav.navigate("HomeScreen");
      
    }catch(error){
        console.log(error.toString())

    }
    
    
};

export const logout = (nav) => {
  

} 


export const login = (email,pass,nav) => {
    try{
        console.log(email);

        db
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((authData) => {
      
      nav.navigate('HomeScreen');
      console.log("User created successfully with payload-", authData);
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Invalid Username or Password");
      // ...
    });
    }catch(error){
       console.log(error)
    }
};

export const addBook = (title,aurthor,edition,file,type) => {

    console.log(file)
    let uri= uploadImageAsync(file,title,aurthor,edition,type)
    console.log(uri)

   /* db.storage().ref('books/'+file.name).put(file.uri).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });*/    
};

async function uploadImageAsync(uri,title,aurthor,edition,type) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  console.log(uri)
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  var metadata = {
    contentType: type,
  };

  alert(metadata.contentType);
  
  const ref = db
    .storage()
    .ref()
    .child('books/'+title);
  const snapshot = await ref.put(blob,metadata);

    

    var link = snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);

      db.database().ref('/books').push({
      title,
      aurthor,
      edition,
      uri: downloadURL,
      type
      }).then((data)=>{
        //success callback
        console.log('data ' , data)
      }).catch((error)=>{
        //error callback
        console.log('error ' , error)
      });

      return downloadURL;
    });

  // We're done with the blob, close and release it
  blob.close();

  console.log(link);

  return link;
}
