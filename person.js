class Person extends React.Component {
  render() {
    let name = this.props.name.split("");
    if (name.length > 8) {
      name = name.slice(0, 8);
    } else {
      name = this.props.name;
    }
    console.log(this.props.hobbies);
    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>
          Name: {name} Age: {this.props.age}
        </h3>
        <h3>
          {parseInt(this.props.age) < 18 ? "you must be 18" : "please go vote!"}
        </h3>
        <ul>
          {this.props.hobbies.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
}
