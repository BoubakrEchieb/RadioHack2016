/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  '/emission/add': {
    controller: 'Emission',
    action : 'add'
  },
  '/emission/view': {
    controller: 'Emission',
    action : 'view'
  },
  '/emission/search': {
    controller: 'Emission',
    action : 'search'
  },
  '/emission/remove': {
    controller: 'Emission',
    action : 'remove'
  },
  '/emission/edit': {
    controller: 'Emission',
    action : 'edit'
  },
  '/categorie/add': {
    controller: 'Categorie',
    action : 'add'
  },
  '/categorie/view': {
    controller: 'Categorie',
    action : 'view'
  },
  '/categorie/search': {
    controller: 'Categorie',
    action : 'search'
  },
  '/categorie/remove': {
    controller: 'Categorie',
    action : 'remove'
  },
  '/categorie/edit': {
    controller: 'Categorie',
    action : 'edit'
  },
  '/programme/add': {
    controller: 'Programme',
    action : 'add'
  },
  '/programme/view': {
    controller: 'Programme',
    action : 'view'
  },
  '/programme/search': {
    controller: 'Programme',
    action : 'search'
  },
  '/programme/remove': {
    controller: 'Programme',
    action : 'remove'
  },
  '/programme/edit': {
    controller: 'Programme',
    action : 'edit'
  },
  '/programme/addCommentaire': {
    controller: 'Programme',
    action : 'addCommentaire'
  },
  '/programme/addFavorite': {
    controller: 'Programme',
    action : 'addFavorite'
  },



  '/interruption/add': {
    controller: 'Interruption',
    action : 'add'
  },
  '/interruption/view': {
    controller: 'Interruption',
    action : 'view'
  },
  '/interruption/search': {
    controller: 'Interruption',
    action : 'search'
  },
  '/interruption/remove': {
    controller: 'Interruption',
    action : 'remove'
  },
  '/interruption/edit': {
    controller: 'Interruption',
    action : 'edit'
  },
  '/interruption/addCommentaire': {
    controller: 'Interruption',
    action : 'addCommentaire'
  },
  '/interruption/addFavorite': {
    controller: 'Interruption',
    action : 'addFavorite'
  },


  '/user/getUser': {
    controller: 'User',
    action : 'getUser'
  },
  '/user/login': {
    controller: 'User',
    action : 'login'
  },
  '/user/view': {
    controller: 'User',
    action : 'view'
  },
  '/dhaya3t/remove': {//
    controller: 'Dhaya3t',
    action : 'remove'
  },
  '/dhaya3t/search': {
    controller: 'Dhaya3t',
    action : 'search'
  },
  '/dhaya3t/view': {
    controller: 'Dhaya3t',
    action : 'view'
  },
  '/dhaya3t/addCommentaire': {
    controller: 'Dhaya3t',
    action : 'addCommentaire'
  },
  '/dhaya3t/add': {
    controller: 'Dhaya3t',
    action : 'add'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
