Vue.createApp({
    data(){
        return {
            computerMove: 0,
            player: '',
            computer: '',
            // move: 0,
            wins: 0,
            losses: 0,
            ties: 0,
            gameResult: '',
            userMoves: [],
            moveMapping: ['','Rock','Scissor','Paper']
        }
    },


    methods: {
        decideComputerMove() {
            console.log(this.userMoves)
            // get the last 20 moves of the user
            // check the amount of each choice 

            //console.log( amount of rock moves)
            //console.log( amount of scissor moves)
            //console.log( amount of paper moves)
            let start = this.userMoves.length - 20
            if ( start < 0){
                start = 0
            }
            
            let movesAmount = [null, 0,0,0]
            for (let i = start; i < this.userMoves.length; i++) {
                movesAmount[this.userMoves[i]] ++
            }
            console.log(movesAmount[1], "Rocks")
            console.log(movesAmount[2], "Scissors")
            console.log(movesAmount[3], "Papers")


            this.computerMove = parseInt(Math.random() * 3) + 1
        },
        gameCheck(move){
            this.userMoves.push(move)
            this.move = move
            this.decideComputerMove()
            
            this.player = this.moveMapping[this.move]
            this.computer = this.moveMapping[this.computerMove]

            if ( this.move + 1 == this.computerMove ) {
                this.wins++
                this.gameResult = 'you win'
            } else if ( this.computerMove + 1 == this.move ) {
                this.losses++
                this.gameResult = 'you lose'
            } else if ( this.move == 3 && this.computerMove ==  1 ){
                this.wins++
                this.gameResult = 'you win'
            } else if ( this.computerMove == 3 && this.move == 1 ) {
                this.losses++
                this.gameResult = 'you lose'
            } else if ( this.computerMove == this.move ){
                this.ties++
                this.gameResult = 'draw'
            }

        }
    },
}).mount(".container");