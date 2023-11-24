import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';

// Import Plyr CSS here
import 'plyr/dist/plyr.css';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import Dash.js
      import('dashjs').then((dashjsModule) => {
        const dash = dashjsModule.MediaPlayer().create();
        const video = videoRef.current;

        // Initialize Dash.js
        if (video) {
          dash.initialize(video, url, true);
        }

        // Initialize Plyr with captions
        if (video) {
          const player = new Plyr(video, {
            captions: { active: true, update: true },
          });

          // Expose player and dash so they can be used from the console
          (window as any).player = player;
          (window as any).dash = dash;
        }
      });
    }
  }, [url]);

  return (
    <div className="container">
      <video
        ref={videoRef}
        controls
        crossOrigin="anonymous"
        playsInline
        // poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"
      ></video>
    </div>
  );
};

export default VideoPlayer;
