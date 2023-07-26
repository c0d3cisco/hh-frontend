import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MoodSlider = ({ rating, onRatingChange }) => {
  // Define two sets of mood emojis, one for traditional and one for Gen Z
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

  // State to track the current emoji set (traditional or Gen Z)
  const [isTraditional, setIsTraditional] = useState(true);

  // Function to toggle between traditional and Gen Z emoji sets
  const toggleEmojiSet = () => {
    setIsTraditional(!isTraditional);
  };

  return (
    <div style={styles.container}>
      {/* Display the corresponding emoji based on the current rating and emoji set */}
      <Typography variant="h4" style={styles.emoji}>
        {isTraditional ? traditionalMoodEmojis[rating] : genzMoodEmojis[rating]}
      </Typography>

      {/* Slider component for selecting the mood rating */}
      <Slider
        value={rating}
        onChange={(_, value) => onRatingChange(value)}
        min={1}
        max={5}
        step={1}
        valueLabelDisplay="auto"
        style={{ ...styles.slider, width: 300 }}
      />

      {/* Display the numeric rating */}
      <Typography variant="h6" style={styles.ratingText}>
        Mood: {rating}
      </Typography>

      {/* Prompt to change emoji style */}
      <Typography variant="subtitle1">Want to change your Emoji Style</Typography>

      {/* Button to toggle between traditional and Gen Z emoji sets */}
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

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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
