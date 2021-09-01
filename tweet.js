const Tweet = ({ username, name, date, msg }) => {
  return (
    <div>
      <h3>
        {name} ({username})
      </h3>
      <p>{msg}</p>
      <p>Posted: {date}</p>
    </div>
  );
};
