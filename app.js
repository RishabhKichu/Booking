function DisplayDetails(event) {
  const Name = document.getElementById("name").value;
  const eMail = document.getElementById("email").value;
  const Num = document.getElementById("num").value;
  const Place = document.getElementById("place").value;
  const Hall = document.getElementById("hall").value;
  const Time = document.getElementById("time").value;
  const num_of_people = document.getElementById("people").value;
  const date = document.getElementById("date").value;
  const yes = document.getElementById("yes").value;
  const no = document.getElementById("no").value;

  if (
    Name.value != "" &&
    eMail.value != "" &&
    Num.value != "" &&
    Place.value != "" &&
    Hall.value != "" &&
    Time.value != "" &&
    num_of_people.value != "" &&
    date.value != ""
  ) {
    console.log("YASSS");
    sendEmail();
  }
}

function randomrubbishthatmightcomeinhandy() {
  // console.log('hello');
  // event.preventDefault();
  // console.log(Name.value);
  // const txt = Name.value;
  // const text = document.createElement("h2")
  // text.innerHTML=""
  // event.preventDefault();
  // submit_btn.addEventListener('click', DisplayName);
  // console.log("hello");
  // console.log(no);
  // console.log(yes);
}

function sendEmail() {
  const Name = document.getElementById("name").value;
  const eMail = document.getElementById("email").value;
  const Num = document.getElementById("num").value;
  const Place = document.getElementById("place").value;
  const Hall = document.getElementById("hall").value;
  const Time = document.getElementById("time").value;
  const num_of_people = document.getElementById("people").value;
  const date = document.getElementById("date").value;
  const yes = document.getElementById("yes").value;
  const no = document.getElementById("no").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "gemsbooking8@gmail.com",
    Password: "emeraldruby",
    To: "gemsarena01@gmail.com",
    From: "gemsbooking8@gmail.com",
    Subject: "Booking",
    Body:
      "Name= " +
      Name +
      "| | | | | | | |Email= " +
      eMail +
      "| | | | | | | |Phone= " +
      Num +
      "| | | | | | | |hall= " +
      Hall +
      "| | | | | | | |Date=" +
      date +
      "| | | | | | | |Time=" +
      Time +
      "| | | | | | | |People= " +
      num_of_people +
      "",
  }).then(  console.log("done!"));

}
