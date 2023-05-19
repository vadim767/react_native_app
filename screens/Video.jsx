import React from 'react';
import { View } from 'react-native';
import VideoPlayer from "../components/VideoPlayer";

export const VideoScreen = () => {
    const videoSource = 'https://live-k2304-kbp.1plus1.video/live/1685070240/4xZ9ZkHfGs97HYCRcEXcLQ/184723/smil:184723.smil/chunklist_b4628000.m3u8';

    return (
        <View>
            <VideoPlayer videoSource={videoSource} />
        </View>
    );
};