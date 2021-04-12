import Link from "next/link";
import { Title } from "../helpers/use-title";
import { ShiftBy } from "../helpers/use-shift";
const Home = () => {
  return (
    <>
      <Title title="Sslack:Where work happens" />
      <>
        <section className="section-1 drop" id="home">
          <div className="navbar-wrapper ">
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

              <div className="navbar-buttons ">
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
            <p className="banner-sp">
              <svg viewBox="0 0 220 120">
                <g>
                  <path
                    className="signature"
                    fill="#48bfe3"
                    d="m 19.144079,83.252505 c 1.395541,-0.198033 3.570235,0.366998 4.817363,-0.272688 2.67599,-1.372587 3.510393,-3.666275 5.145685,-6.160614 1.125744,-2.362327 2.338128,-4.685284 3.377234,-7.086981 2.254293,-5.210357 4.903539,-12.60481 6.849608,-17.910883 2.70039,-7.362767 5.434912,-14.711294 8.167044,-22.062297 1.544857,-3.667109 2.75626,-7.480816 4.476694,-11.075258 0.61113,-1.276811 1.192864,-2.534368 2.428269,-3.266492 -1.269457,0.129256 -2.792817,-0.384814 -3.808367,0.387769 -0.586372,0.446085 0.39197,1.428816 0.455642,2.162826 0.162343,1.871433 0.200601,3.752713 0.220456,5.63107 0.0781,7.388426 -0.319395,14.78539 -0.650587,22.163132 -0.411252,9.325293 -1.119042,18.651273 -0.753591,27.988697 0.245446,3.552195 0.963382,7.059702 2.589699,10.239737 0.570317,-0.07968 0.413814,1.736145 1.073317,1.672878 1.94279,-0.186367 4.04432,-0.304085 5.700521,-1.33664 1.130197,-0.704623 1.344983,-2.299396 1.995618,-3.461512 1.749896,-3.125536 3.202384,-5.899039 4.889293,-9.070128 2.898018,-5.633723 5.688417,-11.426119 9.633495,-16.430906 1.751454,-2.22192 2.44638,-2.727171 4.429726,-4.546655 0.649933,-0.479304 2.38992,-1.900047 3.339901,-2.158114 0.352385,-0.09572 1.435357,-0.0276 1.091351,0.09486 -1.07677,0.383302 -2.528276,-0.07912 -3.354404,0.710734 -0.485288,0.463976 0.451832,1.267915 0.59993,1.922775 0.183306,0.810554 0.261138,1.641403 0.391708,2.462107 0.737838,2.749049 -0.310529,7.883419 0.969322,10.325375 0.240784,0.459417 0.651179,0.807542 0.97677,1.211315 2.058382,1.769946 4.919279,1.843799 7.250155,3.037234 0.466047,0.23862 0.876332,0.573238 1.314497,0.859859 0.419693,0.45952 0.899698,0.870484 1.259081,1.378566 2.141342,3.027323 3.368588,7.969742 3.387363,11.621431 0.0067,1.296321 -0.238911,2.581649 -0.358368,3.872471 -0.470112,1.378339 -0.730388,2.847192 -1.410332,4.13502 -2.69272,5.100058 -8.770959,9.723887 -14.174528,11.603447 -0.978432,0.34034 -2.028696,0.42073 -3.043045,0.6311 0.64651,-0.38291 1.674842,-0.44549 1.939528,-1.14872 0.36149,-0.9604 -0.237468,-2.038575 -0.356203,-3.057866 0.712346,-1.782437 1.108999,-3.72631 2.137037,-5.347314 5.37781,-8.479679 14.807613,-15.522461 22.485039,-21.77438 6.31485,-4.946782 12.97091,-9.415777 19.80751,-13.599816 1.34084,-0.8206 2.78853,-1.479727 4.04562,-2.423631 2.81653,-2.114838 3.788,-3.833516 5.88672,-6.626937 0.84027,-1.327412 1.71795,-2.631874 2.52083,-3.982235 0.7521,-1.264963 1.43484,-2.56993 2.14215,-3.860472 0.63321,-1.155335 2.22438,-4.53298 3.48317,-5.554792 0.49912,-0.405157 2.14631,-1.178452 1.82579,-0.621197 -0.4111,0.714748 -1.44061,0.802568 -2.16092,1.203851 0.58329,0.98174 1.32654,1.884638 1.74987,2.945215 1.35295,3.389588 2.01611,7.679277 2.64637,11.21859 0.50494,2.835587 1.15597,7.291358 1.84005,10.182209 0.29531,1.247968 0.71171,2.464144 1.06757,3.696216 0.4368,0.988078 0.81604,2.003673 1.31043,2.964235 0.61028,1.185741 1.39762,2.27525 1.99891,3.465576 2.93942,5.818923 5.50405,12.393226 5.3022,19.042526 -0.0775,2.552655 -0.88154,5.031012 -1.3223,7.546519 -1.22698,2.285614 -2.14067,4.769463 -3.68092,6.856843 -3.83757,5.20076 -11.69494,11.33373 -18.40708,11.92331 -2.37027,0.2082 -7.8172,-5.72663 -7.88493,-5.78771 -1.14724,-2.61304 -2.62177,-5.10565 -3.44172,-7.83911 -1.76071,-5.869671 -2.45386,-13.013614 -0.59428,-18.984582 1.14426,-3.674129 3.01854,-7.145817 5.24601,-10.283796 5.51707,-7.772223 11.6534,-11.789428 18.98357,-17.599006 9.85163,-6.792765 20.45984,-12.499441 31.78265,-16.416436 1.4744,-0.51005 2.98229,-0.917598 4.47343,-1.376396 0,0 -3.59923,-1.164879 -3.59923,-1.164879 v 0 c -12.50492,4.42096 -24.25113,10.628223 -35.0071,18.421331 -9.94922,7.985813 -20.59488,15.496728 -24.76454,28.340077 -1.99666,6.150123 -1.28125,13.284927 0.38307,19.369767 0.77602,2.83717 2.15538,5.47368 3.23307,8.21051 1.70759,1.71975 2.89378,4.20792 5.12276,5.15924 8.03842,3.43075 16.08581,-0.5162 22.04278,-5.65972 2.06408,-1.78224 4.05571,-3.70481 5.64804,-5.9187 1.56201,-2.17173 2.48175,-4.739836 3.72262,-7.109757 0.45163,-2.59199 1.25372,-5.146876 1.35489,-7.775974 0.25444,-6.612485 -2.02395,-13.511265 -4.73531,-19.451095 -0.97366,-2.133026 -2.42726,-4.025897 -3.26852,-6.228739 -0.40426,-1.198546 -0.87704,-2.376122 -1.21278,-3.595637 -0.82379,-2.992281 -1.52496,-7.158273 -2.05379,-10.144379 -0.47861,-2.702602 -1.41373,-8.828929 -2.27296,-11.536688 -0.38634,-1.217522 -1.08159,-2.314442 -1.62239,-3.471664 -1.97368,-0.453149 -3.89669,-1.306491 -5.92103,-1.35945 -1.44945,-0.03792 -2.95247,2.81351 -3.36466,3.537064 -2.09357,3.675017 -3.65507,7.670247 -6.31111,11.019036 -2.26257,2.861646 -2.9311,4.076922 -5.79823,6.303293 -1.19779,0.9301 -2.53978,1.657985 -3.8013,2.499632 -6.5387,4.362447 -12.92964,8.940001 -19.05754,13.868908 -5.563877,4.57632 -11.861278,9.52087 -16.932583,14.654331 -2.288498,2.316546 -4.581298,4.676135 -6.417342,7.365474 -0.296188,0.433845 -4.488892,7.832465 -2.275324,9.775545 1.519563,1.33387 3.928012,0.96121 5.892019,1.44181 0.986801,-0.29202 2.01109,-0.47874 2.960399,-0.87606 5.504109,-2.30366 11.446516,-7.017269 14.23497,-12.354743 0.710891,-1.360733 1.002141,-2.902333 1.503211,-4.353501 0.14153,-1.358054 0.41591,-2.708781 0.4246,-4.07416 0.0233,-3.65166 -1.25721,-9.086763 -3.183325,-12.247722 -0.356196,-0.584554 -0.840944,-1.080341 -1.261417,-1.620512 -0.452504,-0.387289 -0.852083,-0.846759 -1.357514,-1.161867 -0.412525,-0.257186 -0.902028,-0.363199 -1.358193,-0.531222 -1.916486,-0.705911 -3.95083,-1.09205 -5.763863,-2.060832 -0.305528,-0.239625 -0.692317,-0.401902 -0.916581,-0.718878 -1.312055,-1.85446 -0.572944,-7.81058 -1.147418,-10.134296 -0.0181,-0.138144 -0.533379,-4.662964 -0.852268,-4.890328 -4.246999,-3.028098 -6.275538,-1.439143 -9.314243,1.194496 -1.919693,1.942023 -2.561006,2.465551 -4.267722,4.776224 -3.788409,5.129016 -6.52304,10.927656 -9.448114,16.561069 -1.594543,2.918392 -3.295118,6.164308 -5.105194,8.967962 -0.702474,1.088076 -2.397207,1.871848 -2.260983,3.1598 0.10841,1.024996 1.788038,1.040971 2.745621,1.422297 0.562451,0.223978 -2.260921,-1.711606 -1.100006,-1.445218 -1.74445,-2.95961 -2.447126,-6.372116 -2.853052,-9.753068 -0.66203,-9.290769 -0.172127,-18.601298 0.0687,-27.900402 0.245457,-7.400552 0.550384,-14.795357 0.897393,-22.191834 0.09024,-1.923556 0.267512,-3.844973 0.271296,-5.770641 0.0021,-1.057673 0.626512,-2.576491 -0.253741,-3.162864 -1.328068,-0.884683 -3.188925,-0.128387 -4.783386,-0.19258 -1.613143,1.838037 -2.36301,4.204934 -3.161945,6.479732 -0.992744,2.826628 -1.881352,5.689188 -2.89505,8.508641 -2.479731,7.386862 -4.991423,14.770372 -7.650197,22.095026 -2.071743,5.707446 -4.490762,12.305093 -7.143237,17.787831 -1.142489,2.36156 -2.531348,4.595786 -3.797021,6.893677 -1.063635,1.320948 -1.962531,2.793518 -3.190905,3.962841 -2.017868,1.920862 -4.77074,1.302743 -7.248954,1.34048 0,0 4.122004,1.707391 4.122004,1.707391 z"
                    stroke="black"
                    strokeWidth="1"
                  />
                </g>
              </svg>{" "}
            </p>
            <ShiftBy y={-50}>
              <Link href="/signup">
                <button type="button">Join Now</button>
              </Link>
            </ShiftBy>
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
