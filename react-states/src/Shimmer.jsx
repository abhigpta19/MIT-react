// Shimmer.jsx
import "./Shimmer.css";

function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-text"></div>
            <div className="shimmer-status"></div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;