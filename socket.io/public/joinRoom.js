const updateUsersInRoom = (endpoint, room) => {
  io.of(endpoint)
    .in(room)
    .clients((error, clients) => {
      io.of(endpoint).in(room).emit("updateMembers", clients.length);
    });
};

function joinRoom(roomName) {
  nsSocket.emit("joinRoom", roomName, (newNumberOfMembers) => {
    document.querySelector(
      ".curr-room-num-users"
    ).innerHTML = `${newNumberOfMembers} <span class="glyphicon glyphicon-user"></span>`;
  });
  nsSocket.on("historyCatchUp", (history) => {
    const messagesUl = document.querySelector("#messages");
    messagesUl.innerHTML = "";
    history.forEach((msg) => {
      const newMsg = buildChat(msg);
      messagesUl.innerHTML += newMsg;
    });
    messagesUl.scrollTo(0, messagesUl.scrollHeight);
  });
  nsSocket.on("updateMembers", (numMembers) => {
    document.querySelector(
      ".curr-room-num-users"
    ).innerHTML = `${numMembers} <span class="glyphicon glyphicon-user"></span>`;
    document.querySelector(".curr-room-text").innerText = `${roomName}`;
  });
  let searchBox = document.querySelector("#search-box");
  searchBox.addEventListener("input", (e) => {
    let messages = Array.from(document.getElementsByClassName("message-text"));
    let blockMsg = Array.from(document.getElementsByClassName("user-li"));

    messages.map((msg, index) => {
      if (
        msg.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1
      ) {
        blockMsg[index].style.visibility = "hidden";
      } else {
        blockMsg[index].style.visibility = "visible";
      }
    });
  });
}
