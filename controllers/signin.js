const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('invalid credentials')
  }

  db.select('email', 'hash').from('login').where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db('users').where('email', email)
          .returning('*')
          .then(user => res.json(user[0]))
          .catch(err => res.status(400).json(err));
      } else {
        res.json("invalid user");
      }
    })
    .catch(err => res.status(400).json(err));
}

module.exports = {
  handleSignin: handleSignin
}