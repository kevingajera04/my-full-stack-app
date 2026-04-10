const express = require('express');
const router = express.Router();
const Jewellery = require('../models/Jewellery');

// GET all jewellery
router.get('/', async (req, res) => {
  try {
    const jewelleryItems = await Jewellery.find().populate('category');
    res.status(200).json(jewelleryItems);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// GET single jewellery by ID
router.get('/:id', async (req, res) => {
  try {
    const jewellery = await Jewellery.findById(req.params.id).populate('category');
    
    if (!jewellery) {
      return res.status(404).json({ message: 'Jewellery not found' });
    }
    
    res.status(200).json(jewellery);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// POST create new jewellery (Admin only)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, stock, material, weight, image } = req.body;

    if (!name || !price || !category || stock === undefined) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const newJewellery = new Jewellery({
      name,
      description,
      price,
      category,
      stock,
      material,
      weight,
      image
    });

    await newJewellery.save();
    res.status(201).json({
      message: 'Jewellery created successfully',
      jewellery: newJewellery
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// PUT update jewellery (Admin only)
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, stock, material, weight, image } = req.body;

    const jewellery = await Jewellery.findById(req.params.id);
    
    if (!jewellery) {
      return res.status(404).json({ message: 'Jewellery not found' });
    }

    if (name) jewellery.name = name;
    if (description) jewellery.description = description;
    if (price !== undefined) jewellery.price = price;
    if (category) jewellery.category = category;
    if (stock !== undefined) jewellery.stock = stock;
    if (material) jewellery.material = material;
    if (weight !== undefined) jewellery.weight = weight;
    if (image) jewellery.image = image;
    
    jewellery.updatedAt = Date.now();
    await jewellery.save();

    res.status(200).json({
      message: 'Jewellery updated successfully',
      jewellery: jewellery
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// DELETE jewellery (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const jewellery = await Jewellery.findByIdAndDelete(req.params.id);
    
    if (!jewellery) {
      return res.status(404).json({ message: 'Jewellery not found' });
    }

    res.status(200).json({ message: 'Jewellery deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
