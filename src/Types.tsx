export interface GameContextType {
    hasGameStarted: boolean;
    setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
    hasUserLost: boolean;
    setHasUserLost: React.Dispatch<React.SetStateAction<boolean>>;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    isButtonVisible: boolean;
    setIsButtonVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Album {
    release_date: string;
}

export interface Track {
    album: Album;
    id: string;
    name: string;
    preview_url: string;
}

export interface Song {
    track: Track;
}