exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create: This is Sub Admin Controller"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read: This is Sub Admin Controller"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete: This is Sub Admin Controller"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update: This is Sub Admin Controller"})
};