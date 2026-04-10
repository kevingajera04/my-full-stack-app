const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET all orders (Admin)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId')
      .populate('items.jewelleryId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// GET user orders
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate('items.jewelleryId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// GET single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('userId')
      .populate('items.jewelleryId');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// POST create new order
router.post('/', async (req, res) => {
  try {
    const { userId, items, totalAmount, shippingAddress, paymentMethod } = req.body;

    if (!userId || !items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      status: 'pending'
    });

    await newOrder.save();
    await newOrder.populate('items.jewelleryId');

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// PUT update order status (Admin)
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    order.updatedAt = Date.now();
    await order.save();

    res.status(200).json({
      message: 'Order updated successfully',
      order: order
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// DELETE order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
