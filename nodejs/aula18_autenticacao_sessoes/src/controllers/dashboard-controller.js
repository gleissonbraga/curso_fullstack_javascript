module.exports = {
    dashboard: (req, res) => {
        req.session.authenticated
        res.render('dashboard', { user: req.session.currentUser })
    },

    users: (req, res) => {
        res.render('users', {users})
    }
}