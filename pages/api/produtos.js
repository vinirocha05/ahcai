// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const produtos = [
    {
      title: "Açaí",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!",
      photo: "http://localhost:3000/assets/img/tigela_acai.jpg",
    },
    {
      title: "Água de coco",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!",
      photo: "http://localhost:3000/assets/img/agua_coco.png",
    },
    {
      title: "Sorvetes de massa",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!",
      photo: "http://localhost:3000/assets/img/sorvete.jpg",
    },
  ];

  res.status(200).json(produtos);
}
