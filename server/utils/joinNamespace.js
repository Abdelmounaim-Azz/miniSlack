function joinNamespace(nsEndpoint) {
  if (nsSocket) {
    nsSocket.close();
    document.querySelector("#user-input").removeEventListener("submit", submit);
  }
  nsSocket = io(`http://localhost:5000${nsEndpoint}`);
  nsSocket.on("nsRoom", (nsRooms) => {
    let rooms = document.querySelector(".room-list");
    rooms.innerHTML = "";
    nsRooms.map((room) => {
      let icon = room.privateRoom ? "lock" : "globe";
      rooms.innerHTML += `<li class="room ">
      <span class="glyphicon glyphicon-${icon}"></span>${room.roomTitle}
    </li>`;
    });
    let roomNodes = document.getElementsByClassName("room");
    Array.from(roomNodes).map((el) => {
      el.addEventListener("click", (e) => {
        joinRoom(e.target.innerText);
      });
    });
    const topRoomName = document.querySelector(".room").innerText;
    joinRoom(topRoomName);
  });
  nsSocket.on("msgToClients", (msg) => {
    const content = buildChat(msg);
    document.querySelector("#messages").innerHTML += content;
  });
  document.querySelector(".message-form").addEventListener("submit", submit);
}

const submit = (event) => {
  event.preventDefault();
  const message = document.getElementById("user-message").value;
  nsSocket.emit("newMsgToServer", { data: message });
  document.getElementById("user-message").value = "";
};
