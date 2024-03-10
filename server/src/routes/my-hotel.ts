import { v2 } from "cloudinary";
import { Router, Request, Response } from "express";
import multer from "multer";
import { HotelType } from "../shared/types";
import Hotel from "../database/models/hotel";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ],
  upload.array("imageFlies", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFlies = req.files as Express.Multer.File[];
      const newHotel: HotelType = req.body;

      //1.upload the images to cloudinary
      const imageUrls = await uploadImages(imageFlies);

      //2.if upload was successful, add the urls to the new hotel
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      //3.save the new hotel in our database
      const hotel = new Hotel(newHotel);
      await hotel.save();

      //4.return a 201 status
      res.status(201).send(hotel);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default router;
