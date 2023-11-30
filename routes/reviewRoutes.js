const express = require('express');
const router = express.Router();
const {
  addReview,
  getAllReviews,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

// Review routes
router.post('/:productId/reviews', addReview);
router.get('/:productId/reviews', getAllReviews);
router.put('/:productId/reviews/:reviewId', updateReview);
router.delete('/:productId/reviews/:reviewId', deleteReview);

module.exports = router;
