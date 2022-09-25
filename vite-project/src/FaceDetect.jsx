import React, { useEffect } from "react";

function FaceDetect() {
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioa9d9e");
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });
      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
          window.location.href = "http://localhost:3000"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Welcome to Chubbit</h1>
      <h2>Two Worlds, One You</h2>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section>
  );
}

export default FaceDetect;