import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YouTubeTest(props) {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);




    return (
        <View>
            <YoutubePlayer
                height={210}
                play={playing}
                videoId={props.videoid}
            />
            {/* <Button title={playing ? "Pause Video" : "Play Video"} onPress={togglePlaying} /> */}
        </View>
    );
}