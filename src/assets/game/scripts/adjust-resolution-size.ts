import { _decorator, Component, director, ResolutionPolicy, screen, Size, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass
export class AdjustResolutionSize extends Component {
    private readonly portraitResolution = {
        width: 786,
        height: 1398,
    };

    protected onLoad(): void {
        this.adjustResolution();
        this.setupResizeListener();
    }

    adjustResolution() {
        const { width, height } = this.portraitResolution;
        const ratioScale = window.innerHeight / height;
        const newWidth = ratioScale * width;

        screen.windowSize = new Size(newWidth, window.innerHeight);
        view.setDesignResolutionSize(width, height, ResolutionPolicy.FIXED_HEIGHT);
        view.resizeWithBrowserSize(true);

        // Emit resize event
        director.emit("canvas-resize");
    }

    private setupResizeListener() {
        // Listen for canvas resize events
        director.on("canvas-resize", this.onCanvasResize, this);

        // Listen for window resize events
        window.addEventListener("resize", () => {
            setTimeout(() => {
                this.adjustResolution();
            }, 100);
        });
    }

    private onCanvasResize() {
        // Handle any additional resize logic here
        console.log("Canvas resized");
    }

    protected onDestroy(): void {
        director.off("canvas-resize", this.onCanvasResize, this);
    }
}
