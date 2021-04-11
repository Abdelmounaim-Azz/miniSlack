import { Title } from "../helpers/use-title";
import Head from "next/head";
import { useState, useEffect } from "react";
const slackIt = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    sessionStorage.setItem("username", username);
  }, [username]);
  return (
    <>
      <Title title="Slack:slack-it with whomever you want" />
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <script src="http://localhost:5000/socket.io/socket.io.js"></script>
        <script src="/scripts.js"></script>
        <script src="/joinNs.js"></script>
        <script src="/joinRoom.js"></script>
      </Head>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-1 namespaces"></div>
          <div class="col-sm-2 rooms">
            <h3>Channels</h3>
            <ul class="room-list"></ul>
          </div>
          <div class="chat-panel col-sm-9">
            <div class="room-header row col-6">
              <div class="col-sm-3">
                <span class="curr-room-text"></span>
                <span class="curr-room-num-users"></span>
              </div>
              <div class="col-sm-3 search pull-right">
                <span class="glyphicon glyphicon-search"></span>
                <input type="text" id="search-box" placeholder="Search" />
              </div>
            </div>
            <div class="message-form">
              <form id="user-input">
                <div class="col-sm-12">
                  <input
                    id="user-message"
                    type="text"
                    placeholder="Enter your message"
                  />
                </div>
              </form>
            </div>
            <ul id="messages" class="col-sm-12"></ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default slackIt;
