import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const EditProfileModal = ({ setEditProfile, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.img.value;
    const degree = e.target.degree.value;
    const cgpa = e.target.cgpa.value;
    const address = e.target.address.value;
    const number = e.target.number.value;
    const linkedin = e.target.linkedin.value;
    if (displayName && photoURL) {
      updateProfile({ displayName, photoURL });
    }
    const profileInfo = {
      email: user.email,
      displayName,
      photoURL,
      degree,
      cgpa,
      address,
      number,
      linkedin,
    };
    fetch("https://bicycle-odyssey-server.onrender.com/profiles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Profile Updated");
          setEditProfile(null);
          refetch();
        }
      });
  };
  if (updating || loading) {
    return <Loading />;
  }
  return (
    <div>
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
            action=""
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-md"
            />

            <input
              type="text"
              name="img"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-md"
            />

            <input
              type="text"
              name="degree"
              required
              placeholder="Last educational degree name"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="cgpa"
              required
              placeholder="Your CGPA"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="address"
              required
              placeholder="Your Address"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="number"
              name="number"
              required
              placeholder="Contact Number"
              className="input input-bordered w-full max-w-md"
            />
            <input
              type="text"
              name="linkedin"
              required
              placeholder="Your LinkedIn profile link"
              className="input input-bordered w-full max-w-md"
            />

            <input
              className="btn w-full max-w-md btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
