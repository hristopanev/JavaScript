
const app = Sammy("#rootsElement", function () {

    this.use('Handlebars', 'hbs');
    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);

    // Offert
    this.get('#/createOffert', offertController.getCreateOffert);
    this.post('#/createOffert', offertController.postCreateOffert);
    
});

(() => {
    app.run('#/home');
})();