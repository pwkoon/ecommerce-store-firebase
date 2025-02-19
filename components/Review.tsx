"use client";

import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase-client";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

type ReviewType = {
  id: string;
  userId: string;
  username: string;
  comments: string;
  rating: number;
  createdAt: Timestamp;
};

function Review() {
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

  return (
    <div className="bg-green h-100 text-lightWhite p-5 font-bold text-5xl text-center">
      <Link href={"/"}>Guava Farm&apos;s Reviews</Link>
      <div className="p-20">
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-5 text-xl">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.id}
                className="text-green bg-lightWhite p-4 rounded-md h-[300px] shadow-lg"
              >
                <p className="text-lg font-semibold">{review.username}</p>
                <div className="flex">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                </div>
                <p className="mt-2">{review.comments}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
