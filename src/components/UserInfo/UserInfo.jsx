import { useState, useEffect } from "react";
import { Button } from "../Button/Button";

export function UserInfo(props) {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [repositories, setRepositories] = useState(null);
  const [repositoriesError, setRepositoriesError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => {
        if (response) return response.json();
        else {
          setUserError(response);
        }
      })
      .then((json) => setUser(json))
      .catch((userError) => setUserError(userError));

    fetch(`https://api.github.com/users/${props.user}/repos`)
      .then((response) => {
        if (response) return response.json();
        else {
          setUserError(response);
        }
      })
      .then((json) => setRepositories(json))
      .catch((repositoriesError) => setRepositoriesError(repositoriesError));
  }, [props.user]);

  if (user === null || repositories === null) {
    return <div>Loading...</div>;
  }

  if (userError !== null || repositoriesError !== null) {
    return <div>User not found</div>;
  }

  return (
    <div
      className="userInfo"
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <img
          className="avatar"
          src={user.avatar_url}
          alt={user.login}
          style={{
            height: "250px",
            width: "250px",
            borderRadius: "50%",
          }}
        />
        <p>
          <b>User:</b> {user.name}
        </p>
        <p>
          <b>Location:</b> {user.location}
        </p>
        <p>
          <b>Bio:</b> {user.bio}
        </p>
        <p>
          <b>User has:</b> {user.followers} followers
        </p>
        <p>
          <b>User is following:</b> {user.following} following
        </p>
      </div>
      <div>
        <div>
          <h3>Repositories:</h3>
        </div>
        <div className="userRepos">
          {repositories.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
        <Button onClick={props.reset} type="button" text="Reset" />
      </div>
    </div>
  );
}
