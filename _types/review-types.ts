export interface Review {
  rating: number;
  text: string;
  authorName: string;
  relativeTimeDescription: string;
}

export interface GooglePlacesReview {
  rating: number;
  text: { text: string };
  authorAttribution: { displayName: string };
  relativePublishTimeDescription: string;
}

export interface GooglePlacesResponse {
  reviews: GooglePlacesReview[];
  rating: number;
  userRatingCount: number;
}

export interface ReviewSliderProps {
  reviews: Review[];
  cssClasses?: string;
}

export interface StarRatingProps {
  rating: number;
  cssClasses?: string;
}
