import React, { useState } from "react";
// import "./ConcertSeats.css"; // Import the CSS file for styling

const SEAT_TYPES = ["Premium", "Semi-Premium", "Common"];
const ROWS = 6;
const COLS = 6;

const ConcertSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Handle seat selection
  const toggleSeat = (section, row, col) => {
    const seatId = `${section}-R${row + 1}C${col + 1}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // Confirm booking
  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("No seat selected!");
      return;
    }
    alert(`You booked: ${selectedSeats.join(", ")}`);
  };

  return (
    <div className="container">
      <h2>Concert Seat Booking</h2>
      {SEAT_TYPES.map((section) => (
        <div key={section} className="section">
          <h3>{section} Section</h3>
          <div className="grid">
            {Array.from({ length: ROWS * COLS }).map((_, index) => {
              const row = Math.floor(index / COLS);
              const col = index % COLS;
              const seatId = `${section}-R${row + 1}C${col + 1}`;
              const isSelected = selectedSeats.includes(seatId);

              return (
                <button
                  key={seatId}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(section, row, col)}
                >
                  {row + 1}-{col + 1}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <button className="confirm-btn" onClick={confirmBooking}>
        Confirm Seats
      </button>
    </div>
  );
};

export default ConcertSeats;