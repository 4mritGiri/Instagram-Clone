
import { USERS } from './users';

export const POSTS = [
 {
  imageUrl: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JIJOVDXRCH.png',
  user: USERS[0].user,
  followers: 1000,
  likes: 73,
  caption: 'Advent of cyber 2022 #TryHackMe',
  profile_picture: USERS[0].image,
  date: 20230506,
  comments: [
   {
    user: 'Syam',
    comment:'Congratulations 👏🎉👏🎉🎉',
    likes: 12
   },
   {
    user: 'Sita',
    comment:'Keep it up 💪👍, Congratulations 🎉  Amrit',
    likes: null,
   },
  ]
 },
 {
  imageUrl: 'https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  user: USERS[1].user,
  followers: 999,
  likes: 57,
  caption: 'Enjoying the beautiful sunset at the beach #vacation #relax',
  profile_picture: USERS[1].image,
  date: 20230505,
  comments: [
    {
      user: 'Alex',
      comment: 'Wow, what a stunning view!',
      likes: null,
    },
    {
      user: 'Maggie',
      comment: 'I wish I could be there too, looks amazing!',
      likes: null,
    },
  ],
},
{
  imageUrl: 'https://source.unsplash.com/random/900×700/?hacking',
  user: USERS[7].user,
  followers: 101,
  likes: 102,
  caption: 'Exploring new cities, new cultures, new experiences #travel #adventure',
  profile_picture: USERS[7].image,
  date: 20230506,
  comments: [
    {
      user: 'Ryan',
      comment: 'Looks like you had a great time!',
      likes: null,
    },
    {
      user: 'Lena',
      comment: 'I love your sense of adventure!',
      likes: null,
    },
  ],
},
{
  imageUrl: 'https://source.unsplash.com/random/900×700/?neture',
  user: USERS[2].user,
  followers: 80,
  likes: 89,
  caption: 'Enjoying the great outdoors, nature is my happy place 🌳🍃 #hiking #naturelover',
  profile_picture: USERS[2].image,
  date: 20230504,
  comments: [
    {
      user: 'Sophie',
      comment: 'I love hiking too! Where is this beautiful place?',
      likes: null,
    },
    {
      user: 'Jake',
      comment: 'Nature truly is amazing, thanks for sharing!',
      likes: null,
    },
  ],
},
{
  imageUrl: 'https://source.unsplash.com/random/900×700/?nature, hacking',
  user: USERS[3].user,
  followers: 678,
  likes: 76,
  caption: 'Had a great time at the concert last night! 🎵🎶 #musiclover #livemusic',
  profile_picture: USERS[3].image,
  date: 20230503,
  comments: [
//    {
 //     user: 'Olivia',
 //     comment: 'I wish I could have been there too!',
 //     likes: null,
 //   },
 //   {
 //     user: 'Ben',
 //     comment: 'That must have been an amazing show!',
 //     likes: null,
  //  },
  ],
},
{
  imageUrl: 'https://source.unsplash.com/random/900×700/?fruit, animal',
  user: USERS[4].user,
  followers: 672,
  likes: 61,
  caption: 'Nothing beats a lazy Sunday morning with a good book ☕️📖 #cozy #relaxing',
  profile_picture: USERS[4].image,
  date: 20230501,
  comments: [
    {
      user: 'Emma',
      comment: 'That sounds like the perfect Sunday morning!',
      likes: null,
    },
    {
      user: 'Tom',
      comment: 'I love to start my day with a good book too!',
      likes: null,
    },
  ],
},
];
