import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {Background} from "./js/runtime/Background.js";
import {DataStore} from "./js/base/DataStore.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";

export class Main {
    constructor() {
        console.log('加载canvas');
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');
        console.log('canvas加载完成');
        console.log('加载数据集');
        this.dataStore = DataStore.getInstance();
        console.log('数据集加载完成');
        console.log('加载游戏资源');
        const loader = ResourceLoader.create();
        this.diretor = Director.getInstance();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        console.log('游戏资源加载完成');
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.diretor.isGmaeOver = false;
        this.dataStore
            .put('background', Background)
            .put('land', Land)
            .put('pencils', [])
            .put('birds',Birds);
        this.diretor.createPencil();
        this.diretor.run();
    }
}