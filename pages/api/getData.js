import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const limit = Number(req.query.limit) || 20;
  const client = await clientPromise;
  const db = client.db("broadband_data");
  const collection = db.collection("summary_by_geography");
  const data = await collection
    .find({})
    .limit(limit)
    .project({
      geography_type: 1,
      geography_id: 1,
      geography_desc: 1,
      geography_desc_full: 1,
    })
    .toArray();

  res.status(200).json({ count: data.length, data });
}