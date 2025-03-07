"use client";

import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase-client";
import { FaStar } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type ReviewType = {
  id: string;
  userId: string;
  username: string;
  comments: string;
  rating: number;
  createdAt: Timestamp;
};

function Review() {
  const t = useTranslations("Review");
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Slice reviews to show only the current page's reviews
  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!db) return; // Ensure Firestore is initialized

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
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const averageRating = reviews.length
    ? reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length
    : 0;

  return (
    <div className="h-100 md:h-screen grid md:grid-cols-3 font-bold text-5xl text-center text-lightWhite">
      <div className="bg-review1 bg-cover bg-fixed bg-center p-10">
        <Link
          href="/"
          className="text-2xl w-fit flex mx-auto md:block border border-4 p-2 font-bold"
        >
          <h1>GUAVA</h1>
          <h1>FARM.</h1>
        </Link>
        <h2 className="text-2xl font-semibold mb-4">{t("average rating")}:</h2>
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-3xl ${
                star <= Math.round(averageRating)
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
            />
          ))}
          <span className="ml-2 text-xl">({averageRating.toFixed(1)})</span>
        </div>
      </div>
      {/* Right Side (Reviews Section) */}
      <div className="p-10 md:p-2 bg-green md:col-span-2 font-inria text-2xl text-lightWhite">
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center -5 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <ChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-green text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        )}
        <div className="px-5">
          <div className="grid md:grid-cols-3 gap-5 text-xl">
            {currentReviews.length > 0 ? (
              currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="text-green bg-lightWhite p-4 rounded-md h-[300px] shadow-lg rounded-xl"
                >
                  <p className="bg-green text-lg text-darkYellow w-1/2 mx-auto font-semibold">
                    {review.username}
                  </p>
                  <div className="flex justify-center py-2">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-darkYellow" />
                      ))}
                  </div>
                  <p className="mt-2">
                    <FaQuoteLeft className="text-sm" />
                    {review.comments}
                    <FaQuoteRight className="text-sm float-right" />
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
