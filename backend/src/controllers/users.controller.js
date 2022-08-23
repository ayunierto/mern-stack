const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json([])

userCtrl.storeUser = (req, res) => res.json({ message: 'User Created' })

userCtrl.deleteUser = (req, res) => res.json({ message: 'User Deleted' })

module.exports = userCtrl;