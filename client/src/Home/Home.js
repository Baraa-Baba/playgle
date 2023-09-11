import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Bfooter from "../Components/Bfooter/Bfooter"; 
import { Button } from "react-bootstrap"; 

function Home() {
  return (
    <>
      <Navigation />

      <br />
      <div class="maincontent">
        <h2>Made with Love in India. For the World By the Indians...</h2>
        <p>
          The whole planet is going crazy for online video chatting. That’s
          because it’s so easyedde to find like-minded people, make cool new friends
          or even meet your soulmate. Online video chat offers a world of
          possibilities. Frndsmeet is A great Way to Meet New Friend OnLine.
          <br />
          <strong>
            Just Click On Chat Button and You will Be Randomly Connected to a
            Stranger
          </strong>
        </p>
        <Link to="/app">
          <br />
          <Button className="button3">Video Chat Now</Button>
        </Link>
      </div>
      <br />
      <div class="seccontent">
        <h3>One-on-one live video chat & audio calls</h3>
        <p>
          Live video chat in HD quality even on slower connections, excellent
          moderation, no fakes or bots, enjoyable conversations on any topic you
          like, and the ability to transfer your online interactions offline.
          Those are just a few of the possibilities open to you. Still not with
          us? Time to fix that! Enjoy all the benefits for free
        </p>

        <h3>Anonymous & Secure</h3>
        <p>
          To help you stay safe, chats are anonymous unless you tell someone who
          you are (not recommended!), and you can pause the chat at any time.
          For more information about the dos and don'ts of using Frndsmeet, see our
          <Link to="/Terms">
            Terms of Service
          </Link>  and  <Link to="/Guidelines">
            Community Guidelines
          </Link>. Frndsmeet's video chat is
          moderated but no moderation is perfect. Users are solely responsible
          for their behavior when using Frndsmeet.
        </p>

        <h3>Age Criteria</h3>
        <p>
          You must be 18+ or 13+ with parental permission and supervision to use
          Frndsmeet. See Frndsmeet's Terms of Service for more information. Parental
          control protections that assist parents are commercially available and
          you can find more information at <a href=" https://www.connectsafely.org/controls"> https://www.connectsafely.org/controls/</a>
          as well as other sites.
        </p>

        <h3>Site Moderation</h3>
        <p>
          This Site is Strictly Moderated.However No Moderation is
          Perfect.Please leave Frndsmeet and visit an adult site instead if that's
          what you're looking for, and you are 18 or older.
        </p>
      </div>

      <Bfooter />
    </>

  );
}

export default Home;
