const Routes = require("../api-routes")

const RoutingMiddleware = (app) => {
    app.use('/api/users', Routes.UserRoutes)
    app.use('/api/auth', Routes.AuthRoutes)
    app.use('/api/entries', Routes.EntryRoutes)
    app.use('/api/tags', Routes.TagRoutes)
    app.use('/api/comments', Routes.CommentRoutes)
}
module.exports =RoutingMiddleware