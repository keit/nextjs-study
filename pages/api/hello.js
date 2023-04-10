var count = 0;
export default function handler(req, res) {
  res.status(200).json({ text: `${count}` });
  count += 1;
}
