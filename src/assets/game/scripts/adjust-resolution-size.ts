import { _decorator, Component, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass
export class AdjustResolutionSize extends Component {
    private readonly portraitResolution = {
        width: 786,
        height: 1398,
    };

    protected onLoad(): void {
        this.adjustResolution();
    }

    adjustResolution() {
        // const { width, height } = this.portraitResolution;
        // screen.windowSize = new Size(width, height);
        // view.setDesignResolutionSize(width, height, ResolutionPolicy.FIXED_WIDTH);
        // view.emit("canvas-resize");
        view.resizeWithBrowserSize(true);
    }
}
