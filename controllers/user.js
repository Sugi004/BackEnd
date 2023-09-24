const data = [];
const getusers = async (req, res) => {
  try {
    res.send({
      data: data,
      message: "User data fetch successful"
    });
  } catch (error) {
    console.log(error);
  }
};

const createUsers = async (req, res) => {
  try {
    let validateData = data.filter((e) => e.email === req.body.email);
    if (validateData.length === 0) {
      data.push(req.body);
      res.status(200).send({
        message: "User created successfuly"
      });
    } else {
      res.status(400).send({
        message: `${req.body.email} already exists`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      errorMessage: error.message
    });
  }
};

const editUsers = async (req, res) => {
  try {
    let userId = Number(req.params.id);
    if (userId < data.length) {
      data.splice(userId, 1, req.body);
      res.status(200).send({
        message: data[userId]
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      errorMessage: error.message
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    let userId = Number(req.params.id);
    if (userId) {
      data.shift(userId);
      res.status(200).send({
        message: "User deleted Successfully"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      errorMessage: error.message
    });
  }
};

module.exports = { getusers, createUsers, editUsers, deleteUserById };
