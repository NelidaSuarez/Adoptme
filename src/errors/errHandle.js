export const errorHandle = (err, req, res, next) =>{
    const status = err.status;
    const message = err.message;

    res.status (status).json({ status: "error", error: message });
};