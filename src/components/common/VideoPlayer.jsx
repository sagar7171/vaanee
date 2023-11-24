import React from 'react';
import videojs from 'video.js';

import _ from 'videojs-contrib-quality-levels';
import 'video.js/dist/video-js.css';
import '@samueleastdev/videojs-dash-hls-bitrate-switcher';
import '@samueleastdev/videojs-settings-menu';
import '@samueleastdev/videojs-settings-menu/dist/videojs-settings-menu.css';
import { videoPlayerOptions } from '../../utils/helper';

const VideoJS = (props) => {
	const videoRef = React.useRef(null);
	const playerRef = React.useRef(null);
	const { sources, onReady, ...rest } = props;
	// const [state, setState] = React.useState({
	// 	options: videoPlayerOptions,
	// });
	// const { options } = state;
	// React.useEffect(() => {
	// 	setState((prev) => ({
	// 		...prev,
	// 		options: {
	// 			...prev.options,
	// 			sources,
	// 			// ...(otherOption && { ...otherOption }),
	// 			...rest,
	// 		},
	// 	}));
	// }, [sources]);

	React.useEffect(() => {
		// Make sure Video.js player is only initialized once
		if (!playerRef.current) {
			// The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
			const videoElement = document.createElement('video-js');

			videoElement.classList.add('vjs-big-play-centered');
			// videoElement.setAttribute('id', 'player');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(
				videoElement,
				{...videoPlayerOptions,sources,...rest},
				() => {
					videojs.log('player is ready');
					onReady && onReady(player);
				},
			));
			// player.qualityLevels();

			// You could update an existing player in the `else` block here
			// on prop change, for example:
		} else {
			const player = playerRef.current;

			player.autoplay(options.autoplay);
			player.src(options.sources);
		}
	}, [ videoRef]);

	// Dispose the Video.js player when the functional component unmounts
	React.useEffect(() => {
		const player = playerRef.current;
		if (player) {
			// player.hlsQualitySelector({ displayCurrentQuality: false });
			// player.ytStyle();
			player.settingsMenu();
			player.ready(() => {
				// Add keydown event listener to the document
				document.addEventListener('keydown', (event) => {
					// Check if the key pressed is the "Enter" key (keyCode 13)
					if (event.keyCode === 13 && player) {
						// Toggle play/pause when "Enter" key is pressed
						if (player.paused()) {
							player.play();
						} else {
							player.pause();
						}
					}

					// Check if the key pressed is the left arrow key (keyCode 37)
					if (event.keyCode === 37&& player) {
						// Skip backward by 10 seconds when left arrow key is pressed
						const currentTime = player.currentTime();
						player.currentTime(currentTime - 10); // Adjust the time as needed
					}

					// Check if the key pressed is the right arrow key (keyCode 39)
					if (event.keyCode === 39 && player) {
						// Skip forward by 10 seconds when right arrow key is pressed
						const currentTime = player.currentTime();
						player.currentTime(currentTime + 10); // Adjust the time as needed
					}
				});
			});

			// const overlayButtons = document.getElementById('overlay-buttons');
			// const skipBackwardButton = document.getElementById(
			// 	'skip-backward-button',
			// );
			// const playButtonOverlay = document.getElementById('play-button');
			// const pauseButton = document.getElementById('pause-button');
			// const skipForwardButton = document.getElementById(
			// 	'skip-forward-button',
			// );

			// // Show overlay buttons when the video is playing and the mouse enters the player
			// player.on('play', () => {
			// 	overlayButtons.classList.remove('hidden');

			// 	player.on('mouseenter', () => {
			// 		overlayButtons.classList.remove('hidden');
			// 	});

			// 	player.on('mouseleave', () => {
			// 		overlayButtons.classList.add('hidden');
			// 	});
			// });

			// // Hide overlay buttons when the video is paused or ended
			// player.on(['pause', 'ended'], () => {
			// 	overlayButtons.classList.add('hidden');
			// });

			// // Add click event listeners to the image buttons
			// skipBackwardButton.addEventListener('click', () => {
			// 	// Add logic to skip backward in the video
			// 	player.currentTime(player.currentTime() - 10); // Adjust the time as needed
			// });

			// playButtonOverlay.addEventListener('click', () => {
			// 	player.play();
			// 	playButtonOverlay.style.display = 'none';
			// 	playButtonOverlay.style.display = 'block';
			// });

			// pauseButton.addEventListener('click', () => {
			// 	player.pause();
			// 	pauseButton.style.display = 'none';
			// 	playButton.style.display = 'block';
			// });

			// skipForwardButton.addEventListener('click', () => {
			// 	// Add logic to skip forward in the video
			// 	player.currentTime(player.currentTime() + 10); // Adjust the time as needed
			// });

			// // Initially, hide the pause button
			// pauseButton.style.display = 'none';

			// // Create a custom loop button with an image
			// const loopButton = document.createElement('button');
			// loopButton.className =
			// 	'vjs-custom-loop-button vjs-control vjs-button';
			// loopButton.innerHTML =
			// 	'<img src="/images/svg/loop.png" alt="Loop"  width="25" height="25" title="Loop"/>';

			// // Add click event listener to loop button
			// loopButton.addEventListener('click', () => {
			// 	// Toggle the loop state of the video
			// 	player.loop(!player.loop());

			// 	// Add or remove the loop-selected class based on the loop state
			// 	if (player.loop()) {
			// 		loopButton.classList.add('loop-selected');
			// 		loopButton.classList.remove('loop-deselected');
			// 	} else {
			// 		loopButton.classList.remove('loop-selected');
			// 		loopButton.classList.add('loop-deselected');
			// 	}
			// });

			// // Create a custom replay button with an image
			// const replayButton = document.createElement('button');
			// replayButton.className =
			// 	'vjs-custom-replay-button vjs-control vjs-button';
			// replayButton.innerHTML =
			// 	'<img src="images/svg/replay-btn.png" alt="" title="Replay" width="25" height="25" />';

			// // Add click event listener to replay button
			// replayButton.addEventListener('click', () => {
			// 	player.currentTime(0); // Restart the video by seeking to the beginning
			// 	player.play();
			// });

			// // Create custom seek buttons
			// const customBackButton = document.createElement('button');
			// customBackButton.className =
			// 	'vjs-control vjs-seek-button custom-back-button';
			// customBackButton.innerHTML = `<img src="/images/svg/backward-skip.png" alt="" width="25" height="25" title="skip backward 10 sec">`;
			// customBackButton.addEventListener('click', () => {
			// 	// Skip the video backward when the custom back button is clicked
			// 	const seekTime = player.currentTime() - 10; // Adjust the time as needed
			// 	player.currentTime(seekTime);
			// });

			// const customForwardButton = document.createElement('button');
			// customForwardButton.className =
			// 	'vjs-control vjs-seek-button custom-forward-button';
			// customForwardButton.innerHTML = `<img src="/images/svg/forward-skip.png" alt="" width="25" height="25" title="skip forward 10 sec">`;
			// customForwardButton.addEventListener('click', () => {
			// 	// Skip the video forward when the custom forward button is clicked
			// 	const seekTime = player.currentTime() + 10; // Adjust the time as needed
			// 	player.currentTime(seekTime);
			// });

			// Append custom buttons to the control bar after the play button
			const playButton = player.controlBar.getChild('PlayToggle');
			// if (playButton) {
			// 	player.controlBar
			// 		.el()
			// 		.insertBefore(loopButton, playButton.el().nextSibling);
			// 	player.controlBar
			// 		.el()
			// 		.insertBefore(replayButton, playButton.el().nextSibling);
			// 	playButton
			// 		.el()
			// 		.insertAdjacentElement('afterend', customBackButton);
			// 	customBackButton.insertAdjacentElement(
			// 		'afterend',
			// 		customForwardButton,
			// 	);
			// }

			// // Add a custom button after the play button
			//code for adding logo
			if (playButton) {
				const customButton = document.createElement('button');
				customButton.className = 'custom-button vjs-control'; // You can customize the button's class
				const customButtonImage = document.createElement('img');
				customButtonImage.src = '/images/svg/vlippr-logo.png'; // Customize the image source
				customButtonImage.alt = '';
				customButton.appendChild(customButtonImage);
				player.controlBar.el().appendChild(customButton);
				// playButton.el().insertAdjacentElement('afterend', customButton);

				// Add a click event listener to the custom button
				customButton.addEventListener('click', () => {
					window.open('https://vlippr.com/', '_blank');
				});
			}
		}
		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<>
			<div data-vjs-player>
				<div ref={videoRef} />
			</div>
			{/* overlay code is commented */}
			{/* <div
				id='overlay-buttons'
				class='hidden'>
				<img
					id='skip-backward-button'
					src='/images/svg/backward-skip.png'
					alt=''
				/>
				<img
					id='play-button'
					src='images/svg/PlayBtnIcon.png'
					alt=''
				/>
				<img
					id='pause-button'
					src='images/images/pauseAudio.png'
					alt=''
				/>
				<img
					id='skip-forward-button'
					src='/images/svg/forward-skip.png'
					alt=''
				/>
			</div> */}
		</>
	);
};

export default VideoJS;
