import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa44" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri99" />
    </div>
  );
};

export default App;
