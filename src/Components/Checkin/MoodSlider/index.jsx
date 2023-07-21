import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const MoodSlider = ({ rating, onRatingChange }) => {
  const traditionalMoodEmojis = {
    1: '😢',
    2: '😔',
    3: '😐',
    4: '🙂',
    5: '😄',
  };
  const genzMoodEmojis = {
    1: '🙃',
    2: '💀',
    3: '😅',
    4: '😭',
    5: '🔥',
  };
  const [isTraditional, setIsTraditional] = useState(true);
  const toggleEmojiSet = () => {
    setIsTraditional(!isTraditional);
  };
  return (
    <div style={styles.container}>
      <Typography variant="h4" style={styles.emoji}>
        {isTraditional ? traditionalMoodEmojis[rating] : genzMoodEmojis[rating]}
      </Typography>
      <Slider
        value={rating}
        onChange={(_, value) => onRatingChange(value)}
        min={1}
        max={5}
        step={1}
        valueLabelDisplay="auto"
        style={{ ...styles.slider, width: 300 }}
      />
      <Typography variant="h6" style={styles.ratingText}>
        Mood: {rating}
      </Typography>
      <Typography variant="subtitle1">Want to change your Emoji Style</Typography>
      <Button
        variant="contained"
        onClick={toggleEmojiSet}
        style={styles.button}
      >
        {isTraditional ? 'Gen-z Emoji Scale' : 'Traditional Emoji Scale'}
      </Button>
    </div>
  );
};
const styles = {
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  slider: {
    marginTop: 20,
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    borderRadius: 10,
  },
};
export default MoodSlider;
