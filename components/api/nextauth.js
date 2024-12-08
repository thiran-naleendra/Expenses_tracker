import { connectToDatabase } from '@/utils/db';
import Transaction from '@/models/Transaction';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const transaction = await Transaction.create(req.body);
      res.status(201).json({ success: true, data: transaction });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, error: 'Error saving transaction' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
