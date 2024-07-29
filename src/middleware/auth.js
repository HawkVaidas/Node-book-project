
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: "auth failed"});
    }
    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedInfo) {
        return res.status(401).json({message: "Auth failed"});
    }
    req.body.userId = decodedInfo.userId;
    next();
};

export default auth;