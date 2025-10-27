export const createBooking = async (req, res) => {
    let { roomId, firstName, lastName, email } = req.body
    console.log(roomId, firstName, lastName, email)
    res.json({
        status: "success",
        booking: {
            roomId,
            firstName,
            lastName,
            email
        }
    })
}