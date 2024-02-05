import { Router, Request, Response } from "express";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
    console.log("hello register")
});

export default router;
