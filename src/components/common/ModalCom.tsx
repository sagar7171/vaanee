import React, { ReactNode } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	Spacer,
	BackgroundProps,
} from '@chakra-ui/react';

function ModalComp({
	isOpen,
	onClose,
	modalTitle,
	modalBody,
	modalFooter,
	modalConBackground,
	size,
	isCentered,
	autoFocus,
	modalBtnColor
}: {
	isOpen: boolean;
	onClose: () => void;
	modalTitle?: string;
	modalBody: ReactNode;
	modalFooter?: ReactNode;
	modalConBackground?: BackgroundProps['background'];
	size: string;
	isCentered?: boolean;
	autoFocus?: boolean;
	modalBtnColor?:string
}) {
	return (
		<Modal
			isOpen={isOpen}
			size={size}
			isCentered={isCentered}
			autoFocus={autoFocus}
			onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				background={modalConBackground}
				borderRadius='.4rem'
				border={'1px solid #303030'}
				p='.5rem'>
				<Flex flexDirection={'row'}>
					{modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
					<Spacer />
					<ModalCloseButton color={modalBtnColor||'white'} />
				</Flex>

				<ModalBody>{modalBody}</ModalBody>

				{modalFooter && <ModalFooter>{modalFooter}</ModalFooter>}
			</ModalContent>
		</Modal>
	);
}

export default ModalComp;
