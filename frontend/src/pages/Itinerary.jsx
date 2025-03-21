
import React, { useState } from "react";
import "../styles/Itinerary.css";
import { FaHotel, FaMoneyBillWave, FaPlane, FaListAlt } from 'react-icons/fa';
import CommonSection from "../shared/CommonSection";
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import blog4 from '../assets/images/blog-4.jpg'
import blog5 from '../assets/images/blog-5.jpg'
import blog6 from '../assets/images/blog-6.jpg'
import blog7 from '../assets/images/blog-7.jpg'
import blog8 from '../assets/images/blog-8.jpg'
import blog9 from '../assets/images/blog-9.jpg'
import blog10 from '../assets/images/blog-10.jpg'
import blog11 from '../assets/images/blog-11.jpg'
import blog12 from '../assets/images/blog-12.jpg'

const Itinerary = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showAccommodation, setShowAccommodation] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  // const [showThings, setThings] = useState(false);

  React.useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("travelTasks")) || [];
    setTasks(savedTasks);
  }, []);

  const saveTasks = (updatedTasks) => {
    localStorage.setItem("travelTasks", JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const blogPosts = [
    {
      date: "Jan 21, 2024",
      image: blog1,
      author: "John William",
      title: "What does your dream cruise look like, and where will it take you?",
      description: "Here is his experience of cruising for the first time. If you have been cruising recently or are considering hopping on a cruise in the near future, please leave a comment.",
    },
    {
      date: "May 8, 2024",
      image: blog2,
      author: "Jessica Elizabeth",
      title: "What's the ultimate luxury hotel experience, how will you find it?",
      description: "Where luxury meets adventure: exploring the world's most extraordinary hotels and destinations.",
    },
    {
      date: "Mar 6, 2024",
      image: blog3,
      author: "Thomas Michael",
      title: "What lies beyond the mountain ridge, and how will you get there?",
      description: "Follow the path of the brave, where mountain trails lead to breathtaking vistas and unforgettable experiences.",
    },
    {
      date: "May 2, 2024",
      image: blog4,
      author: "Emily Sarah",
      title: "Will you dare to go off the grid, and what will you find when you do?",
      description: "Mapping the journey, mapping the soul: exploring the world's most transformative travel experiences.",
    },
    {
      date: "Feb 4, 2024",
      image: blog5,
      author: "Amelia Rose",
      title: "What stories will you uncover on the open road, shaping your journey?",
      description: "Beyond the bus window: uncovering the hidden gems of the world's most scenic routes.",
    },
    {
      date: "July 8, 2024",
      image: blog6,
      author: "Samuel David",
      title: "What secrets lie hidden in the mountain trails, will you uncover them?",
      description: "Unleash your inner explorer, where the mountains beckon with secrets and surprises.",
    },
    {
      date: "Apr 5, 2024",
      image: blog7,
      author: "Richard Thomas",
      title: "Will you dare to track through the mountains, what will you find?",
      description: "Discover the hidden treasures of the mountains, where nature's splendor awaits the curious traveler.",
    },
    {
      date: "Jun 10, 2024",
      image: blog8,
      author: "Hannah Olivia",
      title: "Where will your journey take you, and how will you chart your course?",
      description: "Uncharted territories, unforgettable experiences: mapping the world's most off-the-beaten-path destinations.",
    },
    {
      date: "July 15, 2024",
      image: blog9,
      author: "Alexander George",
      title: "What's waiting for you behind the world's most exclusive hotels?",
      description: "The art of luxury travel: discovering the world's most exceptional hotels and experiences.",
    },
    {
      date: "May 30, 2024",
      image: blog10,
      author: "Victoria Charlotte",
      title: "The Best Games, Snacks, and Songs for a Long Car Trip?",
      description: "Journey's End: Reflections on a Long Car Trip, the Open Road Awaits, Scenic Routes, and Stories.",
    },
    {
      date: "Feb 19, 2024",
      image: blog11,
      author: "Abigail Amelia",
      title: "Through the Lens: A Visual Journey of a Long Car Trip?",
      description: "Through the Lens: A Traveler's Tale, Moments in Motion, Framing the Adventure.",
    },
    {
      date: "Jan 25, 2024",
      image: blog12,
      author: "Elizabeth Abigail",
      title: "Where will the bus take you, and what will you learn about yourself?",
      description: "Journeys through the landscape: bus travel as a path to self-discovery and growth.",
    }
  ];
  

  return (
    <div id="itinerary-container" className="py-4">
      <CommonSection title={"Itinerary"} />

      <div className="itinerary-sections">
        <div className="section" onClick={() => setShowAccommodation(!showAccommodation)}>
          <h4><FaHotel /> Accommodation</h4><h6>Click here</h6>
          {showAccommodation && (
            <div className="dropdown-content">
              <p>🏨 <strong>Best Hotels:</strong> Marriott, Hilton, Hyatt</p>
              <p>🌍 <strong>Booking Websites:</strong> <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a>, <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer">Airbnb</a></p>
            </div>
          )}
        </div>

        {/* <div className="section">
          <h4><FaPlane /> Flights & Travel</h4>
          <p>Check out Skyscanner or Google Flights for best deals!</p>
        </div> */}

        <div className="section" onClick={() => setShowBudget(!showBudget)}>
          <h4><FaMoneyBillWave /> Budget Planning</h4><h6>Click here</h6>
          {showBudget && (
            <div className="dropdown-content">
              <p>✈️ <strong>Flights:</strong> $300 - $1000</p>
              <p>🏨 <strong>Accommodation:</strong> $50 - $500 per night</p>
              <p>🍽️ <strong>Food & Drinks:</strong> $20 - $100 per day</p>
              <p>🎟️ <strong>Activities & Tours:</strong> $50 - $200</p>
              <p>🚕 <strong>Transport:</strong> $10 - $100</p>
            </div>
          )}
        </div>
      </div>

      <div className="todo-section">
        <h4><FaListAlt /> To-Do List</h4>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a task (e.g., Book flight, Pack essentials)"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(index)}>{task.text}</span>
              <button onClick={() => removeTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Section */}
      <section id="blog" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <h2 className="sm-title">Read these blogs for information</h2>
            <h3 className="lg-title">Recent Blog</h3>
          </div>

          <div className="blog-row">
            {blogPosts.map((post, index) => (
              <div className="blog-item my-2 shadow" key={index}>
                <div className="blog-item-top">
                  <img src={post.image} alt="blog" />
                  
                </div>
                <div className="blog-item-bottom">
                  <span>travel | {post.author}</span>
                  <a href="#">{post.title}</a>
                  <p className="text">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Itinerary;

