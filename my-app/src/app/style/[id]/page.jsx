"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

// Dummy hijab styles (same as homepage)
const hijabStyles = [
  {
    id: "1",
    name: "Casual Hijab",
    description: "Perfect for daily wear.",
    image: "https://via.placeholder.com/200x200.png?text=Casual+Hijab"
  },
  {
    id: "2",
    name: "Formal Hijab",
    description: "Elegant look for events.",
    image: "https://via.placeholder.com/200x200.png?text=Formal+Hijab"
  }
];

export default function StylePage() {
  const params = useParams(); // get dynamic [id]
  const style = hijabStyles.find((s) => s.id === params.id);

  // Dummy reviews
  const [reviews, setReviews] = useState([
    { id: 1, text: "Beautiful style!", rating: 5 },
    { id: 2, text: "Very comfortable.", rating: 4 },
  ]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);

  const addReview = (e) => {
    e.preventDefault();
    if (!newReview) return;
    setReviews([...reviews, { id: Date.now(), text: newReview, rating }]);
    setNewReview("");
    setRating(5);
  };

  if (!style) {
    return <div className="p-6">Style not found</div>;
  }

  return (
    <div className="p-6">
      {/* Hijab Style Detail */}
      <div className="border rounded-lg shadow mb-6">
        <img src={style.image} alt={style.name} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-4">
          <h1 className="text-2xl font-bold">{style.name}</h1>
          <p className="text-gray-600">{style.description}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <ul className="mb-6 space-y-2">
        {reviews.map((review) => (
          <li key={review.id} className="border p-3 rounded bg-gray-50">
            ⭐ {review.rating}/5 — {review.text}
          </li>
        ))}
      </ul>

      {/* Add Review Form */}
      <form onSubmit={addReview} className="space-y-3">
        <textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-2 rounded"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Review</button>
      </form>
    </div>
  );
}
