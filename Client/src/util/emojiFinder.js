

const Images = [
  { name: "anger", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549710/Neom/wv9snmrqc2mqqzyzsgdh.svg", range: [0, 1] },
  { name: "disapp", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549711/Neom/mugsdkk1g4dlvmadnyx8.svg", range: [1, 2] },
  { name: "bore", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549710/Neom/jrdnhc4me2jjphxmaqdg.svg", range: [2, 3] },
  { name: "joy", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549712/Neom/k95cbyheoch3xlryljjp.svg", range: [3, 4] },
  { name: "over", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549713/Neom/pacxsafltmvydrwiwqsb.svg", range: [4, 5] },
];

export default function getEmojiImage(rating) {
  const image = Images.find(img => rating > img.range[0] && rating <= img.range[1]);
  return image ? image.src : null;
}





