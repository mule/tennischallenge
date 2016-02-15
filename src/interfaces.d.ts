/**
 * Created by jukkapuranen on 01/02/16.
 */


interface  IPlayer{
    id: number;
    name: string;
}


interface  IGame{
    id: number;
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

interface IPlayerCard{
    visible: boolean;
    name: string;

}


interface IPlayerCards{
    challenger: IPlayerCard;
    defender: IPlayerCard;

}


