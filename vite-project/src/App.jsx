import "./App.css";
import { useEffect } from "react";

function App() {
  const faceio = new faceIO("fioa9d9e");
  function signIn()
  {
     faceio.enroll({
          "locale": "auto", 
          "payload": {
          "pin": 123456, 
          "email": "john.doe@example.com"
          }
      }).then(userInfo => {
          alert(
              `User Successfully Enrolled! Details:
              Unique Facial ID: ${userInfo.facialId}
              Enrollment Date: ${userInfo.timestamp}
              Gender: ${userInfo.details.gender}
              Age Approximation: ${userInfo.details.age}`
          );
          console.log(userInfo);
      }).catch(errCode => {
          console.log(errCode);
      })
  }
    <button onClick={signIn}>Sign-In</button>

    const handleLogin = async () => {
      try {
          let result = await faceio.authenticate({
          locale: "auto",
          });
          console.log(`Unique Facial ID: ${result.facialId}
              Payload: ${result.payload}
              `);
      } catch (error) {
          console.log(error);
      }
  };
  
  <button onClick = {handleLogin}>Log-In</button>

  return (
    <section>
      <h1>Face Authentication by FaceIO</h1>
      <button onClick={signIn}>Sign-in</button>
      <button onClick={handleLogin}>Log-in</button>
    </section>
  );

}

export default App;