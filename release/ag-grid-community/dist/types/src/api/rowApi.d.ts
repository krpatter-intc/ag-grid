import type { BeanCollection } from '../context/context';
import type { RenderedRowEvent } from '../interfaces/iCallbackParams';
import type { RedrawRowsParams } from '../interfaces/iRedrawRowsParams';
import type { IRowNode } from '../interfaces/iRowNode';
export declare function redrawRows<TData = any>(beans: BeanCollection, params?: RedrawRowsParams<TData>): void;
export declare function setRowNodeExpanded(beans: BeanCollection, rowNode: IRowNode, expanded: boolean, expandParents?: boolean, forceSync?: boolean): void;
export declare function getRowNode<TData = any>(beans: BeanCollection, id: string): IRowNode<TData> | undefined;
export declare function addRenderedRowListener(beans: BeanCollection, eventName: RenderedRowEvent, rowIndex: number, callback: (...args: any[]) => any): void;
export declare function getRenderedNodes<TData = any>(beans: BeanCollection): IRowNode<TData>[];
export declare function forEachNode<TData = any>(beans: BeanCollection, callback: (rowNode: IRowNode<TData>, index: number) => void, includeFooterNodes?: boolean): void;
export declare function getFirstDisplayedRowIndex(beans: BeanCollection): number;
export declare function getLastDisplayedRowIndex(beans: BeanCollection): number;
export declare function getDisplayedRowAtIndex<TData = any>(beans: BeanCollection, index: number): IRowNode<TData> | undefined;
export declare function getDisplayedRowCount(beans: BeanCollection): number;
