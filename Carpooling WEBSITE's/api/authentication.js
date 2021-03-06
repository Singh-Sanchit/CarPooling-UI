document.getElementById("driverLogin").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("lusername").value;
  const password = document.getElementById("lpassword").value;
  console.log(email, password);
  fetch(url + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(res => res.json())
    .then(info => {
      if (info.success) {
        console.log(info.data.userId)
        localStorage.setItem("userId", info.data.userId)
        if(info.data.profileCompleted){
          window.location = "index.html";
        }
        window.location = "drivers-license.html";
      } else {
        alert(info.message);
      }
    })
    .catch(err => console.log(err));
});

document.getElementById("driverSignUp").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("sname").value;
  const email = document.getElementById("semail").value;
  const phone = document.getElementById("sphoneno").value;
  const password = document.getElementById("spassword").value;
  const cpassword = document.getElementById("scpassword").value;
  console.log(name, email, phone, password, cpassword);
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    if (password === cpassword) {
      fetch(url + "/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phone,
          password: password
        })
      })
        .then(res => res.json())
        .then(info => {
          if (info.success) {
            window.location = "sign-up-page-2.html";
          } else {
            alert(info.message);
          }
        })
        .catch(err => console.log(err));
    } else {
      alert("Password and Confirm Password does not match");
    }
  } else {
    alert("Please Enter Appropriate Email");
  }
});
