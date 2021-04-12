function joinNs(endpoint) {
  if (nsSocket) {
    nsSocket.close();
    document
      .querySelector("#user-input")
      .removeEventListener("submit", formSubmission);
  }
  nsSocket = io(`http://localhost:5000${endpoint}`);
  nsSocket.on("nsRoomLoad", (nsRooms) => {
    let roomList = document.querySelector(".room-list");
    roomList.innerHTML = "";
    nsRooms.forEach((room) => {
      let glyph = room.privateRoom ? "lock" : "globe";
      roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${glyph}"></span>${room.roomTitle}</li>`;
    });
    let roomNodes = document.getElementsByClassName("room");
    Array.from(roomNodes).forEach((elem) => {
      elem.addEventListener("click", (e) => {
        joinRoom(e.target.innerText);
      });
    });
    const topRoom = document.querySelector(".room");
    const topRoomName = topRoom.innerText;
    joinRoom(topRoomName);
  });
  nsSocket.on("messageToClients", (msg) => {
    const newMsg = buildChat(msg);
    document.querySelector("#messages").innerHTML += newMsg;
  });
  document
    .querySelector(".message-form")
    .addEventListener("submit", formSubmission);
}

const formSubmission = (event) => {
  event.preventDefault();
  const newMessage = document.querySelector("#user-message").value;
  nsSocket.emit("newMessageToServer", {
    text: newMessage,
    username: localStorage.getItem("username"),
  });
  document.getElementById("user-message").value = "";
};

function buildChat(msg) {
  const formattedDate = new Date(msg.time).toLocaleString();
  const newChat = `
    <li class="user-li">
        <div class="user-image">
            <img src="${msg.avatar}" />
        </div>
        <div class="user-message">
            <div class="user-name-time ft-bld">${msg.username} <span class="ft-normal">${formattedDate}</span></div>
            <div class="message-text">${msg.text}</div>
        </div>
    </li>    
    `;
  return newChat;
}
