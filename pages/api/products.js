// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Acme Dynamite', price: 2300 },
    { id: 2, name: 'Acme Anvil', price: 120000 },
    { id: 3, name: 'John Trampoline', price: 65000 },
  ])
}
