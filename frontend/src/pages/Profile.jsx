
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Profile = () => {
  const { user } = useContext(AuthContext); // Get logged-in user
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setError("Please log in to view your profile.");
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userRes = await fetch(`${BASE_URL}/users/${user._id}`, {
          credentials: "include",
        });
        const userData = await userRes.json();

        // Fetch bookings for this user
        const bookingRes = await fetch(`${BASE_URL}/booking?userId=${user._id}`, {
          credentials: "include",
        });
        const bookingData = await bookingRes.json();

        if (!userRes.ok || !bookingRes.ok) {
          throw new Error(userData.message || bookingData.message);
        }

        setUserData(userData.data);

        // Process bookings to show only one per tour
        const uniqueBookings = {};
        bookingData.data.forEach((booking) => {
          if (!uniqueBookings[booking.tourName] || new Date(booking.bookAt) > new Date(uniqueBookings[booking.tourName].bookAt)) {
            uniqueBookings[booking.tourName] = booking; // Keep the latest booking per tour
          }
        });

        setBookings(Object.values(uniqueBookings));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="d-flex">
      <div className="container mt-4">
        <h2 className="mb-3">My Profile</h2>

        {/* User Info Card */}
        <div className="card p-3 mb-4 shadow">
          <h4>User Details</h4>
          <p><strong>Username:</strong> {userData?.username}</p>
          <p><strong>Email:</strong> {userData?.email}</p>
        </div>

        {/* Bookings Section */}
        <div className="card p-3 shadow">
          <h4>My Bookings</h4>
          {bookings.length > 0 ? (
            <ul className="list-group">
              {bookings.map((booking) => (
                <li key={booking._id} className="list-group-item">
                  <strong>Tour:</strong> {booking.tourName} <br />
                  <strong>Date:</strong> {new Date(booking.bookAt).toLocaleDateString()} <br />
                  <strong>Status:</strong>
                  <span className={`badge ${booking.status === "Confirmed" ? "bg-success" : "bg-warning"} ms-2`}>
                    {booking.status || "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
