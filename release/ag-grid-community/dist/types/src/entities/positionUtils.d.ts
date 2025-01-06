import type { BeanCollection } from '../context/context';
import type { CellPosition } from '../interfaces/iCellPosition';
import type { RowPosition } from '../interfaces/iRowPosition';
import type { CellCtrl } from '../rendering/cell/cellCtrl';
import type { RowNode } from './rowNode';
export declare function _createCellId(cellPosition: CellPosition): string;
export declare function _areCellsEqual(cellA: CellPosition, cellB: CellPosition): boolean;
export declare function _isRowBefore(rowA: RowPosition, rowB: RowPosition): boolean;
export declare function _isSameRow(rowA: RowPosition | undefined, rowB: RowPosition | undefined): boolean;
export declare function _getFirstRow(beans: BeanCollection): RowPosition | null;
export declare function _getLastRow(beans: BeanCollection): RowPosition | null;
export declare function _getRowNode(beans: BeanCollection, gridRow: RowPosition): RowNode | undefined;
export declare function _getCellByPosition(beans: BeanCollection, cellPosition: CellPosition): CellCtrl | null;
