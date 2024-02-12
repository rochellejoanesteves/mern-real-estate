import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandLord();
  }, [listing.userRef]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landLord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landLord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={handleMessage}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landLord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

export default Contact;
