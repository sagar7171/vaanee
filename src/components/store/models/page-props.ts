import { RefObject } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface selectOptionProps {
	options: { label: string; value: string | number }[];
	register: UseFormRegister<any>;
	name: string;
	errorMsg?: string;
	className?: string;
	placeholder?: string;
	defaultValue?: string;
	// onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	// onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	[x: string]: any;
}

export interface ScrollToTopProps {
	children: React.ReactNode;
}

export type ColsType = {
	renderHeadTitle?: () => React.ReactNode;
	title?: string;
	thClassName?: string;
	tdClassName?: string;
	thId?: string;
	render?: (rowData?: object, index?: number) => React.ReactNode;
	renderTdForAction?: (
		rowData?: object,
		key?: number,
		index?: number,
	) => React.ReactNode;
	thStyle?: { [x: string]: string | number };
	onClick?: () => void;
	extraContent?: React.ReactNode;
	draggable?: boolean;
	onDragStart?: (e: React.DragEvent<HTMLSpanElement>, index: number) => void;
	onDragOver?: (e: React.DragEvent<HTMLSpanElement>) => void;
	onDrop?: (e: React.DragEvent<HTMLSpanElement>, index: number) => void;
};

export interface GlobalTableProps {
	cols: ColsType[];
	data: { [x: string]: any }[]|null;
	tableClassName?: string;
	trClassName?: string;
	headStyle?: object;
	emptyPlaceholder?: string;
	tableRef?: RefObject<HTMLTableElement>;
	tableStyle?: { [x: string]: string | number };
	loadingMsg?: string;
	rowId?: number;
	colorScheme?:string
	variant?:string
}
