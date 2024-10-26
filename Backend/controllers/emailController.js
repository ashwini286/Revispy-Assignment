import User from '../models/User.js';

// Mock function for email verification
export const verifyEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.isVerified = true; // Mark user as verified
        await user.save();

        res.status(200).json({ message: 'Email verified successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
