import Category from '../models/Category.js';
import User from '../models/User.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
};

export const selectCategory = async (req, res) => {
    const { userId, categoryIds } = req.body;
    try {
        await User.findByIdAndUpdate(userId, { selectedCategories: categoryIds });
        res.json({ message: 'Categories selected successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error selecting categories' });
    }
};
