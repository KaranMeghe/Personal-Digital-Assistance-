import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa44"
                image={AlexaImg}
                description="Alexa was created by Amazon helps you buy things"
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImg}
                description="Cortana made by Microsoft. Who knows what it does? "
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri99"
                image={SiriImg}
                description="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
