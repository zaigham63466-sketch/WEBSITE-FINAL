import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Simple Rate Limiting (max 5 submissions per IP per 10 mins)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  const timestamps = rateLimitMap.get(ip).filter(ts => now - ts < RATE_LIMIT_WINDOW);
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  
  if (timestamps.length > MAX_SUBMISSIONS) {
    return res.status(429).json({ success: false, error: 'Too many submissions. Please try again later.' });
  }
  next();
};

const sanitize = (str) => {
  if (!str) return '';
  return str.trim().replace(/<[^>]*>?/gm, ''); // simple html strip
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// API Route for Tour Inquiry Form
app.post('/api/inquiry', rateLimiter, async (req, res) => {
  try {
    const { name, email, phone, groupSize, date, message, website } = req.body;
    
    // Honeypot check
    if (website) {
      return res.json({ success: true });
    }

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email format.' });
    }

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeGroupSize = sanitize(groupSize);
    const safeDate = sanitize(date);
    const safeMessage = sanitize(message);

    await db.query(
      `INSERT INTO leads (source, name, email, phone, group_size, travel_dates, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      ['inquiry', safeName, safeEmail, safePhone, safeGroupSize, safeDate, safeMessage]
    );

    // TODO: send email notification here

    return res.json({ success: true });
  } catch (error) {
    console.error('Inquiry error:', error);
    return res.status(500).json({ success: false, error: 'Server error processing your inquiry.' });
  }
});

// API Route for General Contact Form
app.post('/api/contact', rateLimiter, async (req, res) => {
  try {
    const { name, email, phone, trek, dates, group, message, website } = req.body;
    
    // Honeypot check
    if (website) {
      return res.json({ success: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email format.' });
    }

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeTrek = sanitize(trek);
    const safeDates = sanitize(dates);
    const safeGroup = sanitize(group);
    const safeMessage = sanitize(message);

    await db.query(
      `INSERT INTO leads (source, name, email, phone, tour_interested, travel_dates, group_size, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ['contact', safeName, safeEmail, safePhone, safeTrek, safeDates, safeGroup, safeMessage]
    );

    // TODO: send email notification here

    return res.json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({ success: false, error: 'Server error processing your message.' });
  }
});

// Serve static React files
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all to serve index.html for React Router
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
