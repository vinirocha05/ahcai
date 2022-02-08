// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const produtos = [
    {
      title: "Açaí",
      photo: "http://localhost:3000/assets/img/copo_acai.jpg",
    },
    {
      title: "Água de coco",
      photo: "http://localhost:3000/assets/img/agua_coco.png",
    },
    {
      title: "Sorvetes",
      photo: "http://localhost:3000/assets/img/sorvete.jpg",
    },
  ];

  res.status(200).json(produtos);
}
