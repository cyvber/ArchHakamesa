const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  if (username !== process.env.ADMIN_USERNAME)
    return res.status(401).json({ message: "Invalid username" });

  const valid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
  if (!valid)
    return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log("login successfull");
  res.json({ token });
};
