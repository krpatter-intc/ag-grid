import type { BeanStub } from '../../../context/beanStub';
import type { AgColumn } from '../../../entities/agColumn';
import { AbstractHeaderCellCtrl } from '../abstractCell/abstractHeaderCellCtrl';
import type { IHeaderFilterCellComp } from './iHeaderFilterCellComp';
export declare class HeaderFilterCellCtrl extends AbstractHeaderCellCtrl<IHeaderFilterCellComp, AgColumn> {
    private eButtonShowMainFilter;
    private eFloatingFilterBody;
    private suppressFilterButton;
    private highlightFilterButtonWhenActive;
    private active;
    private iconCreated;
    private userCompDetails?;
    private destroySyncListener;
    private destroyFilterChangedListener;
    setComp(comp: IHeaderFilterCellComp, eGui: HTMLElement, eButtonShowMainFilter: HTMLElement, eFloatingFilterBody: HTMLElement, compBeanInput: BeanStub | undefined): void;
    protected resizeHeader(): void;
    protected moveHeader(): void;
    private setupActive;
    private setupUi;
    private setupFocus;
    private setupAria;
    private onTabKeyDown;
    private findNextColumnWithFloatingFilter;
    protected handleKeyDown(e: KeyboardEvent): void;
    private onFocusIn;
    private setupHover;
    private setupLeft;
    private setupFilterButton;
    private setupUserComp;
    private setCompDetails;
    private showParentFilter;
    private setupSyncWithFilter;
    private setupWidth;
    private setupFilterChangedListener;
    private updateFilterButton;
    private onColDefChanged;
    private updateCompDetails;
    private updateFloatingFilterParams;
    protected addResizeAndMoveKeyboardListeners(): void;
    destroy(): void;
}
