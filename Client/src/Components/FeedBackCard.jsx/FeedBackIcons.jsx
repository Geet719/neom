import getEmojiImage from "../../util/emojiFinder";

const Images = [
  { name: "anger", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549710/Neom/wv9snmrqc2mqqzyzsgdh.svg", range: [0, 1] },
  { name: "disapp", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549711/Neom/mugsdkk1g4dlvmadnyx8.svg", range: [1, 2] },
  { name: "bore", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549710/Neom/jrdnhc4me2jjphxmaqdg.svg", range: [2, 3] },
  { name: "joy", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549712/Neom/k95cbyheoch3xlryljjp.svg", range: [3, 4] },
  { name: "over", src: "https://res.cloudinary.com/drcgwjkmj/image/upload/v1740549713/Neom/pacxsafltmvydrwiwqsb.svg", range: [4, 5] },
];

export default function FeedBackIcons({val}) {
  const getURL=getEmojiImage(val);

  return (
    <div className="mt-[15px] gap-[20px] flex items-center">
      {Images.map((image, index) => (
        <img
          key={index}
          className={`${image.src===getURL?"":"filter grayscale"} w-[30px] h-[30px] cursor-pointer `}
          src={image.src} 
          alt={image.name} 
        />
      ))}
    </div>
  );
}
