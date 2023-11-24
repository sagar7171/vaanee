import React, { useState } from 'react';
import VideoJS from '@/components/common/VideoPlayer';

import {
	Flex,
	Box
} from '@chakra-ui/react';
const VideoConverter = () => {
	// const [outputText, setOutputText] = useState('');
	// const [downloadLink, setDownloadLink] = useState(null);

	// const convertVideo = async () => {
	// 	const ffmpeg = createFFmpeg({ log: true });
	// 	await ffmpeg.load();

		// Replace 'input.mp4' with the path to your local MP4 file
		// ffmpeg.FS('writeFile', 'input.mp4', await fetchFile('path/to/your/local/video.mp4'));
		// ffmpeg.FS('writeFile', 'hin.mp3', await fetchFile('/assets/hin.mp3'));
		// ffmpeg.FS('writeFile', 'test.mp4', await fetchFile('assets/test.mp4'));

		// // Convert MP4 to HLS
		// await ffmpeg.run(
		//   '-i', 'input.mp4',
		//   '-c:v', 'libx264',
		//   '-f', 'hls',
		//   '-hls_time', '10',
		//   '-hls_list_size', '0',
		//   'output.m3u8'
		// );

		// await ffmpeg.run(
		// 	'-i',
		// 	'hin.mp3',
		// 	'-codec:v',
		// 	'libx264',
		// 	'-codec:a',
		// 	'aac',
		// 	'-start_number',
		// 	'0',
		// 	'-hls_time',
		// 	'10',
		// 	'-hls_list_size',
		// 	'0',
		// 	'output.m3u8',
		// );

		// await ffmpeg.run(
		// 	'-i',
		// 	'test.mp4',
		// 	'-preset',
		// 	'slow',
		// 	'-g',
		// 	'48',
		// 	'-sc_threshold',
		// 	'0',
		// 	'-map',
		// 	'0:0',
		// 	'-map',
		// 	'0:1',
		// 	'-map',
		// 	'0:0',
		// 	'-map',
		// 	'0:1',
		// 	'-s:v:0',
		// 	'640x360',
		// 	'-c:v:0',
		// 	'libx264',
		// 	'-b:v:0',
		// 	'365k',
		// 	'-s:v:1',
		// 	'960x540',
		// 	'-c:v:1',
		// 	'libx264',
		// 	'-b:v:1',
		// 	'2000k',
		// 	'-c:a',
		// 	'copy',
		// 	'-var_stream_map',
		// 	'v:0,a:0 v:1,a:1',
		// 	'-master_pl_name',
		// 	'master.m3u8',
		// 	'-f',
		// 	'hls',
		// 	'-hls_time',
		// 	'6',
		// 	'-hls_list_size',
		// 	'0',
		// 	'-hls_segment_filename',
		// 	'"v%v/fileSequence%d.ts"',
		// 	'v%v/prog_index.m3u8',
		// );
		// ffmpeg -i sample.mp4 -i sample-vtt-en.vtt -i sample-vtt-es.vtt \
		// -map 0:v -map 0:a -map 0:a -map 1 -map 2 \
		// -c:v copy -c:a copy -c:s webvtt \
		// -metadata:s:s:0 language=en \
		// -metadata:s:s:1 language=es \
		// -start_number 0 -hls_time 10 -hls_list_size 0 -f hls \
		// -var_stream_map "v:0,name:video a:0,s:0,language:eng,name:english a:1,s:1,language:spa,name:espanol"
		// -master_pl_name master.m3u8 \
		// out/sample.m3u8
		// ffmpeg -i input.mp4 -i hindi.srt -i english.srt -map 0:v -map 0:a -map 0:a -map 1 -map 2 -c:v copy -c:a copy -c:s webvtt -metadata:s:s:0 language=en -metadata:s:s:1 language=es -start_number 0 -hls_time 10 -hls_list_size 0 -f hls -var_stream_map "v:0,name:video a:0,s:0,language:eng,name:hindi a:1,s:1,language:spa,name:english" -master_pl_name master.m3u8 "out_%v/sample.m3u8"

		// Create a ZIP archive
		// const zip = new JSZip();

		// // Capture and include .ts files
		// const tsFiles = ffmpeg
		// 	.FS('readdir', '/v0')
		// 	.filter((file) => file.endsWith('.ts'));
		// tsFiles.forEach((tsFile, index) => {
		// 	const tsData = ffmpeg.FS('readFile', tsFile);
		// 	zip.file(`/v0/output${index}.ts`, tsData);
		// });

		// const tsFilesm = ffmpeg
		// 	.FS('readdir', '/v0')
		// 	.filter((file) => file.endsWith('.m3u8'));
		// console.log({ tsFilesm, tsFiles });
		// tsFilesm.forEach((tsFile, index) => {
		// 	const tsData = ffmpeg.FS('readFile', tsFile);
		// 	zip.file(`/v0/output${index}.m3u8`, tsData);
		// });
		// const tsFilesm1 = ffmpeg
		// 	.FS('readdir', '/v1')
		// 	.filter((file) => file.endsWith('.m3u8'));
		// 	tsFilesm1.forEach((tsFile, index) => {
		// 	const tsData = ffmpeg.FS('readFile', tsFile);
		// 	zip.file(`/v1/output${index}.m3u8`, tsData);
		// });
		// const tsFiles2 = ffmpeg
		// 	.FS('readdir', '/v1')
		// 	.filter((file) => file.endsWith('.ts'));
		// 	tsFiles2.forEach((tsFile, index) => {
		// 	const tsData = ffmpeg.FS('readFile', tsFile);
		// 	zip.file(`/v1/output${index}.ts`, tsData);
		// });

	// 	// // Capture and include the .m3u8 file
	// 	const m3u8Data = ffmpeg.FS('readFile', 'master.m3u8');
	// 	zip.file('master.m3u8', m3u8Data);

	// 	// // Generate the ZIP file
	// 	const zipBlob = await zip.generateAsync({ type: 'blob' });
	// 	console.log({ zipBlob });
	// 	// Generate a data URL for downloading
	// 	const zipDataUrl = URL.createObjectURL(zipBlob);

	// 	setDownloadLink(zipDataUrl);
	// 	setOutputText(
	// 		'Video conversion complete! Click the link to download the ZIP archive.',
	// 	);
	// };

	return (
		<Flex  width={"100%"} height={"100%"} color="white" justifyContent={"center"} alignItems={"center"}
		p={0} m={0}
		>
			<VideoJS
								onReady={() => {}}

								sources={[
									{
										src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8',
										type: 'application/x-mpegURL',
									}
								]}
								height={350}
								width={800}
							/>
			
			
		</Flex>
	);
};

export default VideoConverter;
