const username = prompt("What is your username?");

const socket = io("http://localhost:5000", {
  query: {
    username,
  },
});
let nsSocket = "";
// const socketAws = io("http://localhost:5000/aws");
// const socketDocker = io("http://localhost:5000/docker");
// const socketLinux = io("http://localhost:5000/linux");
socket.on("nsList", (nsData) => {
  let namespacesDiv = document.querySelector(".namespaces");
  namespacesDiv.innerHTML = "";
  nsData.forEach((ns) => {
    namespacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint} ><img src="${ns.img}" class="w-60 h-40" /></div>`;
  });

  console.log(document.getElementsByClassName("namespace"));
  Array.from(document.getElementsByClassName("namespace")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const nsEndpoint = elem.getAttribute("ns");
      joinNs(nsEndpoint);
    });
  });
  joinNs("/aws");
});
