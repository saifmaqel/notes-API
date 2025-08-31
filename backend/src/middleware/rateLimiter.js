import rateLimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("[user_id]");
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    console.log("Ratelimit Error", error);
    next(error);
  }
};

export default rateLimiter;
