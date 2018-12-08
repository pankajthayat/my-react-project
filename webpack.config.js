const path=require("path");

//console.log(path.join(__dirname,"public"))

module.exports={
    mode:"development",
entry:"./src/app.js",
output:{
    path:path.join(__dirname,"public"),
    filename:"bundle.js"
},
module: {
    rules:[{
        loader:'babel-loader',
        test:/\.js$/,
        exclude:/node.modules/
    },{
        //test:/\.css$/,//whenever webpack encounter css file
       test:/\.s?css$/,//? here makes s option.. now it can read both scss and css...when using only scss.. files like normalize.css could not be read..so it was showing error..
        use:[
            'style-loader',// dumb that into dom
            'css-loader',//its gonna read that
        //usegonna provide us a array of loader
      'sass-loader'// behind the scene the sass loader gonna use node sass to conver the file intto....
    ]
    }
]
},
devtool:"cheap-module-eval-source-map",
devServer:{
    contentBase: path.join(__dirname,"public"),
    historyApiFallback:true// without it browser will try to use server side routing.. by setting is true for all the routes index.html will be sent back and react routr\er will decde which one to use and client side 
//first call will always go to server


/*
after setting it true we are gonna 404 the dev-server will se that and since we the property true it will return index.html and
index.html gonna load the bundle.js which it does for evry page
now the react router will determine....
*/
}
};