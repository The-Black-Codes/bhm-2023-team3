// import csv from "csvtojson";
// import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  // const client = await clientPromise;
  // const db = client.db("broadband_data");
  // const collection = db.collection("summary_by_geography");

  // const csvFilePath = "data/summary_by_geography.csv";
  // const jsonArray = await csv().fromFile(csvFilePath);

  // try {
  //   await collection.insertMany(jsonArray);
  // } catch (error) {
  //   console.log(error);
  //   res.json({ error: "error", status: "error" });
  // }

  res.status(200).json({ name: "loading data", status: "success" });
}
