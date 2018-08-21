import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds');
        super(image,
            image.width / 3, 0,
            image.width / 3, image.height,
            0, 0, image.width / 3, image.height);
    }
}