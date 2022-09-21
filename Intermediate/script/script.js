
/* ----------------------Array Sorting Exercise 1---------------------*/

        let cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari']
    
        //Array Sorting Exercise 1

        // console.table(cars)
        console.log(cars.sort())
        document.write(`${cars} <hr>`)
        // console.table(cars)

/* ----------------------Array Sorting Exercise 2---------------------*/

        let fruits = ['apple', 'banana', 'kiwi']
        let animals = ['monkey', 'horse', 'dog']
       

        //Array Using Push Method and output first line
        
        // console.table(fruits)
        fruits.push('orange')
        // console.table(fruits)

        //Removing 4th Element and output the second line
        
        document.write(`${fruits} <br>`)

        fruits.splice(3,1,)
        document.write(`${fruits} <hr>`)


        //Array Using Splice Method

        // console.table(animals)
        animals.sort()
        document.write(`${animals} <br>`)
        animals.splice(3,0,"cat")
        document.write(`${animals} <hr>`)
        
/* ----------------------Array Sorting Exercise 3---------------------*/

        let fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
        let temp = new Array();

        //Remove '/' with split method
        temp = fruit.split('/');

        //Replace ',' with '<br>' with join method
        document.write(`${temp.join("<br><br>")}`)


            /* ---------------------END---------------------*/
