import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Your Profile</h1>
      <p> Profile information will be displayed here </p>
      <ul>
        <li><a href="/profile/edit">Edit Profile</a></li>
        <li><a href="/profile/orders">View Orders</a></li>
        <li><a href="/profile/settings">Account Settings</a></li>
      </ul>
    </div>
  );
};

export default Profile;
