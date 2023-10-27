import {useContext} from "react";
import {GameContext} from "../App";
import { BsSpotify } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';



export const Home = () => {
    const { setHasGameStarted } = useContext(GameContext);

    const handleStart = () => {
        setHasGameStarted((value: boolean) => !value);
    }

    return (
        <div className="flex h-screen flex-col items-center justify-start bg-black p-9 text-center text-white">
            <BsSpotify className="m-8 scale-100 transform text-9xl text-emerald-500 transition duration-200 hover:scale-105" />
            <h1 className="p-8 text-5xl font-bold">
                Higher or Lower
            </h1>
            <h1 className="p-2 text-3xl">
             Which song released first?
            </h1>
            <p className="p-6 text-xl">
                A simple game of higher or lower using Spotify&apos;s data (Andrei's HF Project btw)
            </p>
            <button
                type="button"
                className="m-5 w-full max-w-[10rem] transform cursor-pointer rounded-full outline bg-black py-2 text-lg font-bold transition duration-200 hover:scale-105 hover:bg-emerald-500"
                onClick={handleStart}
            >
                <div className="flex items-center justify-center">
                    Start &nbsp; <AiOutlineArrowRight />
                </div>
            </button>
        </div>
    );
}