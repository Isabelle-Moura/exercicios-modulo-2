import React, { Component } from "react";
import { ReviewForm } from "./ProductFormStyle";
import { RatingContainer } from "./ProductFormStyle";
import { RatingLabel } from "./ProductFormStyle";
import { StarIcon } from "./ProductFormStyle";
import { ReviewTextArea } from "./ProductFormStyle";
import { SubmitButton } from "./ProductFormStyle";

type ProductReviewState = {
  rating: number;
  reviewText: string;
  submittedReview: string | null;
};

class ProductReview extends Component<{}, ProductReviewState> {
  state: ProductReviewState = {
    rating: 0,
    reviewText: "",
    submittedReview: null,
  };

  handleRatingChange = (rating: number) => {
    this.setState({ rating });
  };

  handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ reviewText: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { rating, reviewText } = this.state;
    const submittedReview = `Rating: ${rating} stars, Review: ${reviewText}`;

    this.setState({ submittedReview });
  };

  render() {
    const { rating, reviewText, submittedReview } = this.state;

    return (
      <>
        <h2>Products Review</h2>
        <div>
          {submittedReview ? (
            <div>
              <p>Submitted Review:</p>
              <p>{submittedReview}</p>
            </div>
          ) : (
            <ReviewForm onSubmit={this.handleSubmit}>
              <RatingContainer>
                <RatingLabel>Rating:</RatingLabel>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    $active={star <= rating}
                    onClick={() => this.handleRatingChange(star)}
                  >
                    ★
                  </StarIcon>
                ))}
              </RatingContainer>
              <ReviewTextArea
                placeholder="Write your review here..."
                value={reviewText}
                onChange={this.handleReviewTextChange}
              />
              <SubmitButton type="submit">Submit Review</SubmitButton>
            </ReviewForm>
          )}
        </div>
      </>
    );
  }
}
export default ProductReview;
