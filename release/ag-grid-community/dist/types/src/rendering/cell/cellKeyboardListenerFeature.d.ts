import { BeanStub } from '../../context/beanStub';
import type { BeanCollection } from '../../context/context';
import type { RowNode } from '../../entities/rowNode';
import type { RowCtrl } from '../row/rowCtrl';
import type { CellCtrl } from './cellCtrl';
export declare class CellKeyboardListenerFeature extends BeanStub {
    private readonly cellCtrl;
    private readonly rowNode;
    private readonly rowCtrl;
    private eGui;
    constructor(cellCtrl: CellCtrl, beans: BeanCollection, rowNode: RowNode, rowCtrl: RowCtrl);
    setComp(eGui: HTMLElement): void;
    onKeyDown(event: KeyboardEvent): void;
    private onNavigationKeyDown;
    private onShiftRangeSelect;
    private onTabKeyDown;
    private onBackspaceOrDeleteKeyDown;
    private onEnterKeyDown;
    private onF2KeyDown;
    private onEscapeKeyDown;
    processCharacter(event: KeyboardEvent): void;
    private onSpaceKeyDown;
    destroy(): void;
}
