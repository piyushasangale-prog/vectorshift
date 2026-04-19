// Users.tsx

import React from "react";
import users from "./users";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{user.name}</h2>
          <p><b>{user.year} - {user.branch}</b></p>

          <p><b>Interest:</b> {user.interest}</p>

          <p><b>Skills:</b> {user.skills.join(", ")}</p>

          <p><b>Projects:</b></p>
          <ul>
            {user.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Users;