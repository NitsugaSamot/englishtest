import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { checkPassword } from '../utils/auth';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn: '1h' });

    // Configura la cookie con el token
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'development' });

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
