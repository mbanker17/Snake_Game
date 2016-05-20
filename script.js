

 			save this as script.js
//We are starting with a function to run the entire game...
(function() {
    //JavaScript checks for canvas
    var canvas = document.getElementById("canvas");
    //Set 2d rendering content
    var ctx = canvas.getContext("2d");
    //set variable for game width and height to canvas              //width and height
    var w = canvas.width;
    var h = canvas.height;
    //Lets save the cell width in a variable for easy control
    var cw = 20;
    //variable for direction....
    var d;
    //variable for food
    var food;
    //variable for score
    var score;
    
    //Lets create the snake now
    var snake_array; //an array of cells to make up the snake
    //section 8 made it here.... slackerssssssssssssss
    function init()
    {
        d = "right"; //default direction
        create_snake();
        create_food(); //Now we can see the food particle
        //finally lets display the score
        score = 0;
        
        //Lets move the snake now using a timer which will trigger the paint function
        //every 60ms
        if(typeof game_loop != "undefined") clearInterval(game_loop);
        game_loop = setInterval(paint, 80);
    }
    init();
    
    function create_snake()
    {
        var length = 6; //Length of the snake
        snake_array = []; //Empty array to start with
        for(var i = length-1; i>=0; i--)
        {
            //This will create a horizontal snake starting from the top left
            snake_array.push({x: i, y:0});
        }
    }
    
    //Lets create the food now
    function create_food()
    {
        food = {
            x: Math.round(Math.random()*(w-cw)/cw), 
            y: Math.round(Math.random()*(h-cw)/cw), 
        };
        //This will create a cell with x/y between 0-40
        //Because there are 40(400/10) positions accross the rows and columns
        //Section 6 stopped here......
    }
    
    //Lets paint  the canvas now
    function paint()
    {
        //To avoid the snake trail we need to paint the BG on every frame
        //Lets paint the canvas now
        ctx.fillStyle = "pink";
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "red";
        ctx.strokeRect(0, 0, w, h);
        
        //The movement code for the snake to be placed 
        //The logic is simple
        //Pop out the tail cell and place it infront of the head cell
        var nx = snake_array[0].x;
        var ny = snake_array[0].y;
 
 
