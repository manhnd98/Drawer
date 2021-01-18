import {injectable} from "tsyringe";

@injectable()
class MainDraw {

    commonConfig = {}

    constructor() {
        this.removeAllScrollbar();
    }

    removeAllScrollbar(){
        const elements = [...document.querySelectorAll('*')] as HTMLElement[];
        for (const element of elements) {
            element.style.overflow = null;
        }

        document.body.style.overflowY = 'auto';
    }

    getAllElementsByConfig(){
        chrome.storage.sync.get(['commonConfig'], async (result: {commonConfig: any}) => {
            if(!result.commonConfig) {
                alert('Please setup common config first!');
                return false;
            }

            const config = result.commonConfig;
        })
    }
}

export default MainDraw
