import type { IMenuItemComp, IMenuItemParams } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
interface AgMenuItemRendererParams {
    cssClassPrefix?: string;
    isCompact?: boolean;
}
export declare class AgMenuItemRenderer extends Component implements IMenuItemComp {
    private params;
    private cssClassPrefix;
    constructor();
    init(params: IMenuItemParams & AgMenuItemRendererParams): void;
    configureDefaults(): boolean;
    private addAriaAttributes;
    private addIcon;
    private addName;
    private addShortcut;
    private addSubMenu;
    private getClassName;
}
export {};
