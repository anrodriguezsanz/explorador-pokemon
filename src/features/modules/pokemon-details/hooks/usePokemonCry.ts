import { useState, useRef, useEffect } from "react";
import { message } from "antd";
import constants from "../constants/constants.detail";


export const usePokemonCry = (pokemonId: number) => {
        const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Handle state and show error message to user
    const handleError = () => {
        setIsPlaying(false);
        message.error(constants.ERROR_PLAYING_CRY);
    };

    // Play the pokemon cry
    const playCry = async () => {
        try {
            const audio = new Audio(`${constants.CRY_URL}${pokemonId}.ogg`);
            audioRef.current = audio;
            
            audio.onended = () => setIsPlaying(false);
                        
            await audio.play();
            setIsPlaying(true);
        } catch (error) {
            console.error(constants.ERROR_PLAYING_CRY, error);
            handleError();
        }
    };

    // Cleanup the audio ref when component unmounts
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return {
        isPlaying,
        playCry,
    };
}