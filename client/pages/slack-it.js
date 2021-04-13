import { Title } from "../helpers/use-title";
import Head from "next/head";
import { Logout } from "../helpers/use-googleAuth";
import { useHasMounted } from "../helpers/use-hasMounted";

const slackIt = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
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
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
          integrity="sha512-7IDZ+mHVoc7nSziUi72L5rGojJDtveVWHOjb+Eu8QSnguy5FitNnFyEoLoL3v1u18DNm4E30elDfkhZvVADw6Q=="
          crossOrigin="anonymous"
        ></script>
        <script src="/scripts.js"></script>
        <script src="/joinNs.js"></script>
        <script src="/joinRoom.js"></script>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1 namespaces"></div>
          <div className="flex-end">
            <Logout />
          </div>
          <div className="col-sm-2 rooms">
            <h3>Channels</h3>
            <ul className="room-list"></ul>
          </div>
          <div className="chat-panel col-sm-9">
            <div className="room-header row col-6">
              <div className="col-sm-3">
                <span className="curr-room-text"></span>
                <span className="curr-room-num-users"></span>
              </div>
              <div className="col-sm-3 search pull-right">
                <span className="glyphicon glyphicon-search"></span>
                <input type="text" id="search-box" placeholder="Search" />
              </div>
            </div>
            <div className="message-form">
              <form id="user-input">
                <div className="col-sm-12">
                  <input
                    id="user-message"
                    type="text"
                    placeholder="Enter your message"
                  />
                </div>
              </form>
            </div>
            <ul id="messages" className="col-sm-12"></ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default slackIt;
