import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css"; // Import your CSS file
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function Profile() {
  const [{ user }] = useStateValue();
  const [profileData, setProfileData] = useState({
    contact: "",
    email: "",
    favourites: "",
    description: "",
    city: "",
    username: "",
    workplace: "",
  });

  useEffect(() => {
    if (user) {
      console.log("User is logged in:", user);
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((docRef) => {
          if (docRef.exists) {
            console.log("Document data:", docRef.data());
            setProfileData(docRef.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    } else {
      console.log("User is not logged in. Checking localStorage...");
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        console.log("Data retrieved from localStorage:", JSON.parse(storedFormData));
        setProfileData(JSON.parse(storedFormData));
      }
    }
  }, [user]);

  return (
    <section className="container">
      <div className="profile-header">
        <div className="profile-name">
          <h3>
            <strong>{user ? profileData.username : "Sign In"}</strong>
          </h3>
        </div>
      </div>

      <div className="profile-section">
        <h2>About</h2>

        <div className="info-container">
          <h2>Contact Info</h2>
          <p>
            <strong>
              📧 Email: {user ? profileData.email : "Sign in please"}
            </strong>
          </p>
          <p>
            <strong>
              📱 Contact no.: {user ? profileData.contact : "Sign in please"}
            </strong>
          </p>
          <p>
            <strong>
              ⭐ Favourites: {user ? profileData.favourites : "Sign in please"}
            </strong>
          </p>
          <p>
            <strong>
              Description: {user ? profileData.description : "Sign in please"}
            </strong>
          </p>
          <textarea rows="6" cols="45"></textarea>
          <button type="reset">Edit</button>
        </div>

        <article className="review">
          <div className="more-info">
            <h3>More...</h3>
            <p>
              <strong>
                🏢 Workplace: {user ? profileData.workplace : "Sign in please"}
              </strong>
            </p>
            <p>
              <strong>
                🏙️ City: {user ? profileData.city : "Sign in please"}
              </strong>
            </p>
          </div>
        </article>

        <Link to="/" className="link">
          Back to home page➡️
        </Link>
      </div>
    </section>
  );
}

export default Profile;
