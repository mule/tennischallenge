/**
 * Created by jukkapuranen on 01/02/16.
 */


interface  IPlayer{
    id: string;
    name: string;
}


interface  IGame{
    id: string;
    date: number;
    gameType: number;
    challenger: IPlayer;
    defender: IPlayer;
    challengerPoints: number;
    defenderPoints: number;

}

interface IGameProps {
    game: IGame;
}

interface IGameListProps{
    games: IGame[];
}