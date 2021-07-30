import { LitElement } from "lit";
import * as monaco from "monaco-editor";
export declare class CodeEditor extends LitElement {
    private container;
    editor?: monaco.editor.IStandaloneCodeEditor;
    readOnly?: boolean;
    theme?: string;
    language?: string;
    code?: string;
    static styles: import("lit").CSSResultGroup;
    render(): import("lit").TemplateResult<1>;
    private getFile;
    private getCode;
    private getLang;
    private getTheme;
    private isDark;
    setValue(value: string): void;
    getValue(): string;
    setReadOnly(value: boolean): void;
    setOptions(value: monaco.editor.IStandaloneEditorConstructionOptions): void;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "code-editor": CodeEditor;
    }
}
