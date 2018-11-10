/// <reference path="./Module.ts" />
interface IContext {
    context: IContext;
    CanAccessToMe(type: string, folder: string, name: string): any;
    GetPath(path: string): string;
    NameOf(type: Function): string;
    GetType(path: string): Function;
    GetEnum(path: string): IEnum;
    GetStat(): ModuleStat;
    OnStat(target: string, stat: ModuleStat, callback: (me: string, target: string, cstat: ModuleStat, stat: ModuleStat) => void): any;
    OnGStat(stat: ModuleStat, callback: (me: string, target: string, cstat: ModuleStat, stat: ModuleStat) => void): any;
    SetSuperVisor(callback: (url: IUrl) => boolean);
    Assemblies: any;

    ExecuteModule(success: boolean);
    HandleExecution();
}
interface IEnum {
    [n: string]: number;
}
declare module "define" {
    export var define: $define;
}
declare module "context" {
    export var context: IContext;
    export function CanAccessToMe(type: string, folder: string, name: string): any;
    export function GetPath(path: string): string;
    export function NameOf(type: Function): string;
    export function GetType(path: string): Function;
    export function GetEnum(path: string): IEnum;
    export function GetStat(): ModuleStat;
    export function OnStat(target: string, stat: ModuleStat, callback: (me: string, target: string, cstat: ModuleStat, stat: ModuleStat) => void): any;
    export function OnGStat(stat: ModuleStat, callback: (me: string, target: string, cstat: ModuleStat, stat: ModuleStat) => void): any;
    export function SetSuperVisor(callback: (url: IUrl) => boolean);
    export var Assemblies: any;

    function ExecuteModule(success: boolean);
    function HandleExecution();
}
declare interface ITemplateModule {
    get(name: string): HTMLTemplateElement;
    get(i: number): ITemplateModule;
}

interface ilib {
    require: $require;
    define: $define;
    entryPoint: any;
}


declare module "lib:*" {
    export var require: $require;
    export var define: $define;
    export var entryPoint: any;
}
declare module "json|*" {
    export function require(path: string, callback: (e) => void, onError: () => void): any;
    export var value: any;
}
declare module "html|*" {
    const value: any;
    export default value;
    export function Validate();
    export var context: IContext;
}
declare module "style|*" {
    export function require(path: string, callback: (e) => void, onError: () => void): any;
    export var style: StyleSheet;
    export function Validate();
}

declare module "template|*" {
    export function require(path: string, callback: (e) => void, onError: () => void): any;
    export var template: ITemplateModule;
    export function Validate();
    export var context: IContext;
}

declare module "plugin|*" {
    export var moduleType: ModuleType;
    export function addEventListener(stat: string | number, callback: IPluginEventCallback, data: any);
    export function removeEventlistenr(stat: string | number, callback: IPluginEventCallback);
}

declare module "xml|*" {
    export function require(path: string, callback: (e) => void, onError: () => void): any;
    export var xml: XMLDocument;
    export function Validate();
}

declare module "code|*" {
    export var [s]: any;
}

declare module "|*" {
    export var [s]: any
}
declare module "*|?" {
    export var moduleType: ModuleType;
    export function addEventListener(stat: string, callback: IPluginEventCallback, data: any);
    export function removeEventlistenr(stat: string, callback: IPluginEventCallback);
}

declare interface PluginsEvent {
    exports: any;
    url: IUrl;
    data: any;
}
declare interface IEvent {

    moduleType: ModuleType;
    addEventListener(stat: string, callback: IPluginEventCallback, data: any);
    removeEventlistenr(stat: string, callback: IPluginEventCallback);
}
declare interface IUrl {
    moduleType: ModuleType;
    IsExternal: boolean;
    host: string;
    path: string[];
    moduleName: string;
    ext: string;
    isAsset: boolean;
    params: string;
    getEName(defaultExt?: string): string;
    IsInternal: boolean;
    FullPath: string;
    toString(): string;
}
declare type IPluginEventCallback = (e: PluginsEvent) => void;
declare interface ITemplateExport {
    require: (m: any) => void;
    template: ITemplateModule;
    html: HTMLElement;
    context: IContext;
}
declare type $define = (path: string, dependencies: string[], module: (...args: string[]) => void) => void;
declare type $require = (modules: string, onsuccss?: (result: any) => void, onerror?: (result: any) => void, context?: any) => any;
declare var require: $require;


interface ITemplatePlugin {
    require(path: string, callback: (e) => void, onError: () => void): any;
    template: ITemplateModule;
    Validate();
    context: IContext;
}
