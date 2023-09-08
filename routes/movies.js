import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        "success": "true",
        "msg": "hello",
    });
});

export default router;