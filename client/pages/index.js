import { Title } from "../helpers/use-title";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <Title title="Sslack:Where work happens" />
      <>
        <section className="section-1" id="home">
          <div className="navbar-wrapper">
            <div className="navbar-logo logo">
              <span className="p-1">S</span>
              <span className="p-2">S</span>
              Slack
            </div>
            <nav className="navbar">
              <a className="navbar-link" href="#about">
                About us
              </a>

              <a className="navbar-link" href="#customers">
                our customers
              </a>

              <a className="navbar-link" href="#contact">
                contact us
              </a>

              <div className="navbar-buttons">
                <Link href="/signup">
                  <a className="navbar-btn login-btn login">Join us Now</a>
                </Link>
              </div>
            </nav>
          </div>
          <div className="banner">
            <h1 className="banner-heading mb-2">Let’s reinvent work.</h1>
            <p className="banner-paragraph mb-2">
              The past year proved we can redefine the way we work. Let’s build
              a more connected, inclusive and flexible future together.
            </p>
            <p className="banner-sp"> - Sslack revolution </p>
            <button type="button">Join Now</button>
          </div>
        </section>
        <section className="about-us" id="about">
          <div className="section-header">
            <h1 className="section-heading">About Us</h1>
            <div className="underline"></div>
          </div>
          <div className="services">
            <div className="service">
              <div className="service-header">
                <i className="fab fa-slack-hash"></i>
                <h3>Channels</h3>
              </div>
              <p className="service-text">
                A channel is the place for everything related to a project,
                topic or team. Everyone in a channel sees the same messages and
                stays on the same page.
              </p>
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fab fa-slack"></i>
                <h3>Get work Done</h3>
              </div>
              <p className="service-text">
                Over 750,000 companies use Slack to get work done by making
                there tools more accessible and useful by connecting them all in
                one place.
              </p>
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fas fa-shield-alt"></i>
                <h3>Privacy&Security</h3>
              </div>
              <p className="service-text">
                Companies large and small rely on Slack to help them securely
                scale their business while collaborating with trusted
                organizations
              </p>
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fas fa-smile"></i>
                <h3>Simplicity</h3>
              </div>
              <p className="service-text">
                Work in a way that feels natural to you, supported by a simple,
                intuitive user experience and keeps projects moving, wherever
                you are.
              </p>
            </div>

            <div className="about-us-img-wrapper">
              <img src="/slack-logo.png" alt="Sslack for workspace" />
            </div>
          </div>
        </section>
        <section className="section-2" id="customers">
          <div className="section-header">
            <h1 className="section-heading">Our Customers</h1>
            <div className="underline"></div>
          </div>
          <div className="customers-wrapper">
            <div className="customer">
              <i className="fas fa-quote-left"></i>
              <p className="customer-text">
                Using this feature saves us much time and stress. File-sharing
                within one place, using the same integrations in one place, all
                of this is just awesome!
              </p>
              <div className="customer-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <img src="cust1.jpg" className="customer-img" />
              <h4 className="customer-name">Julian Wagner</h4>
              <p className="customer-job">Senior Architect, Bauer Xcel Media</p>
            </div>
            <div className="customer">
              <i className="fas fa-quote-left"></i>
              <p className="customer-text">
                Slack is enabling the community, and the way we built the
                community is actually helping us make the most use of Slack
              </p>
              <div className="customer-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <img src="cust2.jpg" className="customer-img" />
              <h4 className="customer-name">Guy Martin</h4>
              <p className="customer-job">Director, Open Source, Autodesk</p>
            </div>
            <div className="customer">
              <i className="fas fa-quote-left"></i>
              <p className="customer-text">
                In the face of a pandemic, every minute counts. Slack enables us
                to work quicker and smarter, delivering the best experience
                possible for our community.!
              </p>
              <div className="customer-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <img src="cust3.jpg" className="customer-img" />
              <h4 className="customer-name">Chayse Porter</h4>
              <p className="customer-job">Senior Director of IT, Shipt</p>
            </div>
          </div>
        </section>
        <section className="section-3" id="contact">
          <h1 className="section-heading">Contact</h1>
          <div className="form-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
          <p className="copyright">
            Copyright &copy; AbdelmounaimAzz All Rights Reserved
          </p>
        </section>
        <a href="#home" className="scroll-up-btn">
          <i className="fas fa-arrow-up"></i>
        </a>
      </>
    </>
  );
};

export default Home;
