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