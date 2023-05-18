export default function handler(
  req: {
    body: any;
    method: string;
  },
  res: { json: (arg0: { message: string }) => void }
) {
  if (req.method === "POST") {
    // save to DB!
    console.log(req.body);

    res.json({ message: "success!" });
  }
}
