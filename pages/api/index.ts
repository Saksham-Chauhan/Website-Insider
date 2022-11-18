import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { Storage } from "megajs";
import fs from "fs";
import path, { resolve } from "path";
import { getReview } from "./scrapper";

const INTERVAL_TIME = 24 * 60 * 60 * 60 * 1000;

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  if (req.method.toLowerCase() === "get") {
    const isMemorizesReviews = await readFromFile();
    if (req.headers.home) {
      if (isMemorizesReviews === null) startInterval();
    }
    if (isMemorizesReviews === null) {
      const reviewList = await getReview();
      writeInFile(reviewList);
      res.status(201).json(reviewList);
    } else res.status(201).json(isMemorizesReviews);
  } else {
    const multerUpload = multer({
      dest: "./public/uploads/",
      preservePath: true,
    });
    await runMiddleware(req, res, multerUpload.single("file"));
    const file = req.file;
    const handleRemove = (file: any) => {
      if (file?.path === undefined) return;
    };
    fs.readFile(file.path, async (err: NodeJS.ErrnoException, data: Buffer) => {
      if (err) {
        handleRemove(file);
        return res
          .status(404)
          .json({ msg: "Error during uploading file", result: null });
      }

      const storage = await new Storage({
        email: "sakshamchauhan79@gmail.com",
        password: "thisisnewpasS@1",
      }).ready;

      const link: any = await storage.upload(file.originalname, data).complete;
      const url = await link.link();
      handleRemove(file);
      res.status(201).json({
        msg: "Successfully uploaded file to Mega Storage",
        result: url,
      });
    });
  }
};

export default handler;

const writeInFile = (data) => {
  const filePath = path.join(__dirname, "reviews.json");
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) console.log("Error writing file:", err);
        resolve(true);
      });
    } catch (error) {
      resolve(false);
    }
  });
};

const readFromFile = () => {
  const filePath = path.join(__dirname, "reviews.json");
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath, "utf8", async (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return resolve(null);
        }
        if (jsonString) {
          const data = JSON.parse(jsonString);
          return resolve(data);
        } else resolve(null);
      });
    } catch (error) {
      resolve(null);
    }
  });
};

const startInterval = async () => {
  await writeInFile({ jhone: "doe" });
  const res: any = await readFromFile();
  if (res?.jhone) {
    setInterval(async () => {
      const reviewList = await getReview();
      if (reviewList) writeInFile(reviewList);
    }, 43200000);
  }
};
