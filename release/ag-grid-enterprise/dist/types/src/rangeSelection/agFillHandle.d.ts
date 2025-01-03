import type { CellCtrl } from 'ag-grid-community';
import { AbstractSelectionHandle, SelectionHandleType } from './abstractSelectionHandle';
export declare class AgFillHandle extends AbstractSelectionHandle {
    private initialPosition;
    private initialXY;
    private lastCellMarked;
    private markedCells;
    private cellValues;
    private dragAxis;
    private isUp;
    private isLeft;
    private isReduce;
    protected type: SelectionHandleType;
    constructor();
    protected updateValuesOnMove(e: MouseEvent): void;
    protected onDrag(_: MouseEvent): void;
    protected onDragEnd(e: MouseEvent): void;
    protected onDragCancel(): void;
    private getFillHandleDirection;
    private handleValueChanged;
    private clearCellsInRange;
    private processValues;
    protected clearValues(): void;
    private clearMarkedPath;
    private clearCellValues;
    private markPathFrom;
    private extendVertical;
    private reduceVertical;
    private extendHorizontal;
    private reduceHorizontal;
    refresh(cellCtrl: CellCtrl): void;
}
