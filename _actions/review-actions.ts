"use server";

import { GooglePlacesResponse, Review } from "@/_types/review-types";

export async function fetchGoogleReviews(): Promise<{
  reviews: Review[];
  overallRating: number;
  totalReviews: number;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      reviews: [],
      overallRating: 0,
      totalReviews: 0,
    };
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&key=${apiKey}`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      return {
        reviews: [],
        overallRating: 0,
        totalReviews: 0,
      };
    }

    const data: GooglePlacesResponse = await response.json();

    const processedReviews: Review[] = (data.reviews || [])
      .slice(0, 10)
      .map((review) => ({
        rating: review.rating,
        text: review.text.text,
        authorName: review.authorAttribution.displayName,
        relativeTimeDescription: review.relativePublishTimeDescription,
      }));

    return {
      reviews: processedReviews,
      overallRating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
    };
  } catch {
    return {
      reviews: [],
      overallRating: 0,
      totalReviews: 0,
    };
  }
}
