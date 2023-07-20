import React, { useEffect, useState } from 'react';
import { Typography, Paper } from '@mui/material';

const quotesArray = [
  {
    text: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde",
  },
  {
    text: "History isn't something you look back at and say it was inevitable. It happens because people make decisions that are sometimes very impulsive and of the moment, but those moments are cumulative realities.",
    author: "Marsha P. Johnson",
  },
  {
    text: "LGBT people are some of the bravest and most potent change agents and leaders I have encountered, and the most forceful defenders of the vulnerable and voiceless, because they know what it's like to be there.",
    author: "Ronan Farrow",
  },
  {
    text: "For me, the transgender thing is the reality of my life. It's the reality of my existence and it's something that I've come to believe is beautiful about me.",
    author: "Laverne Cox",
  },
  {
    text: "Love takes off the masks we fear we cannot live without and know we cannot live within.",
    author: "James Baldwin",
  },
  {
    text: "I fell out of the womb and landed in my mother's high heels.",
    author: "Leslie Jordan",
  },
  {
    text: "A long time ago I asked myself, ‘Do I want to be right, or do I want to be kind?’. I opted for kind.",
    author: "Jane Lynch",
  },
  {
    text: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.",
    author: "Harvey Fierstein",
  },
  {
    text: "“I'll be the first one to step on any organization, any politician's toes if I have to, to get the rights for my community.”",
    author: "Sylvia Rivera",
  },
  {
    text: "“Marriage is a magic word. And it has magic throughout the world. It has to do with our dignity as human beings, to be who we are openly.”",
    author: "Edie Windsor",
  },
  {
    text: "“More people need to find the inspiration, the courage, to just speak up because when the riot gets too loud, no matter how hard whoever tries, it's not possible to calm it. When the fire's too big, you can't have enough water to put it down.”",
    author: "Emmie America",
  },
  {
    text: "“Me being in the position I’m in now is a sign of inclusion and progress. I’m glad that I can provide that representation for Black asexual people in particular because we’re so often forgotten about.”",
    author: "Yasmin Benoit",
  },
  {
    text: "“People cling to these firm ideas [about gender] because it makes people feel safe. But if we could just celebrate all the wonderful complexities of people, the world would be such a better place.”",
    author: "Elliot Page",
  },
  {
    text: "“As women, and especially as queer people, we need to say no to things and be heard and stick our head above the water. It’s an issue, and I’m constantly trying to work with different people.”",
    author: "Rina Sawayama",
  },
  {
    text: "“I've been fighting for LGBTQ rights for as long as I can remember because, in turn, I'm fighting for myself and fighting for people like me.”",
    author: "George M. Johnson",
  },
  {
    text: "“It is important for the international community to listen to the local voices, and take direction from the local voices on how they can support, and how they can engage, and how they can provide solidarity to the LGBT community that needs this support urgently.”",
    author: "Frank Mugisha",
  },
  {
    text: "A long time ago I asked myself, ‘Do I want to be right, or do I want to be kind?’. I opted for kind.",
    author: "Jane Lynch",
  },
  {
    text: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.",
    author: "Harvey Fierstein",
  },
  {
    text: "“I'll be the first one to step on any organization, any politician's toes if I have to, to get the rights for my community.”",
    author: "Sylvia Rivera",
  },
  {
    text: "“Marriage is a magic word. And it has magic throughout the world. It has to do with our dignity as human beings, to be who we are openly.”",
    author: "Edie Windsor",
  },
  {
    text: "“More people need to find the inspiration, the courage, to just speak up because when the riot gets too loud, no matter how hard whoever tries, it's not possible to calm it. When the fire's too big, you can't have enough water to put it down.”",
    author: "Emmie America",
  },
  {
    text: "“Me being in the position I’m in now is a sign of inclusion and progress. I’m glad that I can provide that representation for Black asexual people in particular because we’re so often forgotten about.”",
    author: "Yasmin Benoit",
  },
  {
    text: "“People cling to these firm ideas [about gender] because it makes people feel safe. But if we could just celebrate all the wonderful complexities of people, the world would be such a better place.”",
    author: "Elliot Page",
  },
  {
    text: "“As women, and especially as queer people, we need to say no to things and be heard and stick our head above the water. It’s an issue, and I’m constantly trying to work with different people.”",
    author: "Rina Sawayama",
  },
  {
    text: "“It is important for the international community to listen to the local voices, and take direction from the local voices on how they can support, and how they can engage, and how they can provide solidarity to the LGBT community that needs this support urgently.”",
    author: "Frank Mugisha",
  },
  {
    text: "“You can live in this light of the truth. It’s totally liberating. You don’t have to live a lie.”",
    author: "Gilbert Baker",
  },
  {
    text: "“We need, in every community, a group of angelic troublemakers.”",
    author: "Bayard Rustin",
  },
  {
    text: "“I want to inspire other religious leaders of the world to re-examine their conceptions and teachings against LGBTQ people so that all of us can feel safe to be ourselves and shine in our own color. If I can contribute to that, what people think of me does not matter at all.”",
    author: "Kodo Nishimura",
  },
  {
    text: "“I'm in a place where I want everything in my life to mean something. For me, life is about being positive and hopeful, choosing to be joyful, choosing to be encouraging, choosing to be empowering.”",
    author: "Billy Porter",
  },
  {
    text: "“We're not supposed to conform. We're not supposed to be like somebody else. We're not supposed to act like somebody else. And as long as you stay true to exactly who you are, you will be rewarded in ways that you can't imagine.”",
    author: "Ellen DeGeneres",
  },
  {
    text: "“I feel we’re at this pivotal moment in the queer movement in terms of holding onto our rights, which are being chipped away at. …We can’t become complacent, and we need to make many alliances. People need to come together as one. There is power in numbers.”",
    author: "Tom Daley",
  },
  {
    text: "“You never completely have your rights, one person, until you all have your rights.”",
    author: "Marsha P. Johnson",
  },
  {
    text: "“Every gay and lesbian person who has been lucky enough to survive the turmoil of growing up is a survivor. Survivors always have an obligation to those who will face the same challenges.”",
    author: "Bob Paris",
  },
  {
    text: "“You have to go the way your blood beats. If you don’t live the only life you have, you won’t live some other life — you won’t live any life at all.”",
    author: "James Baldwin",
  },
  {
    text: "“I am a strong, black, lesbian woman. Every single time I say it, I feel so much better.”",
    author: "Brittney Griner",
  },
  {
    text: "“We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity.”",
    author: "George Takei",
  },
  {
    text: "“When all Americans are treated as equal, no matter who they are or whom they love, we are all more free.”",
    author: "Barack Obama",
  },
  {
    text: "“All of us who are openly gay are living and writing the history of our movement. We are no more — and no less — heroic than the suffragists and abolitionists of the 19th century; and the labor organizers, Freedom Riders, Stonewall demonstrators, and environmentalists of the 20th century.”",
    author: "Tammy Baldwin",
  },
  {
    text: "“There’s nothing wrong with you. There’s a lot wrong with the world you live in.”",
    author: "Chris Colfer",
  },
  {
    text: "“Stonewall represented, absolutely, the first time that the LGBT community successfully fought back and forged an organized movement and community.”",
    author: "Mark Segal",
  },
  {
    text: "“I'm proud of who I am. I am proud of my husband and our marriage.”",
    author: "Pete Buttigieg",
  },
  {
    text: "“All young people, regardless of sexual orientation or identity, deserve a safe and supportive environment in which to achieve their full potential.”",
    author: "Harvey Milk",
  },
  {
    text: "“So while I might not want to constantly be asked about my sexuality and just be me, a big part of me is my love of women. So I guess I’m talking about it until it’s no longer seen as something to talk about.”",
    author: "Hayley Kiyoko",
  },
  {
    text: "“The fact is, I’m gay, always have been, always will be; and I couldn’t be any more happy, comfortable with myself, and proud.”",
    author: "Anderson Cooper",
  },
  {
    text: "“A woman and a woman together are beautiful, just as a man and a woman together are beautiful.”",
    author: "Drew Barrymore",
  },
  {
    text: "“Openness may not completely disarm prejudice, but it's a good place to start.”",
    author: "Jason Collins",
  },
  {
    text: "“Our community is not a monolith, thank goodness, any more than America itself is. I look forward to and will continue to work toward the day when America recognizes all of us as full and equal citizens.”",
    author: "Cynthia Nixon",
  },
  {
    text: "“This community has fought and continues to fight a war of acceptance, a war of tolerance, and the most relentless bravery. You are the definition of courage, do you know that?”",
    author: "Lady Gaga to the LGBTQ+ Community",
  },
  {
    text: "“What I preach is: People fall in love with people, not gender, not looks, not whatever. What I'm in love with exists on almost a spiritual level.”",
    author: "Miley Cyrus",
  },
  {
    text: "“I realize that just living my truth of what I am, there’s one less person to fight me in my own head.”",
    author: "Raven-Symoné",
  },
  {
    text: "“I'm a young, bisexual woman, and I've spent a large part of my life trying to validate myself — to my friends, to my family, to myself — trying to prove that who I love and how I feel is not a phase.”",
    author: "Halsey",
  },
  {
    text: "“The more I accept myself as a genderless human being, in a way, the more I’m loving my body.”",
    author: "Sam Smith",
  },
  {
    text: "“Gender and sexuality are so fluid. It's OK to change your mind a million times and figure out what works for you. It's OK to take your time.”",
    author: "Amandla Stenberg",
  },
  {
    text: "“I do realize the importance of having the bravery to live as who you are, and I feel like a lot of people don't have that bravery. Maybe by me opening my big fat mouth like I usually do and stepping up and owning who I am, maybe it might inspire somebody else to do the same.”",
    author: "Michelle Rodriguez",
  },
  {
    text: "“I think it's important for parents to educate themselves too, and be open, and realizing that your children are their own person. And if they may or may not act the way you want them to — in terms of gender expression — that that's OK.”",
    author: "Laverne Cox",
  },
  {
    text: "“No person is your friend who demands your silence or denies your right to grow.”",
    author: "Alice Walker",
  },
];

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    // Select a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setRandomQuote(quotesArray[randomIndex]);
  }, []);

  return (
    <Paper sx={{ p: 3, maxWidth: 600, margin: 'auto' }}>
      {randomQuote && (
        <blockquote>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {randomQuote.text}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'right', marginTop: 2 }}>
            - {randomQuote.author}
          </Typography>
        </blockquote>
      )}
    </Paper>
  );
};

export default RandomQuote;
