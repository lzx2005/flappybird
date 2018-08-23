import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds');
        super(image,
            image.width / 3, 0,
            image.width / 3, image.height,
            0, 0, image.width / 3, image.height);

        //小鸟的宽是34，小鸟的高24，上下边距10，左右边距9
        //小鸟剪裁的x点
        this.clipX = [9,
            9 + 34 + 18,
            9 + 34 + 18 + 34 + 18
        ];
        //小鸟剪裁的y点
        this.clipY = [10, 10, 10];
        //小鸟剪裁的宽度
        this.clipW = [34, 34, 34];
        //小鸟剪裁的高度
        this.clipH = [24, 24, 24];
        //小鸟的x坐标
        this.birdX = window.innerWidth / 4;
        //三只小鸟都要一样的x坐标
        this.birdXs = [this.birdX, this.birdX, this.birdX];
        //小鸟的y坐标
        this.birdY = window.innerHeight / 2;
        //三只小鸟都要一样的y坐标
        this.birdYs = [this.birdY, this.birdY, this.birdY];
        //当前需要显示的小鸟编号
        this.index = 0;
        this.count = 0;
    }

    draw() {
        const speed = 0.2;
        if (this.count >= 2) {
            this.count = 0;
        }
        this.count += speed;
        this.index = Math.floor(this.count);
        super.draw(this.img,
            this.clipX[this.index], this.clipY[this.index],
            this.clipW[this.index], this.clipH[this.index],
            this.birdXs[this.index], this.birdYs[this.index],
            this.clipW[this.index], this.clipH[this.index]);
    }
}