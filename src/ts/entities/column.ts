/// <reference path="../constants.ts" />
/// <reference path="columnGroup.ts" />

module ag.grid {

    var constants = Constants;

    export class Column extends AbstractColumn {

        static colIdSequence = 0;

        private actualWidth: any;

        colDef: ColDef;
        visible: any;
        colId: any;
        pinned: boolean;
        index: number;
        aggFunc: string;
        pivotIndex: number;
        sort: string;
        sortedAt: number;

        constructor(colDef: ColDef, actualWidth: any) {
            super();
            this.colDef = colDef;
            this.abstractColDef = colDef;
            this.actualWidth = actualWidth;
            this.visible = !colDef.hide;
            this.sort = colDef.sort;
            this.sortedAt = colDef.sortedAt;
            this.pinned = colDef.pinned === true;
            // in the future, the colKey might be something other than the index
            if (colDef.colId) {
                this.colId = colDef.colId;
            } else if (colDef.field) {
                this.colId = colDef.field;
            } else {
                this.colId = '' + Column.colIdSequence++;
            }
        }

        public getActualWidth(): number {
            return this.actualWidth;
        }

        public setActualWidth(actualWidth: number): void {
            this.actualWidth = actualWidth;
        }

        public isGreaterThanMax(width: number): boolean {
            if (this.colDef.maxWidth >= constants.MIN_COL_WIDTH) {
                return width > this.colDef.maxWidth;
            } else {
                return false;
            }
        }

        public getMinimumWidth(): number {
            if (this.colDef.minWidth > constants.MIN_COL_WIDTH) {
                return this.colDef.minWidth;
            } else {
                return constants.MIN_COL_WIDTH;
            }
        }

        public setMinimum(): void {
            this.actualWidth = this.getMinimumWidth();
        }
    }

}