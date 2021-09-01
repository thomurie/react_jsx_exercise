const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Madi" />
      <Tweet
        username="tony1234"
        name="Tony T."
        msg="first twtt"
        date="04-03-12"
      />
      <Person
        name="Jon"
        age={19}
        hobbies={["running", "stretching", "rucking"]}
      />
      <Person
        name="Johnnyboy"
        age={16}
        hobbies={["overwatch", "streaming", "discord"]}
      />
      <Person
        name="Tommyboy"
        age={25}
        hobbies={["coding", "stretching", "anime"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
