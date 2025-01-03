import type { AgPickerFieldParams } from '../interfaces/agFieldParams';
import type { AgAbstractFieldEvent } from './agAbstractField';
import { AgAbstractField } from './agAbstractField';
import type { Component } from './component';
export type AgPickerFieldEvent = AgAbstractFieldEvent;
export declare abstract class AgPickerField<TValue, TConfig extends AgPickerFieldParams = AgPickerFieldParams, TEventType extends string = AgPickerFieldEvent, TComponent extends Component<TEventType | AgPickerFieldEvent> = Component<TEventType | AgPickerFieldEvent>> extends AgAbstractField<TValue, TConfig, TEventType | AgPickerFieldEvent> {
    protected abstract createPickerComponent(): TComponent;
    protected pickerComponent: TComponent | undefined;
    protected isPickerDisplayed: boolean;
    protected maxPickerHeight: string | undefined;
    protected variableWidth: boolean;
    protected minPickerWidth: string | undefined;
    protected maxPickerWidth: string | undefined;
    protected value: TValue;
    private skipClick;
    private pickerGap;
    private hideCurrentPicker;
    private destroyMouseWheelFunc;
    private ariaRole?;
    protected readonly eLabel: HTMLElement;
    protected readonly eWrapper: HTMLElement;
    protected readonly eDisplayField: HTMLElement;
    private readonly eIcon;
    constructor(config?: TConfig);
    postConstruct(): void;
    protected setupAria(): void;
    private onLabelOrWrapperMouseDown;
    protected onKeyDown(e: KeyboardEvent): void;
    showPicker(): void;
    protected renderAndPositionPicker(): () => void;
    protected alignPickerToComponent(): void;
    protected beforeHidePicker(): void;
    protected toggleExpandedStyles(expanded: boolean): void;
    private onPickerFocusIn;
    private onPickerFocusOut;
    private togglePickerHasFocus;
    hidePicker(): void;
    setInputWidth(width: number | 'flex'): this;
    getFocusableElement(): HTMLElement;
    setPickerGap(gap: number): this;
    setPickerMinWidth(width?: number | string): this;
    setPickerMaxWidth(width?: number | string): this;
    setPickerMaxHeight(height?: number | string): this;
    destroy(): void;
}
