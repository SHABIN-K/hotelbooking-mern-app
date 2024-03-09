import { Router, Request, Response } from "express";
import multer from "multer";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post("/", async (req: Request, res: Response) => {});

export default router;
