const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PeopleData = [
  {
    name: "Ava Thompson",
    message:
      "Absolute financial wizard! His expertise and in-depth knowledge have been instrumental in helping me navigate complex investment strategies with ease. I highly recommend his services to anyone looking for exceptional financial guidance.",
    photo: "/person1.png",
  },
  {
    name: "Max Collins",
    message:
      "A true gem in the finance industry. Her professionalism, attention to detail, and ability to simplify complex financial concepts have made a significant impact on my financial stability. I am incredibly grateful for her expertise and would confidently refer her to anyone seeking financial advice.",
    photo: "/person2.png",
  },
  {
    name: "Jack Morgan",
    message:
      "An outstanding financial advisor who goes above and beyond to ensure his clients' success. His personalized approach, combined with his exceptional communication skills, has helped me gain clarity and confidence in my financial decisions. I can't recommend him enough!",
    photo: "/person3.png",
  },
  {
    name: "Ruby Foster",
    message:
      "Emily is a rare find in the finance world. Her ability to analyze and interpret market trends is unparalleled. With her guidance, I have achieved remarkable investment growth and financial security. I am truly grateful for her dedication and highly endorse her services.",
    photo: "/person4.png",
  },
  {
    name: "Evan Hughes",
    message:
      "Michael is a trusted partner in my financial journey. His unwavering commitment to my financial goals and his sound advice have been invaluable. With his guidance, I have achieved financial milestones that seemed out of reach before. I wholeheartedly endorse him as a finance professional.",
    photo: "/person5.png",
  },
];

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('jai shree ram')
});

app.get('/api/people', async (req, res) => {
  try {
    res.json(PeopleData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
