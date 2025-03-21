import jwt from 'jsonwebtoken'

export const verifyUser = (req, res, next) => {
   next();  // Allow all requests for now
};

export const verifyAdmin = (req, res, next) => {
   next();  // Allow all requests for now
};
