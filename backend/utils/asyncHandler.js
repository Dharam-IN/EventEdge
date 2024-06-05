// export const asyncHandler = (fn) => {
//     (req, res, next) => {
//         Promise.resolve(fn(req, res, next)).catch((err) => next(err))
//     }
// }


export const asyncHandler = (asyncFun) => async(req, res, next) => {
    try {
        asyncFun(req, res, next)
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}