import type { AgColumn } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
import type { ColumnModelItem } from './columnModelItem';
export declare class ToolPanelColumnComp extends Component {
    private readonly allowDragging;
    private readonly groupsExist;
    private readonly focusWrapper;
    private readonly eLabel;
    private readonly cbSelect;
    readonly column: AgColumn;
    private readonly columnDept;
    private eDragHandle;
    private readonly displayName;
    private processingColumnStateChange;
    private tooltipFeature?;
    constructor(modelItem: ColumnModelItem, allowDragging: boolean, groupsExist: boolean, focusWrapper: HTMLElement);
    postConstruct(): void;
    getColumn(): AgColumn;
    private setupTooltip;
    private onContextMenu;
    protected handleKeyDown(e: KeyboardEvent): void;
    private onLabelClicked;
    private onCheckboxChanged;
    private onChangeCommon;
    private refreshAriaLabel;
    private setupDragging;
    private createDragItem;
    private onColumnStateChanged;
    getDisplayName(): string | null;
    onSelectAllChanged(value: boolean): void;
    isSelected(): boolean | undefined;
    isSelectable(): boolean;
    isExpandable(): boolean;
    setExpanded(_value: boolean): void;
}
