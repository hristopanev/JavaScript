const app = Sammy('#sammy-app', function () {
    this.use('Handlebars', 'hbs');


    const handleHome = () => {
        this.swap('<h2>Home Page</h2>');
    };
    const handleAbout =() => {
        this.swap('<h2>About Page</h2>');
    };
    this.get('#/contact', () => {
        this.swap('<h2>Contact Page</h2>');
    });

    const getLogin = () => {
        this.swap(`
            <form method ="POST" action="#/login">
                <label for="user-email">Email</label>
                <input type="email" id="user-email" name="email" />
                
                <label for="user-password">Email</label>
                <input type="password" id="user-password" name="password" />
            
                <button type="submit">Login</button>
            </form>
        `)
    };

    const handleLogin = ({ params }) => {
        const {email, password} = params;

        this.swap(`<div>You got hacked! Your email and password are: ${email} ${password}</div>`)
    };


    this.get('/', handleHome);
    this.get('#/about', handleAbout);
    this.get('#/books/:bookId', handleBook);
    this.get('#/login', getLogin);
    this.post('#/login', handleLogin);
});



$(() => {
    app.run();
});
