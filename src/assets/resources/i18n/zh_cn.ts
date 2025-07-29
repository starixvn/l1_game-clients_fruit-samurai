const win = window as any;
export const languages = {
    "Common": {},
    "cascadingslot": {},
    "FruitSamurai": {}
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh_cn = languages;