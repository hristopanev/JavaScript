const offertController = function(){

    const getCreateOffert = function (context){

        const loggedIn = storage.getData('userInfo') !== null;
        
        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: './views/common/header.hbs',
            footer:'./views/common/footer.hbs'
        }).then(function() {
            this.partial('./views/offerts/createOffert.hbs')
        })
    }

    const postCreateOffert = function(context){
        
        offertModel.createOffert(context.params)
        .then(helper.handler)
        .then(() => {
            homeController.getHome(context);
        })
    }



    return{
        getCreateOffert,
        postCreateOffert
    }
}();