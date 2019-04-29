const Purchase = require('../models/Purchase');

class ApproveController {
  async update (req, res) {
    // Purchase id
    const { id } = req.params;

    const purchase = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author'
      }
    });

    // Takes the ad out of the purchase
    const { ad } = purchase;

    // Only the ad author can accept the purchase
    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json({ error: 'You are not the ad author' });
    }

    // The ad had been purchased already
    if (ad.purchasedBy) {
      return res
        .status(400)
        .json({ error: 'This ad had already been purchased' });
    }

    // Sets the purchase id in the ad
    ad.purchasedBy = id;

    // Update the ad in the database
    await ad.save();

    res.json(ad);
  }
}

module.exports = new ApproveController();
