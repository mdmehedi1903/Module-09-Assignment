exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create: This is User Controller"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read: This is User Controller"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete: This is User Controller"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update: This is User Controller"})
};