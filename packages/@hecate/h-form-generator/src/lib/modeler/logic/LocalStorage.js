import { lib } from '@hecate/core';

const DRAWING_CANVAS = 'DRAWING_CANVAS';
const DRAWING_CANVAS_VERSION = '1.1';
const DRAWING_CANVAS_VERSION_KEY = 'DRAWING_CANVAS_VERSION';
const DRAWING_CANVAS_FORM = 'DRAWING_CANVAS_FORM';

const result = {
    toJson(str) {
        return str ? JSON.parse(str) : null;
    },
    toInt(str) {
        return str ? parseInt(str, 10) : 100;
    }
};

export function getDrawingCanvas() {
    // 加入缓存版本的概念，保证缓存数据与程序匹配
    const version = lib.storageSync.getItem(DRAWING_CANVAS_VERSION_KEY);
    if (version !== DRAWING_CANVAS_VERSION) {
        lib.storageSync.setItem(DRAWING_CANVAS_VERSION_KEY, DRAWING_CANVAS_VERSION);
        saveDrawingCanvas([]);
        return null;
    }

    const str = lib.storageSync.getItem(DRAWING_CANVAS);
    return result.toJson(str);
}

export function saveDrawingCanvas(canvas) {
    lib.storageSync.setItem(DRAWING_CANVAS, JSON.stringify(canvas));
}

export function getDrawingCanvasForm() {
    const str = lib.storageSync.getItem(DRAWING_CANVAS_FORM);
    return result.toJson(str);
}

export function saveDrawingCanvasForm(settings) {
    lib.storageSync.setItem(DRAWING_CANVAS_FORM, JSON.stringify(settings));
}
