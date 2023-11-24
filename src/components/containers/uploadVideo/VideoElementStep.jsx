import React, { useEffect, useState } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { handleCurrentStep } from '../../store/actions/uploadVideoModalActions';
import { useDispatch } from 'react-redux';
import ProgressBar from '../../forms/ProgressBar';
function VideoElementStep() {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		progressList: [
			{
				label: 'Video Element',
				bg: '#2BB0B9',
				value: 0,
			},
			{
				label: 'Video Element',
				bg: '#20AEF1',
				value: 0,
			},
			{
				label: 'Video Element',
				bg: '#DCFDFF',
				value: 0,
			},
		],
		currentIndex: 0,
	});
	const { progressList, currentIndex } = state;
	let id;
	useEffect(() => {
		if (currentIndex <= progressList.length) {
			// eslint-disable-next-line
			id = setInterval(() => {
				setState((prev) => ({
					...prev,
					progressList: prev.progressList.map((item, index) =>
						index === currentIndex
							? { ...item, value: item.value + 10 }
							: item,
					),
				}));
			}, 2000);
			if (currentIndex === progressList.length) {
				while (id) {
					window.clearInterval(id);
					id--;
				}
			}
		}
		// eslint-disable-next-line
	}, [currentIndex]);
	useEffect(() => {
		progressList[currentIndex]?.value >= 100 &&
			setState((prev) => ({
				...prev,
				currentIndex: prev.currentIndex + 1,
			}));
			// eslint-disable-next-line
	}, [progressList]);
	return (
		<>
			<Stack
				spacing={'4rem'}
				w={'100%'}>
				{progressList.map((item, index) => {
					const { label, bg, value } = item;
					return (
						<React.Fragment key={index}>
							<ProgressBar
								label={label}
								labelAttr={{
									fontWeight: 600,
									fontSize: '.9rem',
									ml: '.2rem',
									color:"white"
								}}
								value={`${value}%`}
								progressBarAtt={{
									bg: bg,
									borderRadius: '1rem',
								}}
								containerAttr={{
									bg: '#2D2E2F',
									borderRadius: '1rem',
									height: '1.3rem',
									border: '.1rem solid #000',
								}}
							/>
						</React.Fragment>
					);
				})}
			</Stack>
			<Flex
				w='5%'
				justifyContent={'flex-end'}
				ml={'1rem'}
				alignItems={'flex-end'}>
				<ArrowForwardIcon
					cursor={'pointer'}
					color="white"
										_hover={{ color: "teal" }}
					onClick={() => dispatch(handleCurrentStep(4))}
					height={'2rem'}
					width={'2rem'}
				/>
			</Flex>
		</>
	);
}

export default VideoElementStep;
