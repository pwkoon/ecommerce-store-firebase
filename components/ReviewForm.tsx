import React, { useEffect, useState } from "react";
import {
  serverTimestamp,
  addDoc,
  collection,
  query,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebase/firebase-client";
import { FaStar } from "react-icons/fa";
import { useUser } from "@/lib/useUser";
import { RefreshCwIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";

type ReviewProps = {
  username: string;
};

type ReviewType = {
  id: string;
  userId: string;
  username: string;
  comments: string;
  rating: number;
  createdAt: Timestamp;
};

function ReviewForm({ username }: ReviewProps) {
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState<number>(5); // Default rating
  const [hover, setHover] = useState<number | null>(null); // Hover effect for stars
  const { user } = useUser();
  const router = useRouter();

  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ReviewType[];
      setReviews(reviewData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) {
        console.error("User is not authenticated");
        return;
      }

      await addDoc(collection(db, "reviews"), {
        userId: user.uid,
        username: username || user.username || "Anonymous",
        comments,
        rating,
        createdAt: serverTimestamp(),
      });

      setComments(""); // Clear input after submitting
      setRating(5); // Reset rating to default
      router.push("/reviews");
    } catch (error) {
      console.error("Failed to submit your review", error);
    }
  };

  const handleShuffle = () => {
    const shuffleRandomReviews = reviews
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setReviews(shuffleRandomReviews);
  };

  return (
    <div className="text-lightWhite text-lg grid grid-cols-3 items-center font-bold font-inria">
      <div className="bg-aboutDark p-5 bg-opacity-50 rounded-xl flex-row mx-auto">
        <RefreshCwIcon
          onClick={handleShuffle}
          className="float-right cursor-pointer"
        />
        <div className="max-w-[400px]">
          <AnimatePresence>
            {reviews.slice(0, 3).map((review) => (
              <motion.div
                key={review.id} // Keep consistent keys for smooth animation
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }} // Exit animation before new shuffle
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-row bg-lightWhite text-black rounded-xl my-7"
              >
                <p>{review.comments}</p>
                <p className="bg-darkYellow w-1/3">—{review.username}—</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex-row float-right">
          <Link href={"/reviews"}>more reviews</Link>
          <hr className="float-right w-3/4" />
        </div>
      </div>
      <div className="col-span-2 mx-auto">
        <h1 className="text-xl pb-5">
          Hello{" "}
          <span className="bg-darkYellow text-aboutDark p-1">
            {username ? username : "guest"}
          </span>
          , we&apos;d love to hear your experience at our Guava Farm!
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              maxLength={300} // Restricts input to 300 characters
              className="h-[200px] w-full px-3 py-2 bg-gray-700 text-green font-inria border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />
            <p className="text-gray-400 text-sm mt-1">
              {comments.length} / 300 characters
            </p>
          </div>

          {/*Star Rating Selection */}
          <div className="mt-4 flex gap-10 items-center">
            <label>Rating:</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-4xl transition-colors ${
                    star <= (hover !== null ? hover : rating)
                      ? "text-darkYellow"
                      : "text-gray-400"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(null)}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-aboutDark bg-opacity-75 hover:border-darkYellow hover:border-x-4 text-darkYellow font-semibold rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
