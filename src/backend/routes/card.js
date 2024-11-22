const { Router } = require('express');
const Card = require('../models/card.model');

const router = Router();

// POST route to add a card
router.post('/api/v1/cards', async (req, res) => {
  const {
    name,
    description,
    damageType,
    armorType,
    damage,
    life,
    armor,
    image,
    rarity,
    superCard,
  } = req.body;

  try {
    // Validate input (optional, for demonstration purposes)
    if (!name || !description || !damageType || !armorType || !rarity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create the card
    const newCard = await Card.create({
      name,
      description,
      damageType,
      armorType,
      damage,
      life,
      armor,
      image,
      rarity,
      superCard,
    });

    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = {
  router,
}
