// Shimmer.jsx
import "./TodoShimmer.css";

function TodoShimmer() {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-line"></div>
            <div className="shimmer-badge"></div>
          </div>
        ))}
    </div>
  );
}

export default TodoShimmer;