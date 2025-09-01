export default function handler(req, res) {
  const { qrcode } = req.query;

  if (qrcode === "w9mb" || qrcode === "W9MB") {
    return res.status(200).json({
      name: "w9mb",
      id: "fac39a25-7298-4226-952a-4a0a21759b9f",
      category: "scooter",
      price: 10,
      currency: "Kr"
    });
  } else {
    return res.status(400).json({
      error: "Vehicle not found or invalid QR code"
    });
  }
}
