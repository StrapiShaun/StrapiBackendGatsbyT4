module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85500de3edb0c01fdf60fdd84b3318ee'),
  },
});
